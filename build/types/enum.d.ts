export declare enum PricingType {
    DOMITORY = "DOMITORY",
    ROOM = "ROOM"
}
export declare enum ItemStatus {
    CANCELED = "CANCELED",
    PENDING = "PENDING",
    PERMITTED = "PERMITTED"
}
export declare enum InfoKey {
    RESV_GUID = "RESV_GUID",
    RESV_WARN = "RESV_WARN",
    AFTER_GUIDE = "AFTER_GUIDE",
    AFTER_WARN = "AFTER_WARN"
}
export declare enum UserRole {
    ADMIN = "ADMIN",
    BUYER = "BUYER",
    SELLER = "SELLER"
}
export declare enum CustomFieldType {
    LIST = "LIST",
    STRING = "STRING"
}
export declare enum StoreType {
    LEASE = "LEASE",
    TICKET = "TICKET"
}
export declare enum CreaditCardTypes {
    AMX = "AMX",
    BC_CARD = "BC_CARD",
    CHUKHYUP = "CHUKHYUP",
    CITY = "CITY",
    DINERS = "DINERS",
    DONGNAM = "DONGNAM",
    GWANGJU = "GWANGJU",
    HYUNDAI = "HYUNDAI",
    HANMI = "HANMI",
    KEB_HANA = "KEB_HANA",
    JEONBOOK = "JEONBOOK",
    JCB = "JCB",
    CHOHUNG = "CHOHUNG",
    JEJU_BANK = "JEJU_BANK",
    KAKAO_BANK = "KAKAO_BANK",
    K_BANK = "K_BANK",
    KDB = "KDB",
    KB_CARD = "KB_CARD",
    KOREA_POST = "KOREA_POST",
    LOTTE_CARD = "LOTTE_CARD",
    MASTER_CARD = "MASTER_CARD",
    NONGHYUP = "NONGHYUP",
    OK_CASH_BAG = "OK_CASH_BAG",
    SUHYUP = "SUHYUP",
    SHINSEGAE = "SHINSEGAE",
    MG_CARD = "MG_CARD",
    JEOCHUK = "JEOCHUK",
    SAMSUNG = "SAMSUNG",
    WOORI = "WOORI",
    VISA = "VISA",
    UNIONPAY = "UNIONPAY"
}
export declare enum DateFormat {
    WITH_TIME = "YY.MM.DD HH:mm",
    YYMMDD = "YY.MM.DD",
    MMDD = "MM.DD"
}
export declare enum GuestType {
    BLOCK = "BLOCK",
    GUEST = "GUEST"
}
export declare enum MemoType {
    HOST = "HOST"
}
export declare enum PaymentType {
    ONE_TIME = "ONE_TIME",
    SUBSCRIPTION = "SUBSCRIPTION"
}
export declare enum SalesStatisticsUnit {
    BY_DATE = "BY_DATE",
    BY_DAY_OF_WEEK = "BY_DAY_OF_WEEK",
    MONTHLY = "MONTHLY",
    WEEKLY = "WEEKLY",
    YEARLY = "YEARLY"
}
export declare enum HouseType {
    GUEST_HOUSE = "GUEST_HOUSE",
    HOSTEL = "HOSTEL",
    HOTEL = "HOTEL",
    MOTEL = "MOTEL",
    PENSION = "PENSION",
    YOUTH_HOSTEL = "YOUTH_HOSTEL"
}
export declare enum Language {
    KOREAN = "KOREAN",
    ENGLISH = "ENGLISH",
    JAPANESE = "JAPANESE",
    CHINESE = "CHINESE"
}
export declare type TNationalShort = "kr" | "gb" | "jp" | "cn";
export declare type TLanguageShort = "kr" | "en" | "jp" | "cn";
export declare enum LanguageShortResverse {
    kr = "KOREAN",
    jp = "JAPANESE",
    cn = "CHINESE",
    en = "ENGLISH"
}
export declare enum LanguageResverseShort {
    KOREAN = "kr",
    ENGLISH = "en",
    JAPANESE = "jp",
    CHINESE = "cn"
}
export declare enum LangShortToNational {
    kr = "kr",
    en = "gb",
    jp = "jp",
    cn = "cn"
}
export declare enum LanguageItSelf {
    KOREAN = "\uD55C\uAD6D\uC5B4",
    ENGLISH = "English",
    JAPANESE = "\u65E5\u672C\u8A9E",
    CHINESE = "\u4E2D\u570B\u8A9E"
}
export declare enum HouseStatus {
    ENABLE = "ENABLE",
    DISALBE = "DISALBE",
    WAIT = "WAIT"
}
export declare type TMarginSize = "no" | "largest" | "huge" | "large" | "normal" | "small" | "tiny" | "superTiny";
export declare type TextAlign = "left" | "right" | "center";
export declare type TextSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "large" | "normal" | "small" | "tiny" | "superTiny";
export declare enum RoomGender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    ANY = "ANY",
    SEPARATELY = "SEPARATELY"
}
export declare enum TimePerMs {
    DAY = 86400000,
    H = 3600000,
    M = 60000
}
export declare enum PaymentStatus {
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    NOT_YET = "NOT_YET"
}
export declare enum BookingStatus {
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED"
}
export declare enum PayMethod {
    BILL = "BILL",
    VBANK = "VBANK",
    CASH = "CASH",
    CARD = "CARD",
    CHANNEL_PAY = "CHANNEL_PAY",
    BANK_TRANSFER = "BANK_TRANSFER"
}
export declare enum WindowSize {
    MOBILE = 400,
    PHABLET = 550,
    TABLET = 750,
    DESKTOP = 1000,
    DESKTOPHD = 1200
}
export declare enum WindowSizeShort {
    MOBILE = "sm",
    PHABLET = "md",
    TABLET = "wmd",
    DESKTOP = "lg",
    DESKTOPHD = "wlg"
}
export declare enum WindowSizeHeight {
    MOBILE = 560,
    PHABLET = 560,
    TABLET = 560,
    DESKTOP = 668,
    DESKTOPHD = 980
}
export declare enum GlobalCSS {
    TIMELINE_HEADER_HEIGHT = 36
}
export declare enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE"
}
export declare enum ExcelExpress {
    SELECT_OP = "SELECT_OP",
    DATE_OP = "DATE_OP",
    COUNT_OP = "COUNT_OP"
}
export declare enum NotiType {
    ELSE = "ELSE",
    NEW_BOOKING = "NEW_BOOKING",
    PRODUCT_EXPIRE = "PRODUCT_EXPIRE",
    TO_ALL = "TO_ALL"
}
export declare type IconSize = "tiny" | "small" | "normal" | "large" | "huge" | "largest" | "largest2";
export declare type JDColor = "darkPrimary" | "primary" | "third" | "point" | "new" | "warn" | "error" | "black" | "white" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "normal" | "blue" | "positive";
export declare enum AutoSendWhen {
    WEHN_BOOKING_CANCEL = "WEHN_BOOKING_CANCEL",
    WHEN_BOOKING_CREATED = "WHEN_BOOKING_CREATED",
    WHEN_BOOKING_CREATED_PAYMENT_NOT_YET = "WHEN_BOOKING_CREATED_PAYMENT_NOT_YET",
    WHEN_BOOKING_UPDATE = "WHEN_BOOKING_UPDATE"
}
export declare enum Funnels {
    AGODA = "AGODA",
    AIRBNB = "AIRBNB",
    BOOKING_COM = "BOOKING_COM",
    COOPANG = "COOPANG",
    ELSE_CHANNEL = "ELSE_CHANNEL",
    FREINDS = "FREINDS",
    HOMEPAGE = "HOMEPAGE",
    NAVER = "NAVER",
    PHONE_CALL = "PHONE_CALL",
    WALK_IN = "WALK_IN",
    YANOLJA = "YANOLJA",
    YEOGIEOTTAE = "YEOGIEOTTAE"
}
export declare enum SendTarget {
    BOTH = "BOTH",
    GUEST = "GUEST",
    HOST = "HOST"
}
export declare enum LayoutType {
    Layout_A = "Layout_A",
    Layout_B = "Layout_B"
}
export declare enum Day {
    FRI = "FRI",
    MON = "MON",
    SAT = "SAT",
    SUN = "SUN",
    THU = "THU",
    TUE = "TUE",
    WED = "WED"
}
export declare enum ProductTypeKey {
    DEMO = "DEMO",
    NEGOTIATION = "NEGOTIATION",
    PREMIUM = "PREMIUM",
    STANDARD = "STANDARD"
}
export declare enum SERVICE_CONTECT {
    SERVICE_MANGER_PHONE = "070-4128-8244",
    SERVICE_MANGER_MAIL = "support@stayjanda.com"
}
export declare enum NotiLevel {
    NORMAL = "NORMAL",
    WARN = "WARN"
}
export declare enum PayTarget {
    USAGE_PLAN = "USAGE_PLAN",
    BOOKING = "BOOKING",
    SMS = "SMS"
}
export declare enum GetSmsTarget {
    TODAY_STAY = "TODAY_STAY",
    TODAY_CHECKIN = "TODAY_CHECKIN",
    TOMORROW_CHECKIN = "TOMORROW_CHECKIN",
    EXSIST_INFO = "EXSIST_INFO"
}
