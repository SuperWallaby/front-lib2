/// <reference types="react" />
import { TMarginSize } from "./enum";
import { getMyStores_GetMyStores_data, getProductsForBuyer_GetProductsForBuyer_data, getMyStores_GetMyStores_data_businessHours, getMyProfile_GetMyProfile_data_user_stores, getProductsForBuyer_GetProductsForBuyer_data_schedules_list, getProductsForBuyer_GetProductsForBuyer_data_items, getMyStores_GetMyStores_data_customFields, getProductsForBuyer_GetProductsForBuyer_data_schedules } from "./api";
import { MutationFunctionOptions } from "@apollo/react-common";
import { ExecutionResult } from "graphql";
export interface ANY {
}
export interface IProduct extends getProductsForBuyer_GetProductsForBuyer_data {
}
export interface IStore extends getMyStores_GetMyStores_data {
}
export interface IStoreContext extends getMyProfile_GetMyProfile_data_user_stores {
    [key: string]: any;
}
export interface ICustomFiled extends getMyStores_GetMyStores_data_customFields {
}
export interface IInput extends React.HTMLAttributes<HTMLInputElement> {
}
export interface IDiv extends React.HTMLAttributes<HTMLDivElement> {
}
export interface ISpan extends React.HTMLAttributes<HTMLSpanElement> {
}
export interface IUl extends React.HTMLAttributes<HTMLUListElement> {
}
export interface IScheduleBlock extends getProductsForBuyer_GetProductsForBuyer_data_schedules_list {
}
export interface ITimeBlocks extends IScheduleBlock {
    isSelected: boolean;
    isPast: boolean;
    start: number;
    end: number;
}
export declare type TSchedule = getProductsForBuyer_GetProductsForBuyer_data_schedules;
export declare type TItemBuyer = getProductsForBuyer_GetProductsForBuyer_data_items;
export declare type TBH = getMyStores_GetMyStores_data_businessHours;
export declare type TUserMode = "buyer" | "saler";
export declare type TRef = React.MutableRefObject<any>;
export declare type TElements = string | JSX.Element | JSX.Element[] | string[];
export declare type TMuFn<m, mv> = (options?: MutationFunctionOptions<m, mv> | undefined) => Promise<ExecutionResult<m>>;
export interface JDRoute {
    Component: React.FC<any>;
    path?: string;
    condition?: boolean;
    exact?: boolean;
}
export interface IPageInfo {
    currentPage: number;
    totalPage: number;
    rowCount: number;
}
export interface ICursorPageInfo {
    startCursor: string;
    endCursor: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
export interface IPage {
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IPageResult {
    origin: any;
    data: any;
    pageInfo: IPage;
}
export declare type BookingModalMode = "READ_ONLY" | "CREATE" | "CREATE_ASSIG";
export interface ISelectHouse {
    ok: boolean;
    erorr: any;
}
export interface ISelectHouseVariables {
    selectedHouse: IselectedOption | null;
}
export interface ILocationInput {
    address: string;
    addressDetail?: string | null;
    lat: number;
    lng: number;
}
export interface ITagInput {
    name: string;
    content: string;
    icon?: string | null;
}
export declare type IMu<M, MV> = (options?: MutationFunctionOptions<M, MV> | undefined) => Promise<ExecutionResult<M>>;
export interface ITermsOfBookerInput {
    farthestSelectableDate: number;
    nearestSelectableDate: number;
    selectableDateRange: number;
}
export interface ITermsOfRefundInput {
    beforeDays: number;
    rate: number;
    description?: string | null;
}
export interface ITimelineContext {
    timelineWidth: number;
    visibleTimeStart: number;
    visibleTimeEnd: number;
    canvasTimeStart: number;
    canvasTimeEn: number;
}
export interface IItemContext {
    dimensions: any;
    useResizeHandle: boolean;
    title: string;
    canMove: boolean;
    canResizeLeft: boolean;
    canResizeRight: boolean;
    selected: boolean;
    dragging: boolean;
    dragStart: any;
    dragTime: number;
    resizing: boolean;
    resizeEdge: "left" | "right";
    resizeStart: number;
    resizeTime: number;
    width: boolean;
}
export interface IGuestCount {
    male: number;
    female: number;
    roomCount: number;
}
export interface IHolidaysByApi {
    dateKind: string;
    dateName: string;
    searchHoliday: string;
    locdate: string;
    seq: number;
}
export interface JDatomExtentionSet {
    mb?: TMarginSize;
    mr?: TMarginSize;
}
export interface JDpageInfo {
    currentPage: number;
    totalPage: number;
    rowCount: number;
}
export interface TP {
    pageInfo: JDpageInfo;
}
export interface IselectedOption<T = any> {
    label: string;
    value: T;
}
