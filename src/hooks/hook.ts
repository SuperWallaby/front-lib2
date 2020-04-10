import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  useCallback,
  ChangeEvent
} from "react";
import { IselectedOption } from "../types/interface";
import { TLanguageShort } from "../types/enum";
// @ts-ignore 타입이 존재하지않는 모듈
import Resizer from "react-image-file-resizer";
import { DEFAULT_IMAGEUP_LOADER_OPTION } from "../types/defaults";
import optionFineder from "../utils/optionFinder";
import s4 from "../utils/keyGen";
import { removeSpecialChar } from "../utils/autoFormat";
import moment from "moment-timezone";

export type IUseFetch = [
  any,
  boolean,
  boolean,
  (url: string | undefined) => void
];

const useShouldSave = (updateValue: any[]) => {
  const isInitialMount = useRef(true);
  const [shouldSave, setShouldSave] = useState(false);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setShouldSave(true);
      // Your useEffect code here to be run on update
    }
  }, updateValue);

  return { shouldSave, setShouldSave };
};

export interface IuseImageUploaderOption {
  resizeMaxWidth?: number;
  resizeMaxHeight?: number;
  quality?: number;
}

export type IuseTimePickerProps = {
  timeUnit?: number;
  defaultRange?: {
    startHour: number;
    endHour: number;
  };
  startDate?: number | Date;
};

const useStoreSelect = (
  stores: {
    code?: string;
    _id?: string;
    name: string;
    [key: string]: any;
  }[],
  withCode?: boolean,
  defaultPropCode?: string,
  defaultIdProp?: string
) => {
  const storesOp = stores.map(s => ({
    value: (withCode ? s.code : s._id) || "",
    label: s.name
  }));

  const defaultId =
    defaultIdProp ||
    localStorage.getItem("lastSelectStore") ||
    storesOp[0].value;
  const defaultCode = defaultPropCode || storesOp[0].value;

  const storeSelectHook = useSelect(
    optionFineder(storesOp, withCode ? defaultCode : defaultId)
  );
  const selectedStoreValue = storeSelectHook.selectedOption?.value || "";
  withCode || localStorage.setItem("lastSelectStore", selectedStoreValue);

  return { storeSelectHook, selectedStoreValue, storesOp };
};

export type TlocalFile = {
  key: string;
  base64: string;
  fileName: string;
  mimeType: string;
};

const getlocalFiles = (localFileKey: string) => {
  let localFiles: TlocalFile[] = [];
  const temps = localStorage.getItem(localFileKey);
  if (temps) {
    const parse = JSON.parse(temps);
    if (parse) localFiles = [...JSON.parse(temps)];
  }
  return localFiles;
};

const validateFile = (
  event: React.ChangeEvent<HTMLInputElement>,
  handleErr: () => void
) => {
  const {
    target: { files, validity }
  } = event;

  if (!validity || !files || files.length !== 1 || !files[0]) {
    handleErr();
    return false;
  }

  const file = files[0];

  if (!file || !file.type) {
    handleErr();
    return false;
  }

  const isImg = file.type.includes("image");

  const { name } = file;
  const filteredName = removeSpecialChar(name.slice(0, name.lastIndexOf(".")));

  return { file, isImg, filteredName };
};

export interface IuseFilesManager {
  onChangeFile: (
    event: ChangeEvent<HTMLInputElement>,
    index?: number
  ) => Promise<void>;
  deletelocalFile: (deleteKey: string[]) => void;
  deleteUrl: (deleteUrl: string[]) => void;
  urls: string[];
  uploading: boolean;
  setlocalFiles: Dispatch<SetStateAction<TlocalFile[]>>;
  isError: boolean;
  setUrls: Dispatch<SetStateAction<string[]>>;
  localFiles: TlocalFile[];
}

// Notice
// 파일 매니저는 세션스토리지에 해당 File을 저장하여 최종 업로드 되기전까지 관리합니다.
// HOOK 에 저장된 정보가 지워지지 않게 계속 유지해야할 경우에
// localFileKey를 사용하여 해당키를 세션에 저장해두세요
// 서버에서 리턴하는 값이 URL이기떄문에 defaultFiles는 존재하지 않습니다.
// singleFile 에 값을 주면 파일 하나만 오르락 내리락 합니다.
const useFilesManager = (
  defaultUrls?: string[],
  localFileKey?: string,
  imgOption: IuseImageUploaderOption = DEFAULT_IMAGEUP_LOADER_OPTION
): IuseFilesManager => {
  const templocalFiles = localFileKey ? getlocalFiles(localFileKey) : undefined;
  // 이미 서버에 저장되어있는 URL들일 경우 해당 HOOk에 저장됩니다.
  const [urls, setUrls] = useState<string[]>(defaultUrls || []);
  const [localFiles, setlocalFiles] = useState<TlocalFile[]>(
    templocalFiles || []
  );
  const [uploading, setUploading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleErr = () => {
    setIsError(true);
    setUploading(false);
  };

  // 해당파일을 hook과 세션에 둘다 저장 합니다.
  const saveTemp = (localFiles: TlocalFile[]) => {
    if (localFileKey)
      sessionStorage.setItem(localFileKey, JSON.stringify(localFiles));
    setlocalFiles(localFiles);
  };

  const deleteUrl = (deleteUrl: string[]) => {
    const updateUrls = urls.filter(url => !deleteUrl.includes(url));
    setUrls(updateUrls);
  };

  const addLocalFile = (localFile: TlocalFile, index?: number) => {
    let updateTemps: TlocalFile[] = [];
    if (index === undefined) {
      updateTemps = [localFile, ...localFiles];
    } else {
      if (localFiles[index]) {
        localFiles.splice(index, 1, localFile);
        updateTemps = localFiles;
      } else {
        localFiles[index] = localFile;
        updateTemps = localFiles;
      }
    }

    saveTemp([...updateTemps]);
  };

  const deletelocalFile = (deleteKey: string[]) => {
    const updateTemps = localFiles.filter(ti => !deleteKey.includes(ti.key));
    saveTemp(updateTemps);
  };

  //  이벤트 객체 => uploadImg(파일객체);
  const onChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    event.persist();
    setIsError(false);
    setUploading(true);
    const result = validateFile(event, handleErr);

    if (result) {
      const { file, filteredName, isImg } = result;

      if (isImg) {
        Resizer.imageFileResizer(
          file,
          imgOption.resizeMaxWidth,
          imgOption.resizeMaxHeight,
          "JPEG",
          imgOption.quality,
          0,
          async (base64: string) => {
            setUploading(false);
            const uploadFile = {
              base64,
              fileName: filteredName,
              mimeType: file.type,
              key: s4()
            };
            addLocalFile(uploadFile, index);
          },
          "base64"
        );
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          if (reader.result) {
            const uploadFile = {
              base64: reader.result.toString(),
              fileName: filteredName,
              mimeType: file.type,
              key: s4()
            };
            addLocalFile(uploadFile, index);
            setUploading(false);
          }
        };
        reader.onerror = function(error) {
          setUploading(false);
          console.log("Error: ", error);
        };
      }
    }
  };

  return {
    onChangeFile,
    deletelocalFile,
    deleteUrl,
    urls,
    uploading,
    isError,
    localFiles,
    setlocalFiles,
    setUrls
  };
};

// Defreacated.
function useDebounce(value: any, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export interface TUseInput<T = string> {
  value: T;
  onChangeValid: (value: boolean | string) => void;
  onChange: (foo: any) => any;
  isValid: any;
}

// @deprecated
export type TUseRedirect = [boolean, string, (url: string) => void];

function useRedirect(
  inFlag: boolean = false,
  inUrl: string = ""
): TUseRedirect {
  const [flag, setFlag] = useState(inFlag);
  const [url, inSetRedirect] = useState(inUrl);

  const setRedirect = (redirectUrl: string) => {
    inSetRedirect(redirectUrl);
    setFlag(true);
  };

  return [flag, url, setRedirect];
}

// 밸리데이션을 포함한 훅 리턴
function useInput<T = string>(
  defaultValue: T,
  defulatValid: boolean | string = "",
  prefix?: any,
  suffix?: any
): TUseInput<T> {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(defulatValid);

  const onChange = useCallback((value: any) => {
    let prefixTemp = prefix || "";
    let suffixTemp = suffix || "";
    setValue(prefixTemp + value + suffixTemp);
  }, []);

  const onChangeValid = useCallback((value: boolean | string) => {
    setIsValid(value);
  }, []);

  return {
    value,
    onChange,
    isValid,
    onChangeValid
  };
}

// 체크박스
function useCheckBox(defaultValue: boolean) {
  const [checked, setChecked] = useState(defaultValue);

  const onChange = (value: boolean) => {
    setChecked(value);
  };

  return {
    checked,
    onChange
  };
}

export interface IUseStoreSelect {
  storeSelectHook: IUseSelect<any>;
  selectedStoreId: any;
  storesOp: {
    value: string;
    label: string;
  }[];
}

// 데이트 픽커
export interface IUseDayPicker {
  from: Date | null;
  setFrom: React.Dispatch<React.SetStateAction<Date | null>>;
  to: Date | null;
  setTo: React.Dispatch<React.SetStateAction<Date | null>>;
  entered: Date | null;
  setEntered: React.Dispatch<React.SetStateAction<Date | null>>;
  setDate: (date: Date) => void;
}

const pureDate = (date: Date | null) => {
  return date
    ? moment(date)
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .toDate()
    : null;
};

function useDayPicker(
  defaultFrom: Date | null | string,
  defaultTo: Date | null | string
): IUseDayPicker {
  let fromTemp: Date | null | string = defaultFrom;
  let toTemp: Date | null | string = defaultTo;
  if (typeof defaultFrom === "string") fromTemp = moment(defaultFrom).toDate();
  if (typeof defaultTo === "string") toTemp = moment(defaultTo).toDate();
  if (typeof fromTemp === "string") throw Error;
  if (typeof toTemp === "string") throw Error;
  const [from, setFrom] = useState<Date | null>(pureDate(fromTemp));
  const [entered, setEntered] = useState<Date | null>(pureDate(toTemp));
  const [to, setTo]: any = useState<Date | null>(pureDate(toTemp));

  const setDate = useCallback((date: Date) => {
    setFrom(date);
    setEntered(date);
    setTo(date);
  }, []);

  return {
    from,
    to,
    entered,
    setFrom,
    setTo,
    setEntered,
    setDate
  };
}

// 색상 필커
export interface IUseColor {
  color: string;
  setColor: (inInfo: string) => void;
  setDisplay: (inInfo: boolean) => void;
  display: boolean;
}

// 라디오 훅
function useRadio(defaultValue: any = "") {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value: any) => {
    setValue(value);
  };

  return [value, onChange];
}

// 스위치 훅
function useSwitch(defaultValue: boolean) {
  const [checked, setChecked] = useState(defaultValue);

  const onChange = (value: boolean) => {
    setChecked(value);
  };

  return { checked, onChange };
}

// useRange
function useRange(defaultValue: number, maxValue?: number, minValue?: number) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value: any) => {
    setValue(value);
  };

  return { value, onChange, maxValue, minValue };
}

export interface IUseSelect<V = any> {
  selectedOption: IselectedOption<V> | null;
  onChange(foo: IselectedOption<V>): void;
  options?: IselectedOption[];
}

export interface IUseDrawer {
  onClick: (e: any) => void;
  open: boolean;
}

// 셀렉트박스 훅
function useSelect<V = any>(
  defaultValue: IselectedOption<V> | null,
  options?: IselectedOption[]
): IUseSelect<V> {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const onChange = useCallback((value: IselectedOption<V>) => {
    setSelectedOption(value);
  }, []);

  return { selectedOption, onChange, options };
}

// 투글 훅
function useToggle(defaultValue: boolean): [boolean, any] {
  const [toggle, setToggle] = useState(defaultValue);

  const onClick = () => {
    setToggle(!toggle);
  };

  return [toggle, onClick];
}

export interface IUseSideNav {
  sideNavIsOpen: boolean;
  setSideNavIsOpen: (flag?: boolean | undefined) => void;
}

// 사이드 네비
function useSideNav(): IUseSideNav {
  let defaultValue = true;
  const navRecord = sessionStorage.getItem("JDsideOpen");
  defaultValue = navRecord === "Y";
  const [sideNavIsOpen, setOpen] = useState(defaultValue);

  const setSideNavIsOpen = useCallback(
    (flag?: boolean) => {
      sessionStorage.setItem("JDsideOpen", sideNavIsOpen ? "N" : "Y");
      setOpen(flag ? flag : !sideNavIsOpen);
    },
    [sideNavIsOpen]
  );

  return { sideNavIsOpen, setSideNavIsOpen };
}

export interface IusePageNation {
  page: number;
  setPage: (page: number) => void;
}
// 투글 훅
function usePageNation(defaultValue: number): IusePageNation {
  const [page, inSetPage] = useState(defaultValue);

  const setPage = (foo: number) => {
    inSetPage(foo);
  };

  return { page, setPage };
}

export interface IUseModal<T = any> {
  isOpen: boolean;
  openModal: (inInfo?: T) => void;
  closeModal: () => void;
  info: T;
}

// 모달훅
function useModal<T = any>(
  defaultValue: boolean = false,
  defaultInfo: any = {}
): IUseModal<T> {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const [info, setInfo] = useState(defaultInfo);

  const openModal = (inInfo?: any) => {
    setIsOpen(true);
    setInfo(inInfo);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    info
  };
}

export let CURRENT_LANG: TLanguageShort = "kr";

export interface IUseCheckBoxTable {
  onToogleRow: (key: string) => void;
  checkedIds: string[];
  setCheckedIds: Dispatch<SetStateAction<string[]>>;
  selectAll: any;
  setSelectAll: any;
  onToogleAllRow: () => void;
  isSelected: (key: string) => any;
}

const useCheckBoxTable = (
  defaultCheckIds: string[] = [],
  allIds: string[] = []
): IUseCheckBoxTable => {
  const [checkedIds, setCheckedIds] = useState<string[]>(defaultCheckIds);
  const [selectAll, setSelectAll]: any = useState(false);

  //    모든 라인들에대한 아이디를 투글함
  const onToogleAllRow = () => {
    const updateSelecetedes = allIds.map(id =>
      checkedIds.includes(id) ? "" : id
    );
    setCheckedIds(updateSelecetedes);
    setSelectAll(!selectAll);
  };

  const onToogleRow = (key: string) => {
    if (checkedIds.includes(key)) {
      setCheckedIds([...checkedIds.filter(value => value !== key)]);
    } else {
      setCheckedIds([...checkedIds, key]);
    }
  };

  const isSelected = (key: string) => checkedIds.includes(key);

  return {
    onToogleRow,
    onToogleAllRow,
    checkedIds,
    setCheckedIds,
    selectAll,
    setSelectAll,
    isSelected
  };
};

export default {
  useInput,
  useCheckBox,
  useRadio,
  useSwitch,
  useSelect,
  useToggle,
  useModal,
  useSideNav,
  useRange,
  useDebounce,
  useStoreSelect,
  useShouldSave,
  useDayPicker,
  usePageNation,
  useRedirect,
  useCheckBoxTable,
  useFilesManager
};

export {
  useInput,
  useCheckBox,
  useRadio,
  useSwitch,
  useSelect,
  useToggle,
  useModal,
  useSideNav,
  useRange,
  useDebounce,
  useStoreSelect,
  useShouldSave,
  useDayPicker,
  usePageNation,
  useFilesManager,
  useRedirect,
  useCheckBoxTable
};
