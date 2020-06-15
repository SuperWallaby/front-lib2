import {JDColor, IconSize, TMarginSize} from "..";

export function space(num: number) {
  return num * 0.4 + "rem";
}
export function round(num: number) {
  return num * 3 + "px";
}

export const color = (theme: any, color?: JDColor | null) => {
  const {
    primaryColor,
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
      return primaryColor;
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

export const margin = (theme: any, mb?: TMarginSize) => {
  const {
    standardLargestSpace,
    standardHugeSpace,
    standardLargeSpace,
    standardSpace,
    standardSmallSapce,
    standardTinySpace,
    standardSuperTinySpace,
  } = theme;

  switch (mb) {
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
