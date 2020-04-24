import React from "react";
import { ValueType } from "react-select";
import { SelectComponentsProps } from "react-select/src/Select";
import { JDatomExtentionSet } from "../../types/interface";
export interface IselectedOption<T = any> {
    label: string;
    value: T;
}
export declare enum SelectBoxSize {
    TWO = "4rem",
    FOUR = "6rem",
    SIX = "9rem",
    FIVE = "11rem"
}
export interface JDselectProps extends SelectComponentsProps {
    label?: string | JSX.Element;
    disabled?: boolean;
    selectedOption?: IselectedOption | null;
    selectedOptions?: ValueType<IselectedOption<any>>;
    options?: IselectedOption[];
    onChange?(foo: IselectedOption): void;
    className?: string;
    rightLabel?: string;
    props?: any;
    defaultValue?: IselectedOption | null;
    isOpen?: boolean;
    menuCanOverflow?: boolean;
    textOverflow?: "visible" | "hidden";
    mode?: "small";
    size?: SelectBoxSize;
    background?: "white";
    borderColor?: "primary";
    displayArrow?: boolean;
    menuItemCenterlize?: boolean;
}
declare const JDselect: React.NamedExoticComponent<JDselectProps & JDatomExtentionSet>;
export default JDselect;
