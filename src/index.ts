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



import hooks, { IUseModal, IUseCheckBoxTable, IUseColor, IUseDrawer, IUseDayPicker, IUseImgsManager, IUseSelect, IusePageNation, IuseImageUploaderOption } from "./hooks/hook";
import { JDColor, Day, IconSize, TextSize, TMarginSize } from "./types/enum"
import { DEFAULT_PHOTO } from "./types/defaults"
import utills from "./utils/utils"

const { useCheckBox, useCheckBoxTable, useDayPicker, useDebounce, useInput, useModal, usePageNation, useRadio, useRange, useRedirect, useSelect, useShouldSave, useSideNav, useStoreSelect, useSwitch, useToggle } = hooks

export {
    useCheckBox, useCheckBoxTable, useDayPicker, useDebounce, useInput, useModal, usePageNation, useRadio, useRange, useRedirect, useSelect, useShouldSave, useSideNav, useStoreSelect, useSwitch, useToggle,
    DEFAULT_PHOTO, JDbutton, JDColor, Day, IconSize, JDicon, TextSize, TMarginSize, JDtooltip,
    hooks, IUseModal, IUseCheckBoxTable, IUseColor, IUseDrawer,
    IUseDayPicker, IUseImgsManager, IUseSelect, IusePageNation, IuseImageUploaderOption, JDcard, JDmodal,
    JDpreloaderModal,
    JDpreloader,
    JDlabel,
    utills,
    InputText,
    Toast
}
