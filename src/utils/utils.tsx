// 유틸리티가 더 많이 쌓이면
import isEmpty from "./isEmptyData";
import autoHypen, { autoComma, numberStr, toNumber } from "./autoFormat";
import insideRedirect from "./insideRedirect";
import searchHoliday from "./searchHoliday";
import { textAlignClass, colorClass } from "./autoClasses";
import searchListFormat from "./searchListFormater";
import queryDataFormater, { getFromResult } from "./queryFormater";
import setMidNight from "./setMidNight";
import removeNullOfObject from "./removeNullOfObject";
import s4 from "./keyGen";
import randomIntFromInterval from "./randomNumber";
import muResult from "./mutationResultSafty";
import instanceOfA from "./interfaceMatch";
import jsonString from "./jsonString";
import isLast from "./isLast";

const JDutils = {
  isEmpty,
  textAlignClass,
  colorClass,
  randomIntFromInterval,
  searchListFormat,
  autoHypen,
  queryDataFormater,
  setMidNight,
  autoComma,
  isLast,
  numberStr,
  toNumber,
  muResult,
  removeNullOfObject,
  jsonString,
  insideRedirect,
  instanceOfA,
  s4,
  getFromResult
};

export default JDutils;
export {
  insideRedirect,
  instanceOfA,
  jsonString,
  getFromResult,
  isEmpty,
  textAlignClass,
  colorClass,
  removeNullOfObject,
  autoHypen,
  queryDataFormater,
  setMidNight,
  searchHoliday,
  randomIntFromInterval,
  autoComma,
  numberStr,
  muResult,
  toNumber,
  s4
};
