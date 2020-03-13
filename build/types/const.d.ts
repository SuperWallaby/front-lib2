import { PaymentStatus, LayoutType, BookingStatus, SalesStatisticsUnit, SendTarget, NotiLevel, HouseStatus, PayMethod, RoomGender, PricingType, Gender, ExcelExpress, Funnels, AutoSendWhen, Language, Day, StoreType, InfoKey } from "./enum";
import { IselectedOption } from "../atoms/forms/selectBox/SelectBox";
export declare const DAY_START_TIME: {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
};
export declare const TIME_DIFF: number;
export declare const LANGUAGE_LIST: Language[];
export declare const FAVI_URL = "https://res.cloudinary.com/stayjanda-com/image/upload/v1554092565/favicon.ico";
export declare const IMG_REPO = "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/";
export declare const WeekArrKr: string[];
export declare const WeekArrEn: Day[];
export declare const SmsReplaceKeyEnumKeys: string[];
export declare const SmsReplaceKeyEnumValues: string[];
export declare const SELECT_DUMMY_OP: {
    value: string;
    label: string;
}[];
export declare enum ProductTypeName {
    TOW = "JANDA-G",
    THREE = "JANDA-H"
}
export declare const SELECT_PRODUCT_TYPE_OP: IselectedOption[];
export declare const DAY_SELECT_OP: {
    value: Day;
    label: string;
}[];
export declare const HOUR_SELECT_OP: any[];
export declare const MINITUE_SELECt_OP: {
    value: number;
    label: string;
}[];
export declare const UNIT_SELECT_OP: {
    value: number;
    label: string;
}[];
export declare const MAX_MIN_SELECT_OP: {
    value: number;
    label: string;
}[];
export declare const SELECT_COUNT_DUMMY_OP: {
    value: number;
    label: string;
}[];
export declare let BOOKING_STATUS_OP: {
    value: BookingStatus;
    label: string;
}[];
export declare const LAYOUT_TYPE_OP: {
    value: LayoutType;
    label: LayoutType;
}[];
export declare let PAYMENT_STATUS_OP: {
    value: PaymentStatus;
    label: string;
}[];
export declare let STATISTICS_OP: {
    value: string;
    label: string;
}[];
export declare let STATISTICS_TYPE_OP: {
    value: SalesStatisticsUnit;
    label: string;
}[];
export declare let SMS_TARGET_OP: {
    value: SendTarget;
    label: string;
}[];
export declare let NOTI_LEVEL_OP: {
    value: NotiLevel;
    label: NotiLevel;
}[];
export declare let PRODUCT_STATUS_OP: {
    value: HouseStatus;
    label: string;
}[];
export declare let PAYMETHOD_FOR_BOOKER_OP: {
    value: PayMethod;
    label: string;
}[];
export declare let PAYMETHOD_FOR_HOST_OP: {
    value: PayMethod;
    label: string;
}[];
export declare let ROOM_GENDER_OP: {
    value: RoomGender;
    label: string;
}[];
export declare let PRICING_TYPE_OP: {
    value: PricingType;
    label: string;
}[];
export declare let PRICING_TYPE_OP_EXPEND: {
    value: PricingType[];
    label: string;
}[];
export declare let GET_SMS_TARGET_OP: {
    value: string;
    label: string;
}[];
export declare let OPTIONAL_APPLY_PAYMETHOD: {
    value: PayMethod;
    label: string;
}[];
export declare let HOUSE_STATUS_OP: {
    value: HouseStatus;
    label: string;
}[];
export declare let CHECK_IN_OUT_OP: {
    value: boolean;
    label: string;
}[];
export declare let GENDER_OP: {
    value: Gender;
    label: string;
}[];
export declare let EXCEL_EXPRESS_OP: {
    value: ExcelExpress;
    label: string;
}[];
export declare let STORE_TYPE_OP: {
    value: StoreType;
    label: string;
}[];
export declare let STORE_PAYNEED_OP: {
    value: string;
    label: string;
}[];
export declare let FUNNELS_OP: {
    value: Funnels;
    label: string;
}[];
export declare let AUTO_SEND_OP: {
    value: AutoSendWhen;
    label: string;
}[];
export declare const MAX_PEOPLE_COUNT_OP_FN: (max?: number) => {
    value: number;
    label: string;
}[];
/** 중립 */
export declare const NEUTRAL = "";
export declare const EMPTY = "";
export declare const MODAL_MIN_WIDTH: string;
export declare const STATIC_COLORS: string[];
export declare const DUMMY_BILL_INFO: any;
export declare const FLOATING_PRELOADER_SIZE = "small";
export declare const MODAL_PRELOADER_SIZE = "large";
export declare const TEST_PRODUCT_NAME = "JANDA-T";
export declare const ANY: any;
export declare const INFO_KEYS: InfoKey[];
