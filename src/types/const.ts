import {
  PaymentStatus,
  LayoutType,
  BookingStatus,
  SalesStatisticsUnit,
  SendTarget,
  NotiLevel,
  HouseStatus,
  PayMethod,
  RoomGender,
  PricingType,
  Gender,
  ExcelExpress,
  Funnels,
  AutoSendWhen,
  Language,
  Day,
  HouseType,
  StoreType,
  TimePerMs,
  InfoKey
} from "./enum";
import { isMobile } from "is-mobile";
import { LANG } from "../hooks/hook";
import { IselectedOption } from "../atoms/forms/selectBox/SelectBox";
import selectOpCreater from "../utils/selectOptionCreater";

export const DAY_START_TIME = {
  hour: 0, minute: 0, second: 0, millisecond: 0
}

export const TIME_DIFF = 60 * 9

export const LANGUAGE_LIST: Language[] = [
  Language.CHINESE,
  Language.ENGLISH,
  Language.JAPANESE,
  Language.KOREAN
];

export const FAVI_URL = "https://res.cloudinary.com/stayjanda-com/image/upload/v1554092565/favicon.ico";

export const IMG_REPO =
  "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/";


export const WeekArrKr = ["일", "월", "화", "수", "목", "금", "토"];
export const WeekArrEn = [
  Day.SUN,
  Day.MON,
  Day.TUE,
  Day.WED,
  Day.THU,
  Day.FRI,
  Day.SAT
];

export const SmsReplaceKeyEnumKeys = [
  "STAYDATE",
  "STAYDATE_YMD",
  "ROOMTYPE_N_COUNT",
  "BOOKERNAME",
  "TOTALPRICE",
  // "PAYMETHOD",
  // "PAYMENTSTATUS",
  "HM"
];
// 위아래 인덱스가 맞아야함
export const SmsReplaceKeyEnumValues = [
  "%STAYDATE%",
  "%STAYDATE_YMD%",
  "%ROOMTYPE_N_COUNT%",
  "%BOOKERNAME%",
  "%TOTALPRICE%",
  // "%PAYMETHOD%",
  // "%PAYMENTSTATUS%",
  "%HM%"
];

export const SELECT_DUMMY_OP = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export enum ProductTypeName {
  TOW = "JANDA-G",
  THREE = "JANDA-H"
}

export const SELECT_PRODUCT_TYPE_OP: IselectedOption[] = [
  { value: ProductTypeName.TOW, label: ProductTypeName.TOW },
  { value: ProductTypeName.THREE, label: ProductTypeName.THREE }
];

export const DAY_SELECT_OP = WeekArrEn.map(we => ({
  value: we, label: ""
}))

export const HOUR_SELECT_OP = selectOpCreater({
  count: 25,
  labelAdd: "",
  start: 0
})

export const MINITUE_SELECt_OP = [
  { value: 0, label: "00" },
  { value: 15, label: "15" },
  { value: 30, label: "30" },
  { value: 45, label: "45" }
]

export const UNIT_SELECT_OP = [
  { value: 15, label: "15" },
  { value: 30, label: "30" },
  { value: 60, label: "60" },
]
export const MAX_MIN_SELECT_OP = [
  ...Array(60).fill(0).map((v, i) => {
    return { value: 15 * i, label: (15 * i).toString() }
  })
]


export const SELECT_COUNT_DUMMY_OP = [
  { value: 0, label: "0" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" }
];


export let BOOKING_STATUS_OP = [
  {
    value: BookingStatus.COMPLETED,
    label: ""
  },
  { value: BookingStatus.CANCELED, label: "" }
];

export const LAYOUT_TYPE_OP = [
  { value: LayoutType.Layout_A, label: LayoutType.Layout_A },
  { value: LayoutType.Layout_B, label: LayoutType.Layout_B }
];

// [0]가 진행중이 되도록 고정
export let PAYMENT_STATUS_OP = [
  { value: PaymentStatus.COMPLETED, label: "" },
  { value: PaymentStatus.NOT_YET, label: "" }
  // { value: PaymentStatus.CANCELED, label: "" }
];

// 아직 통계선택들이 작업 안되어있음 View 만 사용중
export let STATISTICS_OP = [{ value: "sales_statistics", label: "" }];

export let STATISTICS_TYPE_OP = [
  {
    value: SalesStatisticsUnit.BY_DATE,
    label: ""
  },
  {
    value: SalesStatisticsUnit.BY_DAY_OF_WEEK,
    label: ""
  },
  {
    value: SalesStatisticsUnit.MONTHLY,
    label: ""
  },
  {
    value: SalesStatisticsUnit.WEEKLY,
    label: ""
  },
  {
    value: SalesStatisticsUnit.YEARLY,
    label: ""
  }
];

export let SMS_TARGET_OP = [
  { value: SendTarget.GUEST, label: "" },
  { value: SendTarget.HOST, label: "" },
  { value: SendTarget.BOTH, label: "" }
];

export let NOTI_LEVEL_OP = [
  { value: NotiLevel.NORMAL, label: NotiLevel.NORMAL },
  { value: NotiLevel.WARN, label: NotiLevel.WARN }
];

export let PRODUCT_STATUS_OP = [
  { value: HouseStatus.WAIT, label: "" },
  { value: HouseStatus.ENABLE, label: "" },
  { value: HouseStatus.DISALBE, label: "" }
];

export let PAYMETHOD_FOR_BOOKER_OP = [{ value: PayMethod.CARD, label: "" },
{
  value: PayMethod.BANK_TRANSFER, label: ""
}];

export let PAYMETHOD_FOR_HOST_OP = [
  { value: PayMethod.VBANK, label: "" },
  { value: PayMethod.CASH, label: "" },
  { value: PayMethod.CARD, label: "" },
  { value: PayMethod.CHANNEL_PAY, label: "" }
  // {value: PayMethod.ELSE, label: "기타"}
];

export let ROOM_GENDER_OP = [
  { value: RoomGender.SEPARATELY, label: "" },
  { value: RoomGender.ANY, label: "" },
  { value: RoomGender.MALE, label: "" },
  { value: RoomGender.FEMALE, label: "" }
];

export let PRICING_TYPE_OP = [
  { value: PricingType.DOMITORY, label: "" },
  { value: PricingType.ROOM, label: "" }
];

export let PRICING_TYPE_OP_EXPEND = [
  { value: [PricingType.DOMITORY], label: "" },
  { value: [PricingType.ROOM], label: "" },
  {
    value: [PricingType.ROOM, PricingType.DOMITORY],
    label: ``
  }
];

export let GET_SMS_TARGET_OP = [
  { value: "EXSIST_INFO", label: "" },
  { value: "TODAY_STAY", label: "" }
  // {value: "TODAY_CHECKIN", label: ""},
  // {value: "TOMORROW_CHECKIN", label: ""}
];

export let OPTIONAL_APPLY_PAYMETHOD = [
  { value: PayMethod.CARD, label: "" },
  { value: PayMethod.BANK_TRANSFER, label: "" }
]


export let HOUSE_STATUS_OP = [
  { value: HouseStatus.DISALBE, label: "" },
  { value: HouseStatus.WAIT, label: "" },
  { value: HouseStatus.ENABLE, label: "" }
];

export let CHECK_IN_OUT_OP = [
  { value: true, label: "In" },
  { value: false, label: "Out" }
];

export let GENDER_OP = [
  { value: Gender.FEMALE, label: "" },
  { value: Gender.MALE, label: "" }
];

export let EXCEL_EXPRESS_OP = [
  { value: ExcelExpress.SELECT_OP, label: "" },
  { value: ExcelExpress.COUNT_OP, label: "" },
  { value: ExcelExpress.DATE_OP, label: "" }
];

export let STORE_TYPE_OP = [
  { value: StoreType.LEASE, label: "" },
  { value: StoreType.TICKET, label: "" }
]

export let STORE_PAYNEED_OP = [
  { value: "noneed", label: "" },
]

export let FUNNELS_OP = [
  { value: Funnels.PHONE_CALL, label: "" },
  { value: Funnels.WALK_IN, label: "" },
  { value: Funnels.FREINDS, label: "" },
  { value: Funnels.BOOKING_COM, label: "" },
  { value: Funnels.NAVER, label: "" },
  { value: Funnels.YANOLJA, label: "" },
  { value: Funnels.YEOGIEOTTAE, label: "" },
  { value: Funnels.AIRBNB, label: "" },
  { value: Funnels.AGODA, label: "" },
  { value: Funnels.COOPANG, label: "" },
  { value: Funnels.ELSE_CHANNEL, label: "" }
];

export let AUTO_SEND_OP = [
  {
    value: AutoSendWhen.WEHN_BOOKING_CANCEL,
    label: ""
  },
  {
    value: AutoSendWhen.WHEN_BOOKING_CREATED,
    label: ""
  },
  {
    value: AutoSendWhen.WHEN_BOOKING_CREATED_PAYMENT_NOT_YET,
    label: ""
  },
  {
    value: AutoSendWhen.WHEN_BOOKING_UPDATE,
    label: ""
  }
];

//  DEPRECATE => selectOpCreater 
// 99명의 선택가능한 셀렉트 옵션 생성
export const MAX_PEOPLE_COUNT_OP_FN = (max = 100) => {
  const maxPeopleCountOption = [];
  for (let i = 0; i < max; i += 1) {
    maxPeopleCountOption.push({
      value: i,
      label: `${i}${LANG("person_unit")}`
    });
  }
  return maxPeopleCountOption;
};

// --필요한것
// 예약상태
// 결제상태

/** 중립 */
export const NEUTRAL = "";

export const EMPTY = "";

export const MODAL_MIN_WIDTH = isMobile() ? `90%` : "360px";

export const STATIC_COLORS = [
  "#4c5b73",
  "#E8554E",
  "#F19C65",
  "#FFD265",
  "#2AA876",
  "#0A7B83"
];

export const DUMMY_BILL_INFO: any = {
  __typename: "BillInfo",
  authDate: "2019.10.11",
  billKey: "",
  cardCl: 1,
  cardNo: "4212 6532 1264 7432",
  cardName: "신한카드",
  ok: true,
  resultCode: "OK" as any,
  resultMsg: ""
};

export const FLOATING_PRELOADER_SIZE = "small";
export const MODAL_PRELOADER_SIZE = "large";

export const TEST_PRODUCT_NAME = "JANDA-T";

export const ANY: any = {};


export const INFO_KEYS: InfoKey[] = [
  InfoKey.RESV_GUID,
  InfoKey.RESV_WARN,
  InfoKey.AFTER_GUIDE,
  InfoKey.AFTER_WARN,
]