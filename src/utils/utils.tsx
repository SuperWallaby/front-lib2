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
import { getFromUrl, getAllFromUrl } from "./getFromUrl";
import copytoClipboard from "./copyToClipboard";
import insideRedirect from "./insideRedirect";
import dataURLtoFile from "./dataURLtoFile";
import { textAlignClass, JDatomClasses } from "./autoClasses";
import searchListFormat from "./searchListFormater";
import queryDataFormater, { getFromResult } from "./queryFormater";
import setMidNight, { to4YMMDD } from "./setMidNight";
import removeNullOfObject from "./removeNullOfObject";
import s4 from "./keyGen";
import { fromToRender } from "./fromToRender";
import randomIntFromInterval from "./randomNumber";
import muResult from "./mutationResultSafty";
import instanceOfA from "./interfaceMatch";
import jsonString from "./jsonString";
import { selectOpCreater, enumToOption } from "./selectOptionCreater";
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
  dataURLtoFile,
  enumToOption,
  card_space,
  textAlignClass,
  arraySum,
  selectOpCreater,
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
  JDatomClasses,
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
  to4YMMDD,
  isHaveScharacter,
  isHaveNumber,
  getFromUrl,
  getAllFromUrl,
  copytoClipboard,
  isIncludeSpecialChar,
};

export {
  isEmpty,
  card_space,
  textAlignClass,
  arraySum,
  dataURLtoFile,
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
  JDatomClasses,
  getFromUrl,
  copytoClipboard,
  isName,
  getAllFromUrl,
  isUrl,
  isMaxOver,
  to4YMMDD,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
};
export default JDutils;
