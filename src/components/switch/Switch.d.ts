import React from "react";
import "./Switch.scss";
import { JDatomExtentionSet } from "../../types/interface";
interface IProps extends JDatomExtentionSet {
    disabled?: boolean;
    checked?: boolean;
    onChange?(foo: boolean): void;
    label?: string | JSX.Element;
    ltxt?: string;
    rtxt?: string;
    tooltip?: string;
    id?: string;
    className?: string;
}
declare const JDswitch: React.FC<IProps>;
export default JDswitch;
