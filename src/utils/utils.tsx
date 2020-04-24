// 유틸리티가 더 많이 쌓이면
import isEmpty from "./isEmptyData";
import autoHypen, {
  autoComma,
  numberStr,
  toNumber,
  card_space,
  dateRangeFormat,
  removeSpecialChar,
} from "./autoFormat";
import insideRedirect from "./insideRedirect";
import { textAlignClass, colorClass } from "./autoClasses";
import searchListFormat from "./searchListFormater";
import queryDataFormater, { getFromResult } from "./queryFormater";
import setMidNight from "./setMidNight";
import removeNullOfObject from "./removeNullOfObject";
import s4 from "./keyGen";
import { fromToRender } from "./fromToRender";
import randomIntFromInterval from "./randomNumber";
import muResult from "./mutationResultSafty";
import instanceOfA from "./interfaceMatch";
import jsonString from "./jsonString";
import isLast from "./isLast";
import { arraySum } from "./elses";
import onCompletedMessage from "./onCompletedMessage";
import {
  isEmail,
  isNumber,
  isYYYYMMDD,
  isPhone,
  isName,
  isUrl,
  isMaxOver,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
  // @ts-ignore
} from "./validater.js";

const JDutils = {
  isEmpty,
  card_space,
  textAlignClass,
  arraySum,
  colorClass,
  randomIntFromInterval,
  searchListFormat,
  autoHypen,
  queryDataFormater,
  onCompletedMessage,
  setMidNight,
  autoComma,
  isLast,
  numberStr,
  fromToRender,
  toNumber,
  muResult,
  removeNullOfObject,
  jsonString,
  insideRedirect,
  instanceOfA,
  s4,
  getFromResult,
  isEmail,
  removeSpecialChar,
  dateRangeFormat,
  isNumber,
  isYYYYMMDD,
  isPhone,
  isName,
  isUrl,
  isMaxOver,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
};

export {
  isEmpty,
  card_space,
  textAlignClass,
  arraySum,
  colorClass,
  randomIntFromInterval,
  searchListFormat,
  autoHypen,
  queryDataFormater,
  onCompletedMessage,
  setMidNight,
  autoComma,
  isLast,
  numberStr,
  fromToRender,
  toNumber,
  muResult,
  removeNullOfObject,
  jsonString,
  insideRedirect,
  instanceOfA,
  s4,
  getFromResult,
  isEmail,
  removeSpecialChar,
  dateRangeFormat,
  isNumber,
  isYYYYMMDD,
  isPhone,
  isName,
  isUrl,
  isMaxOver,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
};
export default JDutils;
