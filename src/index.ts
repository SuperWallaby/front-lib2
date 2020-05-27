import JDbutton, { ButtonMemo } from './components/button/Button';
import JDicon from './components/icons/Icons';
import JDtooltip from './components/tooltip/Tooltip';
import JDcard from './components/cards/Card';
import JDdropDown from './components/dropDown/DropDown';
import JDcheckBox from './components/checkbox/CheckBox';
import Toast from './components/toast/Toast';
import JDmodal, { JDmodalConfigProps } from './components/modal/Modal';
import JDlabel from './components/label/JDLabel';
import JDbadge from './components/badge/Badge';
import JDsplinter from './components/splinter/Splinter';
import JDswitch from './components/switch/Switch';
import JDrequireMark from './components/requireMark/RequireMark';
import JDpreloader from './components/preloader/Preloader';
import JDpreloaderModal from './components/preloaderModal/PreloaderModal';
import InputText from './components/InputText/InputText';
import JDalign, { IJDalignProp } from './components/align/Align';
import JDcontainer from './components/container/Container';
import JDtypho from './components/typho/Typho';
import JDselect from './components/select/SelectBox';
import JDtable,{IJDTableProps,JDTCinfo,JDcolumn,ReactTableDefault} from './components/table/Table';
import JDdayPicker, { TDayPickerDot } from './components/dayPicker/DayPicker';
import JDdayPickerModal from './components/dayPickerModal/DayPickerModal';
import JDslider, { Slide as JDslide } from './components/slider/Slider';
import JDphotoFrame from './components/photoFrame/PhotoFrame';
import JDdoc, { DocHeader as JDdocHeader, DocSection as JDdocSection } from './components/doc/Doc';
import JDconfiger from './components/configer/Configer';
import JDlogo from './components/logo/Logo';
import JDlist from './components/list/List';
import TooltipList, { ReactTooltip, TooltipButtons, TButtonProp } from './components/tooltipList/TooltipList';
import JDpagination from './components/pagination/Pagination';
import JDradioButton from './components/radioButton/RadioButton';
import JDFileManagerModal from './components/fileManager/FileManagerModal';
import JDsearchInput, { IJDsearchInputProp } from './components/searchInput/SearchInput';
import { IDateModalProps, ISearchViewData } from './components/searchInput/DataModal';
import JDsingleUploader from './components/fileUploader/SingleUploader';
import { DEFAULT_PAGINATION_SETTING } from './types/defaults';
import { JDtabs, Tab, TabList, TabPanel } from './components/tabs/Tabs';
import hooks, {
	IUseModal,
	IUseCheckBoxTable,
	IUseColor,
	IUseDrawer,
	IUseDayPicker,
	IuseFilesManager,
	IUseSelect,
	IusePagination,
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
	usePagination,
	useRadioButton,
	useRadio,
	useRange,
	useRedirect,
	useSelect,
	useShouldSave,
	useSideNav,
	useStoreSelect,
	useDropDown,
	useSwitch,
	useToggle,
	useFilesManager
} = hooks;

//TODO 유틸만 따로 모듈 분리
const {
	JDatomClasses,
	arraySum,
	autoComma,
	autoHypen,
	card_space,
	dateRangeFormat,
	fromToRender,
	getFromResult,
	insideRedirect,
	instanceOfA,
	isEmail,
	enumToOption,
	selectOpCreater,
	isEmpty,
	isHaveNumber,
	isHaveScharacter,
	isIncludeSpecialChar,
	isLast,
	isLengthIn,
	isMaxOver,
	isName,
	isNumber,
	isNumberMinMax,
	isPassword,
	isPhone,
	isUrl,
	isYYYYMMDD,
	jsonString,
	muResult,
	numberStr,
	onCompletedMessage,
	queryDataFormater,
	randomIntFromInterval,
	removeNullOfObject,
	removeSpecialChar,
	s4,
	searchListFormat,
	setMidNight,
	textAlignClass,
	toNumber
} = utills;

export {
	TDayPickerDot,
	JDtypho,
	JDslider,
	JDbadge,
	JDslide,
	JDselect,
	JDconfiger,
	JDradioButton,
	WindowSize,
	WindowSizeNumber,
	JDdayPicker,
	JDdayPickerModal,
	JDphotoFrame,
	JDpagination,
	JDmodalConfigProps,
	useCheckBox,
	JDdropDown,
	JDalign,
	JDcheckBox,
	useCheckBoxTable,
	useDayPicker,
	useDebounce,
	useInput,
	useDropDown,
	useModal,
	usePagination,
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
	useRadioButton,
	DEFAULT_PHOTO,
	JDbutton,
	ButtonMemo,
	JDColor,
	JDlogo,
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
	IJDalignProp,
	IusePagination,
	JDFileManagerModal,
	JDsingleUploader,
	IuseImageUploaderOption,
	JDcard,
	JDmodal,
	ReactTooltip,
	JDlist,
	JDcontainer,
	TabPanel,
	Tab,
	TabList,
	TooltipButtons,
	JDtabs,
	JDsplinter,
	selectOpCreater,
	enumToOption,
	JDpreloaderModal,
	IDateModalProps,
	ISearchViewData,
	IJDsearchInputProp,
	JDsearchInput,
	TButtonProp,
	JDpreloader,
	JDlabel,
	utills,
	JDdoc,
	JDswitch,
	JDdocHeader,
	JDdocSection,
	JDrequireMark,
	InputText,
	TooltipList,
	Toast,
	toast,
	DEFAULT_PAGINATION_SETTING,
	JDatomClasses,
	arraySum,
	autoComma,
	autoHypen,
	card_space,
	dateRangeFormat,
	fromToRender,
	getFromResult,
	insideRedirect,
	instanceOfA,
	isEmail,
	isEmpty,
	isHaveNumber,
	isHaveScharacter,
	JDtable,
	IJDTableProps,
	JDTCinfo,
	JDcolumn,
	ReactTableDefault,
	isIncludeSpecialChar,
	isLast,
	isLengthIn,
	isMaxOver,
	isName,
	isNumber,
	isNumberMinMax,
	isPassword,
	isPhone,
	isUrl,
	isYYYYMMDD,
	jsonString,
	muResult,
	numberStr,
	onCompletedMessage,
	queryDataFormater,
	randomIntFromInterval,
	removeNullOfObject,
	removeSpecialChar,
	s4,
	searchListFormat,
	setMidNight,
	textAlignClass,
	toNumber
};
