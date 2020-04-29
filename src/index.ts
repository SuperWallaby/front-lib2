import JDbutton from './components/button/Button';
import JDicon from './components/icons/Icons';
import JDtooltip from './components/tooltip/Tooltip';
import JDcard from './components/cards/Card';
import Toast from './components/toast/Toast';
import JDmodal from './components/modal/Modal';
import JDlabel from './components/label/JDLabel';
import JDbadge from './components/badge/Badge';
import JDswitch from './components/switch/Switch';
import JDpreloader from './components/preloader/Preloader';
import JDpreloaderModal from './components/preloaderModal/PreloaderModal';
import InputText from './components/InputText/InputText';
import JDalign from './components/align/Align';
import JDcontainer from './components/container/Container';
import JDtypho from './components/typho/Typho';
import JDselect from './components/select/SelectBox';
import JDdayPicker, { TDayPickerDot } from './components/dayPicker/DayPicker';
import JDdayPickerModal from './components/dayPickerModal/DayPickerModal';
import JDslider, { Slide as JDslide } from './components/slider/Slider';
import JDphotoFrame from './components/photoFrame/PhotoFrame';
import JDdoc, { DocHeader as JDdocHeader, DocSection as JDdocSection } from './components/doc/Doc';
import JDconfiger from './components/configer/Configer';
import JDtable, { IJDTableProps, JDcolumn, ReactTableDefault } from './components/table/Table';
import JDFileManagerModal from './components/fileManager/FileManagerModal';
import JDsearchInput, { IJDsearchInputProp } from './components/searchInput/SearchInput';
import { IDateModalProps, ISearchViewData } from './components/searchInput/DataModal';
import JDsingleUploader from './components/fileUploader/SingleUploader';
import { JDtabs, Tab, TabList, TabPanel } from './components/tabs/Tabs';
import hooks, {
	IUseModal,
	IUseCheckBoxTable,
	IUseColor,
	IUseDrawer,
	IUseDayPicker,
	IuseFilesManager,
	IUseSelect,
	IusePageNation,
	IuseImageUploaderOption
} from './hooks/hook';
import { JDColor, Day, IconSize, TextSize, TMarginSize, WindowSize, WindowSizeNumber } from './types/enum';
import { DEFAULT_PHOTO } from './types/defaults';
import utills from './utils/utils';
import { toast } from 'react-toastify';

const {
	useCheckBox,
	useCheckBoxTable,
	useDayPicker,
	useDebounce,
	useInput,
	useModal,
	useWindowSize,
	usePageNation,
	useRadio,
	useRange,
	useRedirect,
	useSelect,
	useShouldSave,
	useSideNav,
	useStoreSelect,
	useSwitch,
	useToggle,
	useFilesManager
} = hooks;

export {
	TDayPickerDot,
	JDtypho,
	JDslider,
	JDbadge,
	JDtable,
	JDslide,
	JDselect,
	JDconfiger,
	WindowSize,
	WindowSizeNumber,
	JDdayPicker,
	JDdayPickerModal,
	JDphotoFrame,
	useCheckBox,
	JDalign,
	useCheckBoxTable,
	useDayPicker,
	useDebounce,
	useInput,
	useModal,
	usePageNation,
	useRadio,
	useRange,
	useRedirect,
	useWindowSize,
	useSelect,
	useShouldSave,
	useSideNav,
	useStoreSelect,
	useSwitch,
	useToggle,
	DEFAULT_PHOTO,
	JDbutton,
	JDColor,
	Day,
	IconSize,
	JDicon,
	TextSize,
	TMarginSize,
	JDtooltip,
	hooks,
	useFilesManager,
	IuseFilesManager,
	IUseModal,
	IUseCheckBoxTable,
	IUseColor,
	IUseDrawer,
	IUseDayPicker,
	IUseSelect,
	IusePageNation,
	JDFileManagerModal,
	JDsingleUploader,
	IuseImageUploaderOption,
	JDcard,
	JDmodal,
	JDcontainer,
	TabPanel,
	Tab,
	TabList,
	JDtabs,
	JDpreloaderModal,
	IDateModalProps,
	ISearchViewData,
	IJDsearchInputProp,
	JDsearchInput,
	JDpreloader,
	JDlabel,
	utills,
	JDdoc,
	JDswitch,
	JDdocHeader,
	JDdocSection,
	InputText,
	Toast,
	toast,
	IJDTableProps,
	JDcolumn,
	ReactTableDefault
};
