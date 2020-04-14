import { TMarginSize } from "./enum";
import { MutationFunctionOptions } from "@apollo/react-common";
import { ExecutionResult } from "graphql";
export interface ANY { };
export interface IInput extends React.HTMLAttributes<HTMLInputElement> { }
export interface IDiv extends React.HTMLAttributes<HTMLDivElement> { }
export interface ISpan extends React.HTMLAttributes<HTMLSpanElement> { }
export interface IUl extends React.HTMLAttributes<HTMLUListElement> { }
export type TRef = React.MutableRefObject<any>;
export type TElements = string | JSX.Element | JSX.Element[] | string[];
export type TMuFn<m, mv> = (
  options?: MutationFunctionOptions<m, mv> | undefined
) => Promise<ExecutionResult<m>>;


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
// 👿 사용중지
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
export type BookingModalMode = "READ_ONLY" | "CREATE" | "CREATE_ASSIG";
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

// use Mutation MU 축약용
export type IMu<M, MV> = (
  options?: MutationFunctionOptions<M, MV> | undefined
) => Promise<ExecutionResult<M>>;

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
/* 타임라인 -------------------------------------------------------------------------- */

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
// 일부만 시험적용중
// 추후에 모든 아톰에 적용할에정
export interface JDatomExtentionSet {
  mb?: TMarginSize;
  mr?: TMarginSize;
  hide?: boolean;
}
/*  -------------------------------------------------------------------------- */

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

