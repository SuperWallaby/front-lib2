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
import JDalign from "./components/align/Align"
import JDtypho from "./components/typho/Typho"
import JDselect from "./components/select/SelectBox"
import JDdayPicker from "./components/dayPicker/DayPicker"
import JDdayPickerModal from "./components/dayPickerModal/DayPickerModal"
import JDslider, { Slide as JDslide } from "./components/slider/Slider"
import JDphotoFrame from "./components/photoFrame/PhotoFrame"
import hooks, { IUseModal, IUseCheckBoxTable, IUseColor, IUseDrawer, IUseDayPicker, IUseImgsManager, IUseSelect, IusePageNation, IuseImageUploaderOption } from "./hooks/hook";
import { JDColor, Day, IconSize, TextSize, TMarginSize, WindowSize, WindowSizeNumber } from "./types/enum"
import { DEFAULT_PHOTO } from "./types/defaults"
import utills from "./utils/utils"
import { toast } from "react-toastify";

const { useCheckBox, useCheckBoxTable, useDayPicker, useDebounce, useInput, useModal, usePageNation, useRadio, useRange, useRedirect, useSelect, useShouldSave, useSideNav, useStoreSelect, useSwitch, useToggle } = hooks

export {
    JDtypho, JDslider, JDslide, JDselect, WindowSize, WindowSizeNumber,
    JDdayPicker, JDdayPickerModal, JDphotoFrame,
    useCheckBox, JDalign, useCheckBoxTable, useDayPicker, useDebounce, useInput, useModal, usePageNation, useRadio, useRange, useRedirect, useSelect, useShouldSave, useSideNav, useStoreSelect, useSwitch, useToggle,
    DEFAULT_PHOTO, JDbutton, JDColor, Day, IconSize, JDicon, TextSize, TMarginSize, JDtooltip,
    hooks, IUseModal, IUseCheckBoxTable, IUseColor, IUseDrawer,
    IUseDayPicker, IUseImgsManager, IUseSelect, IusePageNation, IuseImageUploaderOption, JDcard, JDmodal,
    JDpreloaderModal,
    JDpreloader,
    JDlabel,
    utills,
    InputText,
    Toast,
    toast
}
