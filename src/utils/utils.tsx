// 유틸리티가 더 많이 쌓이면
import ErrProtecter from "./errProtect";
import isEmpty from "./isEmptyData";
import { smsMessageFormatter, smsMsgParser } from "./smsUtils";
import autoHypen, { autoComma, numberStr, toNumber } from "./autoFormat";
import {
  JDMonthTextChanger,
  JDWeekChanger,
  applyDaysToArr,
  arrToApplyDays,
  dayarrEnToBooleanArr
} from "./dayOfweeks";
import { cardValidate } from "./validations";
import {
  isEmail,
  isPhone,
  isName,
  isUrl,
  isMaxOver,
  isYYYYMMDD,
  isPassword,
  isNumberMinMax,
  isIncludeSpecialChar
} from "./inputValidations";
import insideRedirect from "./insideRedirect";
import searchHoliday from "./searchHoliday";
import isTestProduct from "./isTestProduct";
import { textAlignClass, colorClass } from "./autoClasses";
import searchListFormat from "./searchListFormater";
import { showError } from "./errorMessage";
import onCompletedMessage from "./onCompletedMessage";
import queryDataFormater, { getFromResult } from "./queryFormater";
import setMidNight from "./setMidNight";
import removeNullOfObject from "./removeNullOfObject";
import s4 from "./keyGen";
import randomIntFromInterval from "./randomNumber";
import muResult from "./mutationResultSafty";
import instanceOfA from "./interfaceMatch";
import JDscrollTo from "./scrollTo";
import targetBlink from "./targetBlink";
import mergeObject from "./mergeObject";
import jsonString from "./jsonString";
import isLast from "./isLast";

const JDutils = {
  isTestProduct,
  ErrProtecter,
  isIncludeSpecialChar,
  targetBlink,
  isEmpty,
  isEmail,
  isPhone,
  isUrl,
  isName,
  isMaxOver,
  isPassword,
  textAlignClass,
  colorClass,
  JDscrollTo,
  randomIntFromInterval,
  JDMonthTextChanger,
  searchListFormat,
  autoHypen,
  onCompletedMessage,
  queryDataFormater,
  setMidNight,
  applyDaysToArr,
  arrToApplyDays,
  smsMsgParser,
  autoComma,
  dayarrEnToBooleanArr,
  isLast,
  isYYYYMMDD,
  numberStr,
  toNumber,
  smsMessageFormatter,
  isNumberMinMax,
  muResult,
  removeNullOfObject,
  jsonString,
  insideRedirect,
  instanceOfA,
  mergeObject,
  s4,
  getFromResult
};

export default JDutils;
export {
  isIncludeSpecialChar,
  onCompletedMessage,
  JDMonthTextChanger,
  insideRedirect,
  instanceOfA,
  jsonString,
  getFromResult,
  JDWeekChanger,
  isEmpty,
  smsMessageFormatter,
  textAlignClass,
  colorClass,
  ErrProtecter,
  removeNullOfObject,
  autoHypen,
  dayarrEnToBooleanArr,
  showError,
  smsMsgParser,
  isTestProduct,
  queryDataFormater,
  cardValidate,
  mergeObject,
  setMidNight,
  JDscrollTo,
  searchHoliday,
  applyDaysToArr,
  randomIntFromInterval,
  arrToApplyDays,
  targetBlink,
  autoComma,
  numberStr,
  muResult,
  toNumber,
  isYYYYMMDD,
  s4
};
