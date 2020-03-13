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
  timeUnit?: number,
  defaultRange?: {
    startHour: number,
    endHour: number
  },
  startDate?: number | Date,
};

const useStoreSelect = (stores: {
  code?: string,
  _id?: string,
  name: string,
  [key: string]: any
}[], withCode?: boolean, defaultPropCode?: string, defaultIdProp?: string) => {

  const storesOp = stores.map(s => ({
    value: (withCode ? s.code : s._id) || "",
    label: s.name
  }));

  const defaultId = defaultIdProp || localStorage.getItem("lastSelectStore") || storesOp[0].value;
  const defaultCode = defaultPropCode || storesOp[0].value;

  const storeSelectHook = useSelect(
    optionFineder(storesOp, withCode ? defaultCode : defaultId));
  const selectedStoreValue = storeSelectHook.selectedOption?.value || "";
  withCode || localStorage.setItem("lastSelectStore", selectedStoreValue);

  return { storeSelectHook, selectedStoreValue, storesOp }
}

// // 오늘기준
// const DdefaultRange = {
//   endHour: 24 // hour
//   startHour: 0, // hour
// }



export type TlocalImg = {
  key: string;
  base64: string,
  fileName: string,
  mimeType: string
}


const getlocalImgs = (localImgKey: string) => {
  let localImgs: TlocalImg[] = [];
  const temps = localStorage.getItem(localImgKey);
  if (temps) {
    const parse = JSON.parse(temps);
    if (parse)
      localImgs = [...JSON.parse(temps)];
  }
  return localImgs;
}



const validateFile = (event: React.ChangeEvent<HTMLInputElement>, handleErr: () => void) => {
  const {
    target: { files, validity }
  } = event;


  if (!validity || !files || files.length !== 1 || !files[0]) {
    handleErr();
    return false
  };

  const file = files[0];

  if (!file || !file.type) {
    handleErr();
    return false
  };

  const isVideo = file.type.includes("video");


  if (isVideo) return false

  const { name } = file;
  const filteredName = removeSpecialChar(name.slice(0, name.lastIndexOf(".")));

  return { file, filteredName }
}


export interface IUseImgsManager {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  deletelocalImg: (deleteKey: string[]) => void;
  deleteUrl: (deleteUrl: string[]) => void;
  urls: string[];
  uploading: boolean;
  setlocalImgs: Dispatch<SetStateAction<TlocalImg[]>>
  isError: boolean;
  setUrls: Dispatch<SetStateAction<string[]>>;
  localImgs: TlocalImg[];
}

export const useImgsManager = (
  localImgKey: string,
  defaultUrls: string[],
  option: IuseImageUploaderOption = DEFAULT_IMAGEUP_LOADER_OPTION,
): IUseImgsManager => {
  const tempLocalImgs = getlocalImgs(localImgKey);
  const [urls, setUrls] = useState<string[]>(defaultUrls);
  const [localImgs, setlocalImgs] = useState<TlocalImg[]>(tempLocalImgs);
  const [uploading, setUploading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleErr = () => {
    setIsError(true);
    setUploading(false);
  }

  const saveTemp = (localImgs: TlocalImg[]) => {
    sessionStorage.setItem(localImgKey, JSON.stringify(localImgs));
    setlocalImgs(localImgs)
  }

  const deleteUrl = (deleteUrl: string[]) => {
    const updateUrls = urls.filter(url => !deleteUrl.includes(url))
    setUrls(updateUrls);
  }

  const addlocalImg = (localImg: TlocalImg) => {
    const updateTemps = [localImg, ...localImgs];
    saveTemp(updateTemps);

  }
  const deletelocalImg = (deleteKey: string[]) => {
    const updateTemps = localImgs.filter(ti => !deleteKey.includes(ti.key));
    saveTemp(updateTemps);
  }

  //  이벤트 객체 => uploadImg(파일객체);
  const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setIsError(false);
    setUploading(true);
    const result = validateFile(event, handleErr);

    if (result) {
      const { file, filteredName } = result;
      Resizer.imageFileResizer(
        file,
        option.resizeMaxWidth,
        option.resizeMaxHeight,
        "JPEG",
        option.quality,
        0,
        async (base64: string) => {
          setUploading(false);
          addlocalImg({ base64, fileName: filteredName, mimeType: file.type, key: s4() });
        },
        'base64'
      );
    }
  };

  return { onChangeFile, deletelocalImg, deleteUrl, urls, uploading, isError, localImgs, setlocalImgs, setUrls }
}

// //  이미지 업로더
// const useImageUploader = (
//   imgKey: string,
//   defaultFileUrl?: string[],
//   propOption?: IuseImageUploaderOption,
//   onUpload?: (file: any) => void
// ): IuseImageUploader => {

//   const defaultFileProp: TFile | undefined = defaultFileUrl ? {
//     fileName: "",
//     mimeType: "image/jpeg",
//     base64: undefined,
//     url: defaultFileUrl[0]
//   } : undefined;

//   const localImg = sessionStorage.getItem(imgKey);
//   const defaultFile = localImg ? JSON.parse(localImg) : defaultFileProp || DEFAULT_FILE;
//   const [file, setFile] = useState<TFile>(defaultFile);

//   const [uploading, seTUploading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   let option = propOption || DEFAULT_IMAGEUP_LOADER_OPTION;


//   const handleErr = () => {
//     setIsError(true);
//     seTUploading(false);
//   }

//   const setView = (file: TFile) => {
//     setIsError(false);
//     seTUploading(false);
//     setFile(file);
//   }

//   // 로컬로 업로드
//   const uploadImg = async ({
//     base64,
//     fileName,
//     mimeType
//   }: TFile) => {
//     const saveData: TFile = {
//       base64,
//       fileName: fileName.replace("\(|\)", ""),
//       mimeType,
//     }
//     sessionStorage.setItem(imgKey, JSON.stringify(saveData));
//     setView(saveData);
//   };

//   //  이벤트 객체 => uploadImg(파일객체);
//   const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.persist();
//     seTUploading(true);
//     const {
//       target: { files, validity }
//     } = event;

//     if (!validity || !files || files.length !== 1 || !files[0]) {
//       handleErr();
//       return
//     };

//     const file = files[0];

//     if (!file || !file.type) {
//       handleErr();
//       return
//     };

//     const isVideo = file.type.includes("video");
//     const filteredName = file.name.replace(/!@#$%^&*(),?"{}|<>:/gi, "_");

//     Resizer.imageFileResizer(
//       file,
//       option.resizeMaxWidth,
//       option.resizeMaxHeight,
//       "JPEG",
//       option.quality,
//       0,
//       async (base64: string) => {
//         uploadImg({ base64, fileName: filteredName, mimeType: file.type });
//       },
//       'base64'
//     );
//   };

//   useEffect(() => {
//     return () => {
//       seTUploading(false);
//     };
//   }, []);

//   return {
//     file,
//     uploading,
//     onChangeFile,
//     isError,
//     option: propOption
//   };
// };

// 디바운스 정
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
  const [from, setFrom] = useState<Date | null>(fromTemp);
  const [entered, setEntered] = useState<Date | null>(toTemp);
  const [to, setTo]: any = useState<Date | null>(toTemp);

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
}

export interface IUseDrawer {
  onClick: (e: any) => void;
  open: boolean;
}

// 셀렉트박스 훅
function useSelect<V = any>(
  defaultValue: IselectedOption<V> | null
): IUseSelect<V> {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const onChange = useCallback((value: IselectedOption<V>) => {
    setSelectedOption(value);
  }, []);

  return { selectedOption, onChange };
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
}

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
  useRedirect,
  useCheckBoxTable
};
