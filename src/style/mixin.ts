import { JDColor, IconSize, TMarginSize } from "..";
import { JDatomExtentionSet } from "../types/interface";
import { css } from "styled-components";
import { theme } from "./theme";
import { shadow1, shadow2, shadow3, shadow4, shadow5, shadow6, shadow7 } from "./shared";

const { columnMargin, columnWidth, totalColumns } = theme;

export const gridWidth = (n: number) => {
  return (
    columnWidth * n - (columnMargin * (totalColumns - n)) / totalColumns + "%"
  );
};

export function space(num: number) {
  return (num * 4) / 10 + "rem";
}
export function round(num: number) {
  return num * 3 + "px";
}


export const shadow = (depth?: number) => {
  switch (depth) {
    case 1
      : return shadow1;
    case 2
      : return shadow2;
    case 3
      : return shadow3;
    case 4
      : return shadow4;
    case 5
      : return shadow5;
    case 6
      : return shadow6;
    case 7
      : return shadow7;
    default:
      return ""
  }
}

export const color = (theme: any, color?: JDColor | null) => {
  const {
    primaryColor2,
    pointColor,
    positiveColor,
    orangeColor,
    greyLevel1,
    greyLevel2,
    greyLevel3,
    greyLevel4,
    greyLevel5,
    primaryColorDark,
    errorColor,
    newColor,
    htmlColor,
    blueColor,
    thirdColor,
  } = theme;

  switch (color) {
    case "primary":
      return primaryColor2;
    case "point":
      return pointColor;
    case "positive":
      return positiveColor;
    case "warn":
      return orangeColor;
    case "grey1":
      return greyLevel1;
    case "grey2":
      return greyLevel2;
    case "grey3":
      return greyLevel3;
    case "grey4":
      return greyLevel4;
    case "grey5":
      return greyLevel5;
    case "darkPrimary":
      return primaryColorDark;
    case "new":
      return newColor;
    case "error":
      return errorColor;
    case "black":
      return htmlColor;
    case "white":
      return "#fff";
    case "blue":
      return blueColor;
    case "third":
      return thirdColor;
  }
};

export const iconSize = (theme: any, size?: IconSize | null) => {
  const {
    iconSizeTiny,
    iconSizeSmall,
    iconSizeNormal,
    iconSizeLarge,
    iconSizeHuge,
    iconSizeLargest,
  } = theme;

  switch (size) {
    case "tiny":
      return iconSizeTiny;
    case "small":
      return iconSizeSmall;
    case "normal":
      return iconSizeNormal;
    case "large":
      return iconSizeLarge;
    case "huge":
      return iconSizeHuge;
    case "largest":
      return iconSizeLargest;
    default:
      return iconSizeNormal;
  }
};

export const margin2 = (margin: number) => {
  return space(margin);
};

// 디프리케이트 할 함수
export const margin = (theme: any, margin?: TMarginSize | number) => {
  const {
    standardLargestSpace,
    standardHugeSpace,
    standardLargeSpace,
    standardSpace,
    standardSmallSapce,
    standardTinySpace,
    standardSuperTinySpace,
  } = theme;

  if (typeof margin === "number") {
    return margin2(margin);
  }

  switch (margin) {
    case "no":
      return "0px!important";
    case "superTiny":
      return standardSuperTinySpace;
    case "tiny":
      return standardTinySpace;
    case "small":
      return standardSmallSapce;
    case "normal":
      return standardSpace;
    case "large":
      return standardLargeSpace;
    case "huge":
      return standardHugeSpace;
    case "largest":
      return standardLargestSpace;
  }
};

interface JDcommonProp extends JDatomExtentionSet {
  [key: string]: any;
}

export const JDcommon = (prop: JDcommonProp, theme: any) => {
  const { hide, mb, mr, z } = prop;

  return css`
    ${hide &&
    css`
        display: none !important;
      `}
    ${z &&
    css`
        z-index: ${z * 10};
      `}
    ${mb &&
    css`
        margin-bottom: ${margin(theme, mb)};
      `}
    ${mr &&
    css`
        margin-bottom: ${margin(theme, mr)};
      `}
  `;
};
