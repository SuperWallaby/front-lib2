import React from "react";
import {IDiv, JDatomExtentionSet} from "../../types/interface";
import {TextAlign} from "../../types/enum";
import StyledAlign from "./Align.styles";

export type TFlex = {
  center?: boolean;
  vCenter?: boolean;
  between?: boolean;
  around?: boolean;
  wrap?: boolean;
  end?: boolean;
  column?: boolean;
  grow?: boolean;
};

export type TCol = {
  wlg?: number;
  lg?: number;
  md?: number;
  sm?: number;
  full?: number;
};

export type TGrid = {
  grow?: boolean;
};

export interface IJDalignProp extends IDiv, JDatomExtentionSet {
  text?: TextAlign;
  flex?: TFlex | true;
  grid?: TGrid | true;
  col?: TCol | true;
}

const Align: React.FC<IJDalignProp> = ({children, ...props}) => {
  return <StyledAlign {...props}>{children}</StyledAlign>;
};

export default Align;
