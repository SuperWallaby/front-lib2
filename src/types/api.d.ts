/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteItem
// ====================================================

export interface deleteItem_DeleteItem_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface deleteItem_DeleteItem {
  __typename: "DeleteItemResponse";
  ok: boolean;
  error: deleteItem_DeleteItem_error | null;
}

export interface deleteItem {
  DeleteItem: deleteItem_DeleteItem;
}

export interface deleteItemVariables {
  param: DeleteItemInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: cancelItemForBuyer
// ====================================================

export interface cancelItemForBuyer_CancelItemForBuyer_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface cancelItemForBuyer_CancelItemForBuyer {
  __typename: "CancelItemForBuyerResponse";
  ok: boolean;
  error: cancelItemForBuyer_CancelItemForBuyer_error | null;
}

export interface cancelItemForBuyer {
  CancelItemForBuyer: cancelItemForBuyer_CancelItemForBuyer;
}

export interface cancelItemForBuyerVariables {
  param: CancelItemForBuyerInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: cancelItem
// ====================================================

export interface cancelItem_CancelItem_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface cancelItem_CancelItem {
  __typename: "CancelItemResponse";
  ok: boolean;
  error: cancelItem_CancelItem_error | null;
}

export interface cancelItem {
  CancelItem: cancelItem_CancelItem;
}

export interface cancelItemVariables {
  param: CancelItemInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: permitItem
// ====================================================

export interface permitItem_PermitItem_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface permitItem_PermitItem {
  __typename: "PermitItemResponse";
  ok: boolean;
  error: permitItem_PermitItem_error | null;
}

export interface permitItem {
  PermitItem: permitItem_PermitItem;
}

export interface permitItemVariables {
  param: PermitItemInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createItemForBuyer
// ====================================================

export interface createItemForBuyer_CreateItemForBuyer_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface createItemForBuyer_CreateItemForBuyer_data {
  __typename: "Item";
  _id: string;
  code: string;
  name: string;
}

export interface createItemForBuyer_CreateItemForBuyer {
  __typename: "CreateItemForBuyerResponse";
  ok: boolean;
  error: createItemForBuyer_CreateItemForBuyer_error | null;
  data: createItemForBuyer_CreateItemForBuyer_data | null;
}

export interface createItemForBuyer {
  CreateItemForBuyer: createItemForBuyer_CreateItemForBuyer;
}

export interface createItemForBuyerVariables {
  param: CreateItemForBuyerInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createItem
// ====================================================

export interface createItem_CreateItem_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface createItem_CreateItem_data {
  __typename: "Item";
  _id: string;
  code: string;
  name: string;
}

export interface createItem_CreateItem {
  __typename: "CreateItemResponse";
  ok: boolean;
  error: createItem_CreateItem_error | null;
  data: createItem_CreateItem_data | null;
}

export interface createItem {
  CreateItem: createItem_CreateItem;
}

export interface createItemVariables {
  param: CreateItemInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignIn
// ====================================================

export interface emailSignIn_EmailSignIn_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface emailSignIn_EmailSignIn_data {
  __typename: "EmailSignInResult";
  token: string;
  expiresIn: any;
}

export interface emailSignIn_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: emailSignIn_EmailSignIn_error | null;
  data: emailSignIn_EmailSignIn_data | null;
}

export interface emailSignIn {
  /**
   * Email 로그인
   */
  EmailSignIn: emailSignIn_EmailSignIn;
}

export interface emailSignInVariables {
  param: EmailSignInInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: authorizeCodeSignIn
// ====================================================

export interface authorizeCodeSignIn_AuthorizeCodeSignIn_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface authorizeCodeSignIn_AuthorizeCodeSignIn_data {
  __typename: "AuthorizeCodeSignInResultData";
  token: string;
  isInitiated: boolean;
}

export interface authorizeCodeSignIn_AuthorizeCodeSignIn {
  __typename: "AuthorizeCodeSignInResponse";
  ok: boolean;
  error: authorizeCodeSignIn_AuthorizeCodeSignIn_error | null;
  data: authorizeCodeSignIn_AuthorizeCodeSignIn_data | null;
}

export interface authorizeCodeSignIn {
  AuthorizeCodeSignIn: authorizeCodeSignIn_AuthorizeCodeSignIn;
}

export interface authorizeCodeSignInVariables {
  param: AuthorizeCodeSignInInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductsForBuyer
// ====================================================

export interface getProductsForBuyer_GetProductsForBuyer_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_items_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_items_customFieldValues {
  __typename: "CustomFieldValue";
  key: string;
  label: string;
  value: string;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_items {
  __typename: "Item";
  _id: string;
  status: ItemStatus;
  code: string;
  name: string;
  phoneNumber: string | null;
  memo: string | null;
  dateTimeRange: getProductsForBuyer_GetProductsForBuyer_data_items_dateTimeRange | null;
  createdAt: any;
  customFieldValues: getProductsForBuyer_GetProductsForBuyer_data_items_customFieldValues[] | null;
  updatedAt: any;
  expiresAt: any | null;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules_info_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules_info {
  __typename: "ProductScheduleInfo";
  isOpenDate: boolean;
  dateTimeRange: getProductsForBuyer_GetProductsForBuyer_data_schedules_info_dateTimeRange;
  unit: number;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules_list_segment {
  __typename: "Segment";
  from: any;
  to: any;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules_list_items_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules_list_items {
  __typename: "Item";
  dateTimeRange: getProductsForBuyer_GetProductsForBuyer_data_schedules_list_items_dateTimeRange | null;
  _id: string;
  name: string;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules_list {
  __typename: "ProductSegment";
  segment: getProductsForBuyer_GetProductsForBuyer_data_schedules_list_segment;
  itemCount: number;
  maxCount: number;
  /**
   * 해당 Segment 품절여부
   */
  soldOut: boolean;
  /**
   * 권한에 따라서 item이 null 또는 [] 값으로 나올 수 있음
   */
  items: getProductsForBuyer_GetProductsForBuyer_data_schedules_list_items[] | null;
}

export interface getProductsForBuyer_GetProductsForBuyer_data_schedules {
  __typename: "ProductSchedules";
  info: getProductsForBuyer_GetProductsForBuyer_data_schedules_info;
  list: getProductsForBuyer_GetProductsForBuyer_data_schedules_list[] | null;
}

export interface getProductsForBuyer_GetProductsForBuyer_data {
  __typename: "Product";
  _id: string;
  name: string;
  code: string;
  subTitle: string | null;
  images: any[] | null;
  description: string | null;
  needToConfirm: boolean;
  totalItemCount: number;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  genderOption: GenderOption | null;
  intro: string | null;
  warning: string | null;
  capacity: number | null;
  businessHours: getProductsForBuyer_GetProductsForBuyer_data_businessHours[] | null;
  /**
   * Min, Max는 변경 가능하지만 Unit은 변경 불가
   */
  periodOption: getProductsForBuyer_GetProductsForBuyer_data_periodOption | null;
  items: getProductsForBuyer_GetProductsForBuyer_data_items[] | null;
  /**
   * null이 출력되는 경우 해당 date값이 영업시간이 포함되지 않기 때문임.
   */
  schedules: getProductsForBuyer_GetProductsForBuyer_data_schedules | null;
}

export interface getProductsForBuyer_GetProductsForBuyer {
  __typename: "GetProductsForBuyerResponse";
  ok: boolean;
  error: getProductsForBuyer_GetProductsForBuyer_error | null;
  data: getProductsForBuyer_GetProductsForBuyer_data[] | null;
}

export interface getProductsForBuyer {
  GetProductsForBuyer: getProductsForBuyer_GetProductsForBuyer;
}

export interface getProductsForBuyerVariables {
  param: GetProductsForBuyerInput;
  date: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductsByStoreId
// ====================================================

export interface getProductsByStoreId_GetProductsByStoreId_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_items_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_items_customFieldValues {
  __typename: "CustomFieldValue";
  key: string;
  label: string;
  value: string;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_items {
  __typename: "Item";
  _id: string;
  status: ItemStatus;
  code: string;
  name: string;
  phoneNumber: string | null;
  memo: string | null;
  dateTimeRange: getProductsByStoreId_GetProductsByStoreId_data_items_dateTimeRange | null;
  createdAt: any;
  customFieldValues: getProductsByStoreId_GetProductsByStoreId_data_items_customFieldValues[] | null;
  updatedAt: any;
  expiresAt: any | null;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules_info_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules_info {
  __typename: "ProductScheduleInfo";
  isOpenDate: boolean;
  dateTimeRange: getProductsByStoreId_GetProductsByStoreId_data_schedules_info_dateTimeRange;
  unit: number;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules_list_segment {
  __typename: "Segment";
  from: any;
  to: any;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules_list_items_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules_list_items {
  __typename: "Item";
  dateTimeRange: getProductsByStoreId_GetProductsByStoreId_data_schedules_list_items_dateTimeRange | null;
  _id: string;
  name: string;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules_list {
  __typename: "ProductSegment";
  segment: getProductsByStoreId_GetProductsByStoreId_data_schedules_list_segment;
  itemCount: number;
  maxCount: number;
  /**
   * 해당 Segment 품절여부
   */
  soldOut: boolean;
  /**
   * 권한에 따라서 item이 null 또는 [] 값으로 나올 수 있음
   */
  items: getProductsByStoreId_GetProductsByStoreId_data_schedules_list_items[] | null;
}

export interface getProductsByStoreId_GetProductsByStoreId_data_schedules {
  __typename: "ProductSchedules";
  info: getProductsByStoreId_GetProductsByStoreId_data_schedules_info;
  list: getProductsByStoreId_GetProductsByStoreId_data_schedules_list[] | null;
}

export interface getProductsByStoreId_GetProductsByStoreId_data {
  __typename: "Product";
  _id: string;
  name: string;
  code: string;
  subTitle: string | null;
  images: any[] | null;
  description: string | null;
  needToConfirm: boolean;
  totalItemCount: number;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  genderOption: GenderOption | null;
  intro: string | null;
  warning: string | null;
  capacity: number | null;
  businessHours: getProductsByStoreId_GetProductsByStoreId_data_businessHours[] | null;
  /**
   * Min, Max는 변경 가능하지만 Unit은 변경 불가
   */
  periodOption: getProductsByStoreId_GetProductsByStoreId_data_periodOption | null;
  items: getProductsByStoreId_GetProductsByStoreId_data_items[] | null;
  /**
   * null이 출력되는 경우 해당 date값이 영업시간이 포함되지 않기 때문임.
   */
  schedules: getProductsByStoreId_GetProductsByStoreId_data_schedules | null;
}

export interface getProductsByStoreId_GetProductsByStoreId {
  __typename: "GetProductsByStoreIdResponse";
  ok: boolean;
  error: getProductsByStoreId_GetProductsByStoreId_error | null;
  data: getProductsByStoreId_GetProductsByStoreId_data[] | null;
}

export interface getProductsByStoreId {
  /**
   * Store Owner가 쿼리할떄 사용하는 함수임.
   */
  GetProductsByStoreId: getProductsByStoreId_GetProductsByStoreId;
}

export interface getProductsByStoreIdVariables {
  param: GetProductsByStoreIdInput;
  date: any;
  skipSchedule: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyStores
// ====================================================

export interface getMyStores_GetMyStores_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getMyStores_GetMyStores_data_groups {
  __typename: "StoreGroup";
  _id: string;
  code: string;
}

export interface getMyStores_GetMyStores_data_infos {
  __typename: "Info";
  key: string;
  label: string;
  content: string;
}

export interface getMyStores_GetMyStores_data_manager {
  __typename: "Manager";
  name: string;
  phoneNumber: string;
  isVerifiedPhoneNumber: boolean;
}

export interface getMyStores_GetMyStores_data_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface getMyStores_GetMyStores_data_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface getMyStores_GetMyStores_data_products {
  __typename: "Product";
  _id: string;
  name: string;
}

export interface getMyStores_GetMyStores_data_customFields {
  __typename: "CustomField";
  key: string;
  label: string;
  type: CustomFieldType;
  placeHolder: string | null;
  default: string | null;
  /**
   * type===LIST 인 경우 표시할 선택목록
   */
  list: string[] | null;
}

export interface getMyStores_GetMyStores_data_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface getMyStores_GetMyStores_data {
  __typename: "Store";
  _id: string;
  name: string;
  code: string;
  intro: string | null;
  warning: string | null;
  groups: getMyStores_GetMyStores_data_groups[] | null;
  infos: getMyStores_GetMyStores_data_infos[] | null;
  type: StoreType;
  manager: getMyStores_GetMyStores_data_manager | null;
  businessHours: getMyStores_GetMyStores_data_businessHours[] | null;
  productCount: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  location: getMyStores_GetMyStores_data_location | null;
  products: getMyStores_GetMyStores_data_products[] | null;
  customFields: getMyStores_GetMyStores_data_customFields[] | null;
  periodOption: getMyStores_GetMyStores_data_periodOption | null;
}

export interface getMyStores_GetMyStores {
  __typename: "GetMyStoresResponse";
  ok: boolean;
  error: getMyStores_GetMyStores_error | null;
  data: getMyStores_GetMyStores_data[] | null;
}

export interface getMyStores {
  GetMyStores: getMyStores_GetMyStores;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteStore
// ====================================================

export interface deleteStore_DeleteStore_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface deleteStore_DeleteStore {
  __typename: "DeleteStoreResponse";
  ok: boolean;
  error: deleteStore_DeleteStore_error | null;
}

export interface deleteStore {
  DeleteStore: deleteStore_DeleteStore;
}

export interface deleteStoreVariables {
  param: DeleteStoreInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: refreshToken
// ====================================================

export interface refreshToken_RefreshToken_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface refreshToken_RefreshToken {
  __typename: "RefreshTokenResponse";
  ok: boolean;
  error: refreshToken_RefreshToken_error | null;
  token: string | null;
}

export interface refreshToken {
  RefreshToken: refreshToken_RefreshToken;
}

export interface refreshTokenVariables {
  param: RefreshTokenInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateStore
// ====================================================

export interface updateStore_UpdateStore_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface updateStore_UpdateStore {
  __typename: "UpdateStoreResponse";
  ok: boolean;
  error: updateStore_UpdateStore_error | null;
}

export interface updateStore {
  UpdateStore: updateStore_UpdateStore;
}

export interface updateStoreVariables {
  param: UpdateStoreInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getStoreGroupByCode
// ====================================================

export interface getStoreGroupByCode_GetStoreGroupByCode_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_groups {
  __typename: "StoreGroup";
  _id: string;
  code: string;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_infos {
  __typename: "Info";
  key: string;
  label: string;
  content: string;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_manager {
  __typename: "Manager";
  name: string;
  phoneNumber: string;
  isVerifiedPhoneNumber: boolean;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_products {
  __typename: "Product";
  _id: string;
  name: string;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_customFields {
  __typename: "CustomField";
  key: string;
  label: string;
  type: CustomFieldType;
  placeHolder: string | null;
  default: string | null;
  /**
   * type===LIST 인 경우 표시할 선택목록
   */
  list: string[] | null;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data_list {
  __typename: "Store";
  _id: string;
  name: string;
  code: string;
  intro: string | null;
  warning: string | null;
  groups: getStoreGroupByCode_GetStoreGroupByCode_data_list_groups[] | null;
  infos: getStoreGroupByCode_GetStoreGroupByCode_data_list_infos[] | null;
  type: StoreType;
  manager: getStoreGroupByCode_GetStoreGroupByCode_data_list_manager | null;
  businessHours: getStoreGroupByCode_GetStoreGroupByCode_data_list_businessHours[] | null;
  productCount: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  location: getStoreGroupByCode_GetStoreGroupByCode_data_list_location | null;
  products: getStoreGroupByCode_GetStoreGroupByCode_data_list_products[] | null;
  customFields: getStoreGroupByCode_GetStoreGroupByCode_data_list_customFields[] | null;
  periodOption: getStoreGroupByCode_GetStoreGroupByCode_data_list_periodOption | null;
}

export interface getStoreGroupByCode_GetStoreGroupByCode_data {
  __typename: "StoreGroup";
  _id: string;
  isDefault: boolean;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  list: getStoreGroupByCode_GetStoreGroupByCode_data_list[] | null;
}

export interface getStoreGroupByCode_GetStoreGroupByCode {
  __typename: "GetStoreGroupByCodeResponse";
  ok: boolean;
  error: getStoreGroupByCode_GetStoreGroupByCode_error | null;
  data: getStoreGroupByCode_GetStoreGroupByCode_data | null;
}

export interface getStoreGroupByCode {
  GetStoreGroupByCode: getStoreGroupByCode_GetStoreGroupByCode;
}

export interface getStoreGroupByCodeVariables {
  param: GetStoreGroupByCodeInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getStoreById
// ====================================================

export interface getStoreById_GetStoreById_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getStoreById_GetStoreById_data_groups {
  __typename: "StoreGroup";
  _id: string;
  code: string;
}

export interface getStoreById_GetStoreById_data_infos {
  __typename: "Info";
  key: string;
  label: string;
  content: string;
}

export interface getStoreById_GetStoreById_data_manager {
  __typename: "Manager";
  name: string;
  phoneNumber: string;
  isVerifiedPhoneNumber: boolean;
}

export interface getStoreById_GetStoreById_data_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface getStoreById_GetStoreById_data_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface getStoreById_GetStoreById_data_products {
  __typename: "Product";
  _id: string;
  name: string;
}

export interface getStoreById_GetStoreById_data_customFields {
  __typename: "CustomField";
  key: string;
  label: string;
  type: CustomFieldType;
  placeHolder: string | null;
  default: string | null;
  /**
   * type===LIST 인 경우 표시할 선택목록
   */
  list: string[] | null;
}

export interface getStoreById_GetStoreById_data_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface getStoreById_GetStoreById_data {
  __typename: "Store";
  _id: string;
  name: string;
  code: string;
  intro: string | null;
  warning: string | null;
  groups: getStoreById_GetStoreById_data_groups[] | null;
  infos: getStoreById_GetStoreById_data_infos[] | null;
  type: StoreType;
  manager: getStoreById_GetStoreById_data_manager | null;
  businessHours: getStoreById_GetStoreById_data_businessHours[] | null;
  productCount: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  location: getStoreById_GetStoreById_data_location | null;
  products: getStoreById_GetStoreById_data_products[] | null;
  customFields: getStoreById_GetStoreById_data_customFields[] | null;
  periodOption: getStoreById_GetStoreById_data_periodOption | null;
}

export interface getStoreById_GetStoreById {
  __typename: "GetStoreByIdResponse";
  ok: boolean;
  error: getStoreById_GetStoreById_error | null;
  data: getStoreById_GetStoreById_data | null;
}

export interface getStoreById {
  GetStoreById: getStoreById_GetStoreById;
}

export interface getStoreByIdVariables {
  param: GetStoreByIdInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateProduct
// ====================================================

export interface updateProduct_UpdateProduct_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface updateProduct_UpdateProduct {
  __typename: "UpdateProductResponse";
  ok: boolean;
  error: updateProduct_UpdateProduct_error | null;
}

export interface updateProduct {
  UpdateProduct: updateProduct_UpdateProduct;
}

export interface updateProductVariables {
  param: UpdateProductInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteProduct
// ====================================================

export interface deleteProduct_DeleteProduct_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface deleteProduct_DeleteProduct {
  __typename: "DeleteProductResponse";
  ok: boolean;
  error: deleteProduct_DeleteProduct_error | null;
}

export interface deleteProduct {
  DeleteProduct: deleteProduct_DeleteProduct;
}

export interface deleteProductVariables {
  param: DeleteProductInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createProduct
// ====================================================

export interface createProduct_CreateProduct_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface createProduct_CreateProduct_data {
  __typename: "Product";
  _id: string;
}

export interface createProduct_CreateProduct {
  __typename: "CreateProductResponse";
  ok: boolean;
  error: createProduct_CreateProduct_error | null;
  data: createProduct_CreateProduct_data | null;
}

export interface createProduct {
  CreateProduct: createProduct_CreateProduct;
}

export interface createProductVariables {
  param: CreateProductInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateMyProfile
// ====================================================

export interface updateMyProfile_UpdateMyProfile_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface updateMyProfile_UpdateMyProfile {
  __typename: "UpdateMyProfileResponse";
  ok: boolean;
  error: updateMyProfile_UpdateMyProfile_error | null;
  data: string | null;
}

export interface updateMyProfile {
  UpdateMyProfile: updateMyProfile_UpdateMyProfile;
}

export interface updateMyProfileVariables {
  param: UpdateMyProfileInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getItemForBuyer
// ====================================================

export interface getItemForBuyer_GetItemForBuyer_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getItemForBuyer_GetItemForBuyer_data_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getItemForBuyer_GetItemForBuyer_data_customFieldValues {
  __typename: "CustomFieldValue";
  key: string;
  label: string;
  value: string;
}

export interface getItemForBuyer_GetItemForBuyer_data_product_store_infos {
  __typename: "Info";
  key: string;
  label: string;
  content: string;
}

export interface getItemForBuyer_GetItemForBuyer_data_product_store {
  __typename: "Store";
  infos: getItemForBuyer_GetItemForBuyer_data_product_store_infos[] | null;
}

export interface getItemForBuyer_GetItemForBuyer_data_product {
  __typename: "Product";
  _id: string;
  name: string;
  images: any[] | null;
  subTitle: string | null;
  store: getItemForBuyer_GetItemForBuyer_data_product_store;
}

export interface getItemForBuyer_GetItemForBuyer_data {
  __typename: "Item";
  _id: string;
  status: ItemStatus;
  code: string;
  name: string;
  phoneNumber: string | null;
  memo: string | null;
  dateTimeRange: getItemForBuyer_GetItemForBuyer_data_dateTimeRange | null;
  createdAt: any;
  customFieldValues: getItemForBuyer_GetItemForBuyer_data_customFieldValues[] | null;
  updatedAt: any;
  expiresAt: any | null;
  product: getItemForBuyer_GetItemForBuyer_data_product | null;
}

export interface getItemForBuyer_GetItemForBuyer {
  __typename: "GetItemForBuyerResponse";
  ok: boolean;
  error: getItemForBuyer_GetItemForBuyer_error | null;
  data: getItemForBuyer_GetItemForBuyer_data | null;
}

export interface getItemForBuyer {
  GetItemForBuyer: getItemForBuyer_GetItemForBuyer;
}

export interface getItemForBuyerVariables {
  param: GetItemForBuyerInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getItemsForBuyer
// ====================================================

export interface getItemsForBuyer_GetItemsForBuyer_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getItemsForBuyer_GetItemsForBuyer_data_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getItemsForBuyer_GetItemsForBuyer_data_customFieldValues {
  __typename: "CustomFieldValue";
  key: string;
  label: string;
  value: string;
}

export interface getItemsForBuyer_GetItemsForBuyer_data_product {
  __typename: "Product";
  _id: string;
  name: string;
  images: any[] | null;
  subTitle: string | null;
}

export interface getItemsForBuyer_GetItemsForBuyer_data {
  __typename: "Item";
  _id: string;
  status: ItemStatus;
  code: string;
  name: string;
  phoneNumber: string | null;
  memo: string | null;
  dateTimeRange: getItemsForBuyer_GetItemsForBuyer_data_dateTimeRange | null;
  createdAt: any;
  customFieldValues: getItemsForBuyer_GetItemsForBuyer_data_customFieldValues[] | null;
  updatedAt: any;
  expiresAt: any | null;
  product: getItemsForBuyer_GetItemsForBuyer_data_product | null;
}

export interface getItemsForBuyer_GetItemsForBuyer {
  __typename: "GetItemsForBuyerResponse";
  ok: boolean;
  error: getItemsForBuyer_GetItemsForBuyer_error | null;
  data: getItemsForBuyer_GetItemsForBuyer_data[] | null;
}

export interface getItemsForBuyer {
  GetItemsForBuyer: getItemsForBuyer_GetItemsForBuyer;
}

export interface getItemsForBuyerVariables {
  param: GetItemsForBuyerInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getItems
// ====================================================

export interface getItems_GetItems_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface getItems_GetItems_data_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface getItems_GetItems_data_customFieldValues {
  __typename: "CustomFieldValue";
  key: string;
  label: string;
  value: string;
}

export interface getItems_GetItems_data_product {
  __typename: "Product";
  _id: string;
  name: string;
}

export interface getItems_GetItems_data {
  __typename: "Item";
  _id: string;
  status: ItemStatus;
  code: string;
  name: string;
  phoneNumber: string | null;
  memo: string | null;
  dateTimeRange: getItems_GetItems_data_dateTimeRange | null;
  createdAt: any;
  customFieldValues: getItems_GetItems_data_customFieldValues[] | null;
  updatedAt: any;
  expiresAt: any | null;
  product: getItems_GetItems_data_product | null;
}

export interface getItems_GetItems {
  __typename: "GetItemsResponse";
  ok: boolean;
  error: getItems_GetItems_error | null;
  data: getItems_GetItems_data[] | null;
}

export interface getItems {
  GetItems: getItems_GetItems;
}

export interface getItemsVariables {
  param: GetItemsInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createStore
// ====================================================

export interface createStore_CreateStore_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface createStore_CreateStore_data {
  __typename: "Store";
  _id: string;
}

export interface createStore_CreateStore {
  __typename: "CreateStoreResponse";
  ok: boolean;
  error: createStore_CreateStore_error | null;
  data: createStore_CreateStore_data | null;
}

export interface createStore {
  CreateStore: createStore_CreateStore;
}

export interface createStoreVariables {
  param: CreateStoreInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyProfileForBuyer
// ====================================================

export interface getMyProfileForBuyer_GetMyProfileForBuyer_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface getMyProfileForBuyer_GetMyProfileForBuyer_data_buyer {
  __typename: "Buyer";
  _id: string;
  name: string;
  email: string;
  email_verified: boolean;
  phone_number_verified: boolean;
  phone_number: string;
  tokenExpiry: number;
}

export interface getMyProfileForBuyer_GetMyProfileForBuyer_data {
  __typename: "GetMyProfileForBuyerResult";
  buyer: getMyProfileForBuyer_GetMyProfileForBuyer_data_buyer;
}

export interface getMyProfileForBuyer_GetMyProfileForBuyer {
  __typename: "GetMyProfileForBuyerResponse";
  ok: boolean;
  error: getMyProfileForBuyer_GetMyProfileForBuyer_error | null;
  data: getMyProfileForBuyer_GetMyProfileForBuyer_data | null;
}

export interface getMyProfileForBuyer {
  GetMyProfileForBuyer: getMyProfileForBuyer_GetMyProfileForBuyer;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyProfile
// ====================================================

export interface getMyProfile_GetMyProfile_error {
  __typename: "Err";
  code: string | null;
  msg: string | null;
}

export interface getMyProfile_GetMyProfile_data_user_zoneinfo {
  __typename: "Zoneinfo";
  name: string;
  code: string;
  tz: string;
  offset: number;
  callingCode: string;
}

export interface getMyProfile_GetMyProfile_data_user_stores_groups {
  __typename: "StoreGroup";
  _id: string;
  code: string;
}

export interface getMyProfile_GetMyProfile_data_user_stores_infos {
  __typename: "Info";
  key: string;
  label: string;
  content: string;
}

export interface getMyProfile_GetMyProfile_data_user_stores_manager {
  __typename: "Manager";
  name: string;
  phoneNumber: string;
  isVerifiedPhoneNumber: boolean;
}

export interface getMyProfile_GetMyProfile_data_user_stores_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface getMyProfile_GetMyProfile_data_user_stores_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface getMyProfile_GetMyProfile_data_user_stores_products {
  __typename: "Product";
  _id: string;
  name: string;
}

export interface getMyProfile_GetMyProfile_data_user_stores_customFields {
  __typename: "CustomField";
  key: string;
  label: string;
  type: CustomFieldType;
  placeHolder: string | null;
  default: string | null;
  /**
   * type===LIST 인 경우 표시할 선택목록
   */
  list: string[] | null;
}

export interface getMyProfile_GetMyProfile_data_user_stores_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface getMyProfile_GetMyProfile_data_user_stores {
  __typename: "Store";
  _id: string;
  name: string;
  code: string;
  intro: string | null;
  warning: string | null;
  groups: getMyProfile_GetMyProfile_data_user_stores_groups[] | null;
  infos: getMyProfile_GetMyProfile_data_user_stores_infos[] | null;
  type: StoreType;
  manager: getMyProfile_GetMyProfile_data_user_stores_manager | null;
  businessHours: getMyProfile_GetMyProfile_data_user_stores_businessHours[] | null;
  productCount: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  location: getMyProfile_GetMyProfile_data_user_stores_location | null;
  products: getMyProfile_GetMyProfile_data_user_stores_products[] | null;
  customFields: getMyProfile_GetMyProfile_data_user_stores_customFields[] | null;
  periodOption: getMyProfile_GetMyProfile_data_user_stores_periodOption | null;
}

export interface getMyProfile_GetMyProfile_data_user {
  __typename: "User";
  /**
   * user.sub
   */
  _id: string;
  sub: string;
  name: string;
  roles: UserRole[] | null;
  email: string;
  email_verified: boolean;
  phone_number_verified: boolean;
  phone_number: string;
  zoneinfo: getMyProfile_GetMyProfile_data_user_zoneinfo;
  tokenExpiry: number;
  stores: getMyProfile_GetMyProfile_data_user_stores[] | null;
}

export interface getMyProfile_GetMyProfile_data {
  __typename: "GetMyProfileResult";
  user: getMyProfile_GetMyProfile_data_user;
}

export interface getMyProfile_GetMyProfile {
  __typename: "GetMyProfileResponse";
  ok: boolean;
  error: getMyProfile_GetMyProfile_error | null;
  data: getMyProfile_GetMyProfile_data | null;
}

export interface getMyProfile {
  GetMyProfile: getMyProfile_GetMyProfile;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignUp
// ====================================================

export interface emailSignUp_EmailSignUp_error {
  __typename: "Err";
  msg: string | null;
  code: string | null;
}

export interface emailSignUp_EmailSignUp_data_CodeDeliveryDetails {
  __typename: "CodeDeliveryDetails";
  AttributeName: string | null;
  DeliveryMedium: string | null;
  Destination: string | null;
}

export interface emailSignUp_EmailSignUp_data {
  __typename: "EmailSignUpResult";
  CodeDeliveryDetails: emailSignUp_EmailSignUp_data_CodeDeliveryDetails | null;
  UserConfirmed: boolean;
  UserSub: string | null;
}

export interface emailSignUp_EmailSignUp {
  __typename: "EmailSignUpResponse";
  ok: boolean;
  error: emailSignUp_EmailSignUp_error | null;
  data: emailSignUp_EmailSignUp_data | null;
}

export interface emailSignUp {
  EmailSignUp: emailSignUp_EmailSignUp;
}

export interface emailSignUpVariables {
  param: EmailSignUpInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FdateTimeRange
// ====================================================

export interface FdateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FperiodOp
// ====================================================

export interface FperiodOp {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fitems
// ====================================================

export interface Fitems_dateTimeRange {
  __typename: "DateTimeRange";
  from: any;
  to: any;
  interval: number;
}

export interface Fitems_customFieldValues {
  __typename: "CustomFieldValue";
  key: string;
  label: string;
  value: string;
}

export interface Fitems {
  __typename: "Item";
  _id: string;
  status: ItemStatus;
  code: string;
  name: string;
  phoneNumber: string | null;
  memo: string | null;
  dateTimeRange: Fitems_dateTimeRange | null;
  createdAt: any;
  customFieldValues: Fitems_customFieldValues[] | null;
  updatedAt: any;
  expiresAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FstoreGroup
// ====================================================

export interface FstoreGroup {
  __typename: "StoreGroup";
  _id: string;
  isDefault: boolean;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fperiod
// ====================================================

export interface Fperiod {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Flocation
// ====================================================

export interface Flocation {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fstore
// ====================================================

export interface Fstore_groups {
  __typename: "StoreGroup";
  _id: string;
  code: string;
}

export interface Fstore_infos {
  __typename: "Info";
  key: string;
  label: string;
  content: string;
}

export interface Fstore_manager {
  __typename: "Manager";
  name: string;
  phoneNumber: string;
  isVerifiedPhoneNumber: boolean;
}

export interface Fstore_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface Fstore_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface Fstore_products {
  __typename: "Product";
  _id: string;
  name: string;
}

export interface Fstore_customFields {
  __typename: "CustomField";
  key: string;
  label: string;
  type: CustomFieldType;
  placeHolder: string | null;
  default: string | null;
  /**
   * type===LIST 인 경우 표시할 선택목록
   */
  list: string[] | null;
}

export interface Fstore_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface Fstore {
  __typename: "Store";
  _id: string;
  name: string;
  code: string;
  intro: string | null;
  warning: string | null;
  groups: Fstore_groups[] | null;
  infos: Fstore_infos[] | null;
  type: StoreType;
  manager: Fstore_manager | null;
  businessHours: Fstore_businessHours[] | null;
  productCount: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  location: Fstore_location | null;
  products: Fstore_products[] | null;
  customFields: Fstore_customFields[] | null;
  periodOption: Fstore_periodOption | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_businessHours {
  __typename: "Period";
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  start: number;
  /**
   * 00:00 을 기준으로 분(Minute) 단위로 설정됨
   */
  end: number;
  /**
   * start, end 사이의 시간
   */
  time: number;
  /**
   * 포함하는 요일"들"
   */
  days: Day[] | null;
}

export interface Fproduct_periodOption {
  __typename: "PeriodOption";
  /**
   * 최소 손택 범위
   */
  min: number;
  /**
   * 최대 선택 범위
   */
  max: number;
  /**
   * 선택 단위
   */
  unit: number;
}

export interface Fproduct {
  __typename: "Product";
  _id: string;
  name: string;
  code: string;
  subTitle: string | null;
  images: any[] | null;
  description: string | null;
  needToConfirm: boolean;
  totalItemCount: number;
  createdAt: any;
  updatedAt: any;
  expiresAt: any | null;
  genderOption: GenderOption | null;
  intro: string | null;
  warning: string | null;
  capacity: number | null;
  businessHours: Fproduct_businessHours[] | null;
  /**
   * Min, Max는 변경 가능하지만 Unit은 변경 불가
   */
  periodOption: Fproduct_periodOption | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CustomFieldType {
  LIST = "LIST",
  STRING = "STRING",
}

export enum Day {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED",
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export enum GenderOption {
  ANY = "ANY",
  FEMALE = "FEMALE",
  MALE = "MALE",
  SEPARATELY = "SEPARATELY",
}

export enum GroupType {
  PRODUCT_GROUP = "PRODUCT_GROUP",
  STORE_GROUP = "STORE_GROUP",
}

export enum ItemStatus {
  CANCELED = "CANCELED",
  PENDING = "PENDING",
  PERMITTED = "PERMITTED",
}

export enum StoreType {
  LEASE = "LEASE",
  TICKET = "TICKET",
}

export enum UserRole {
  ADMIN = "ADMIN",
  BUYER = "BUYER",
  SELLER = "SELLER",
}

export interface AuthorizeCodeSignInInput {
  authorizeCode: string;
  redirectUri: string;
}

export interface BookingPolicyInput {
  limitLastBooking: number;
  limitFirstBooking: number;
}

export interface CancelItemForBuyerInput {
  itemCode: string;
  comment?: string | null;
}

export interface CancelItemInput {
  itemId: string;
}

export interface CreateItemForBuyerInput {
  name?: string | null;
  phoneNumber?: string | null;
  productCode: string;
  description?: string | null;
  dateTimeRange?: DateTimeRangeInput | null;
  gender?: Gender | null;
  customFieldValues?: CustomFieldInput[] | null;
}

export interface CreateItemInput {
  storeId: string;
  productId: string;
  description?: string | null;
  customFieldValues?: CustomFieldInput[] | null;
  phoneNumber?: string | null;
  name?: string | null;
  dateTimeRange?: DateTimeRangeInput | null;
  gender?: Gender | null;
}

export interface CreateProductInput {
  storeId: string;
  subTitle?: string | null;
  name?: string | null;
  images?: any[] | null;
  description?: string | null;
  intro?: string | null;
  warning?: string | null;
  optionalParams?: ProductOptionalFieldInput | null;
  infos?: InfoInput[] | null;
}

export interface CreateStoreInput {
  name: string;
  type: StoreType;
  description?: string | null;
  manager?: ManagerInput | null;
  timezone?: string | null;
  warning?: string | null;
  intro?: string | null;
  groupId?: string | null;
  businessHours?: PeriodInput[] | null;
  periodOption: PeriodOptionInput;
  customFieldInput?: CustomFieldDefineInput[] | null;
  infos?: InfoInput[] | null;
  bookingPolicy?: BookingPolicyInput | null;
}

export interface CustomFieldDefineInput {
  key?: string | null;
  label: string;
  type: CustomFieldType;
  list?: string[] | null;
  placeHolder?: string | null;
  default?: string | null;
}

export interface CustomFieldInput {
  key: string;
  value: string;
}

/**
 * 비교 시 from은 포함관계, end는 "비"포함관계
 */
export interface DateTimeRangeInput {
  from: any;
  to: any;
}

export interface DeleteItemInput {
  itemId: string;
}

export interface DeleteProductInput {
  productId: string;
}

export interface DeleteStoreInput {
  storeId: string;
}

export interface EmailSignInInput {
  email: any;
  password: string;
  role: UserRole;
}

export interface EmailSignUpInput {
  email: any;
  phoneNumber: any;
  password: any;
  username: string;
  timezone: string;
  role: UserRole;
}

export interface GetItemForBuyerInput {
  itemCode: string;
}

export interface GetItemsFilterInput {
  productCode?: string | null;
  productId?: string | null;
  date?: any | null;
  dateTimeRange?: DateTimeRangeInput | null;
  name?: string | null;
  status?: ItemStatus | null;
}

export interface GetItemsForBuyerInput {
  filter: GetItemsFilterInput;
}

export interface GetItemsInput {
  storeId: string;
  filter: GetItemsFilterInput;
}

export interface GetProductsByStoreIdInput {
  storeId: string;
}

export interface GetProductsForBuyerInput {
  storeCode: string;
}

export interface GetStoreByIdInput {
  storeId: string;
}

export interface GetStoreGroupByCodeInput {
  groupCode: string;
}

export interface InfoInput {
  key: string;
  content: string;
  label: string;
}

export interface ManagerInput {
  name: string;
  phoneNumber: string;
}

export interface PeriodInput {
  start: number;
  end: number;
  days?: Day[] | null;
}

export interface PeriodOptionInput {
  max: number;
  min: number;
  unit: number;
  offset?: number | null;
}

export interface PermitItemInput {
  itemId: string;
  comment?: string | null;
}

export interface ProductOptionalFieldInput {
  peopleCapacity?: number | null;
  genderOption?: GenderOption | null;
  businessHours?: PeriodInput[] | null;
  disabledPeriod?: PeriodInput[] | null;
  periodOption?: PeriodOptionInput | null;
  bookingPolicy?: BookingPolicyInput | null;
}

export interface RefreshTokenInput {
  role: UserRole;
}

export interface StoreUpdateParamInput {
  name?: string | null;
  description?: string | null;
  businessHours?: PeriodInput[] | null;
  customFields?: CustomFieldDefineInput[] | null;
  warning?: string | null;
  intro?: string | null;
  customFieldInput?: CustomFieldDefineInput[] | null;
  manager?: ManagerInput | null;
  infos?: InfoInput[] | null;
  bookingPolicy?: BookingPolicyInput | null;
}

export interface UpdateMyProfileInput {
  roles?: UserRole[] | null;
  name?: string | null;
  phoneNumber?: string | null;
  timezone?: string | null;
}

export interface UpdateProductInput {
  productCode: string;
  updateProductParamInput: UpdateProductParamInput;
}

export interface UpdateProductParamInput {
  name?: string | null;
  description?: string | null;
  subTitle?: string | null;
  needToConfirm?: boolean | null;
  addImages?: any[] | null;
  deleteImages?: string[] | null;
  peopleCapacity?: number | null;
  genderOption?: GenderOption | null;
  businessHours?: PeriodInput[] | null;
  periodOption?: PeriodOptionInput | null;
  bookingPolicy?: BookingPolicyInput | null;
  infos?: InfoInput[] | null;
}

export interface UpdateStoreInput {
  storeId: string;
  updateParam: StoreUpdateParamInput;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
