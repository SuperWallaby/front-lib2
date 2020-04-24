/// <reference types="react" />
/// <reference types="@emotion/core" />
import JDbutton from "./components/button/Button";
import JDicon from "./components/icons/Icons";
import JDtooltip from "./components/tooltip/Tooltip";
import JDcard from "./components/cards/Card";
import Toast from "./components/toast/Toast";
import JDmodal from "./components/modal/Modal";
import JDlabel from "./components/label/JDLabel";
import JDpreloader from "./components/preloader/Preloader";
import JDpreloaderModal from "./components/preloaderModal/PreloaderModal";
import InputText from "./components/InputText/InputText";
import JDalign from "./components/align/Align";
import JDcontainer from "./components/container/Container";
import JDtypho from "./components/typho/Typho";
import JDselect from "./components/select/SelectBox";
import JDdayPicker, { TDayPickerDot } from "./components/dayPicker/DayPicker";
import JDdayPickerModal from "./components/dayPickerModal/DayPickerModal";
import JDslider, { Slide as JDslide } from "./components/slider/Slider";
import JDphotoFrame from "./components/photoFrame/PhotoFrame";
import JDconfiger from "./components/configer/Configer";
import JDtable, { IJDTableProps, JDcolumn, ReactTableDefault } from "./components/table/Table";
import JDFileManagerModal from "./components/fileManager/FileManagerModal";
import JDsearchInput, { IJDsearchInputProp } from "./components/searchInput/SearchInput";
import { IDateModalProps, ISearchViewData } from "./components/searchInput/DataModal";
import JDsingleUploader from "./components/fileUploader/SingleUploader";
import { JDtabs, Tab, TabList, TabPanel } from "./components/tabs/Tabs";
import hooks, { IUseModal, IUseCheckBoxTable, IUseColor, IUseDrawer, IUseDayPicker, IuseFilesManager, IUseSelect, IusePageNation, IuseImageUploaderOption } from "./hooks/hook";
import { JDColor, Day, IconSize, TextSize, TMarginSize, WindowSize, WindowSizeNumber } from "./types/enum";
import { DEFAULT_PHOTO } from "./types/defaults";
import utills from "./utils/utils";
import { toast } from "react-toastify";
declare const useCheckBox: typeof import("./hooks/hook").useCheckBox, useCheckBoxTable: (defaultCheckIds?: string[], allIds?: string[]) => IUseCheckBoxTable, useDayPicker: typeof import("./hooks/hook").useDayPicker, useDebounce: typeof import("./hooks/hook").useDebounce, useInput: typeof import("./hooks/hook").useInput, useModal: typeof import("./hooks/hook").useModal, useWindowSize: typeof import("./hooks/hook").useWindowSize, usePageNation: typeof import("./hooks/hook").usePageNation, useRadio: typeof import("./hooks/hook").useRadio, useRange: typeof import("./hooks/hook").useRange, useRedirect: typeof import("./hooks/hook").useRedirect, useSelect: typeof import("./hooks/hook").useSelect, useShouldSave: (updateValue: any[]) => {
    shouldSave: boolean;
    setShouldSave: import("react").Dispatch<import("react").SetStateAction<boolean>>;
}, useSideNav: typeof import("./hooks/hook").useSideNav, useStoreSelect: (stores: {
    [key: string]: any;
    code?: string | undefined;
    _id?: string | undefined;
    name: string;
}[], withCode?: boolean | undefined, defaultPropCode?: string | undefined, defaultIdProp?: string | undefined) => {
    storeSelectHook: IUseSelect<any>;
    selectedStoreValue: any;
    storesOp: {
        value: string;
        label: string;
    }[];
}, useSwitch: typeof import("./hooks/hook").useSwitch, useToggle: typeof import("./hooks/hook").useToggle, useFilesManager: (defaultUrls?: string[] | undefined, localFileKey?: string | undefined, imgOption?: IuseImageUploaderOption) => IuseFilesManager;
export { TDayPickerDot, JDtypho, JDslider, JDtable, JDslide, JDselect, JDconfiger, WindowSize, WindowSizeNumber, JDdayPicker, JDdayPickerModal, JDphotoFrame, useCheckBox, JDalign, useCheckBoxTable, useDayPicker, useDebounce, useInput, useModal, usePageNation, useRadio, useRange, useRedirect, useWindowSize, useSelect, useShouldSave, useSideNav, useStoreSelect, useSwitch, useToggle, DEFAULT_PHOTO, JDbutton, JDColor, Day, IconSize, JDicon, TextSize, TMarginSize, JDtooltip, hooks, useFilesManager, IuseFilesManager, IUseModal, IUseCheckBoxTable, IUseColor, IUseDrawer, IUseDayPicker, IUseSelect, IusePageNation, JDFileManagerModal, JDsingleUploader, IuseImageUploaderOption, JDcard, JDmodal, JDcontainer, TabPanel, Tab, TabList, JDtabs, JDpreloaderModal, IDateModalProps, ISearchViewData, IJDsearchInputProp, JDsearchInput, JDpreloader, JDlabel, utills, InputText, Toast, toast, IJDTableProps, JDcolumn, ReactTableDefault, };
