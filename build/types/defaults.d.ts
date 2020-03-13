import { IuseImageUploaderOption } from "../hooks/hook";
import { JDpageInfo, IStore, IProduct, TBH, TSchedule } from "./interface";
import { Day } from "./enum";
import { PeriodInput } from "./api";
export declare const DEFAULT_SCHEDULE: TSchedule;
export declare const DEFULAT_PRODUCT: IProduct;
export declare const DEFULAT_BH_FULL: {
    days: Day[];
    end: number;
    time: number;
    start: number;
};
export declare const DEFAULT_BASE64: {
    base64: string;
    fileName: string;
};
export declare const DEFAULT_BUSI_TIME: PeriodInput;
export declare const DEFAULT_STORE: IStore;
export declare const DEFULAT_BH: TBH;
export declare const DEFAULT_IMAGEUP_LOADER_OPTION: IuseImageUploaderOption;
export declare const DEFAULT_PAGE_INFO: JDpageInfo;
export declare const DEFAULT_PHOTO = "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png";
