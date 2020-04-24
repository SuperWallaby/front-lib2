import React from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
declare type TFlex = {
    center?: boolean;
    vCenter?: boolean;
    between?: boolean;
    around?: boolean;
    wrap?: boolean;
    end?: boolean;
    column?: boolean;
    oneone?: boolean;
    grow?: boolean;
};
declare type TCol = {
    wlg?: number;
    lg?: number;
    md?: number;
    sm?: number;
    full?: number;
};
declare type TGrid = {
    grow?: boolean;
};
interface IProps {
    flex?: TFlex | true;
    grid?: TGrid | true;
    col?: TCol | true;
}
export declare const TypeAlign: React.FC<IProps>;
declare const Align: React.FC<IProps & IDiv & JDatomExtentionSet>;
export default Align;
