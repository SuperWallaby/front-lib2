import { IuseImageUploaderOption } from "../hooks/hook";
import {
  JDpageInfo, IStore, IProduct, TBH, TSchedule,
} from "./interface";
import { StoreType, Day } from "./enum";
import { PeriodInput } from "./api";


export const DEFAULT_SCHEDULE: TSchedule = {
  __typename: "ProductSchedules",
  info: {
    __typename: "ProductScheduleInfo",
    isOpenDate: true,
    dateTimeRange: {
      __typename: "DateTimeRange",
      from: 0,
      interval: 0,
      to: 0
    },
    unit: 0
  },
  list: []

}

export const DEFULAT_PRODUCT: IProduct = {
  __typename: "Product",
  subTitle: "",
  _id: "",
  code: "",
  createdAt: "",
  description: "",
  name: "",
  totalItemCount: 0,
  updatedAt: "",
  images: [],
  capacity: 0,
  items: [],
  needToConfirm: false,
  expiresAt: "",
  businessHours: null,
  genderOption: null,
  schedules: null,
  periodOption: null,
  intro: "",
  warning: ""
}
export const DEFULAT_BH_FULL = {
  days: [Day.MON, Day.THU, Day.WED, Day.TUE, Day.FRI, Day.SAT, Day.SUN],
  end: 1440,
  time: 1440,
  start: 0
}

export const DEFAULT_BASE64 = {
  base64: "",
  fileName: ""
}

export const DEFAULT_BUSI_TIME: PeriodInput = {
  days: [],
  end: 0,
  start: 0
}

export const DEFAULT_STORE: IStore = {
  name: "",
  manager: {
    __typename: "Manager",
    isVerifiedPhoneNumber: false,
    name: "",
    phoneNumber: ""
  },
  infos: [],
  products: [],
  customFields: [],
  type: StoreType.LEASE,
  description: "",
  __typename: "Store",
  _id: "",
  code: "",
  createdAt: "",
  expiresAt: "",
  updatedAt: "",
  intro: "",
  warning: "",
  groups: [{
    __typename: "StoreGroup",
    _id: "",
    code: ""
  }],
  businessHours: [{ __typename: "Period", time: 0, end: 0, days: [], start: 0, ...DEFULAT_BH_FULL }],
  productCount: 0,
  periodOption: {
    __typename: "PeriodOption",
    max: 60 * 3,
    min: 15,
    unit: 15
  },
  location: null
}


export const DEFULAT_BH: TBH = {
  __typename: "Period",
  days: [Day.MON, Day.THU, Day.WED, Day.TUE, Day.FRI, Day.SAT, Day.SUN],
  end: 0,
  start: 0,
  time: 0,
}



export const DEFAULT_IMAGEUP_LOADER_OPTION: IuseImageUploaderOption = {
  quality: 100,
  resizeMaxHeight: 500,
  resizeMaxWidth: 500
};


export const DEFAULT_PAGE_INFO: JDpageInfo = {
  currentPage: 0,
  rowCount: 0,
  totalPage: 0
};

export const DEFAULT_PHOTO = "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png";