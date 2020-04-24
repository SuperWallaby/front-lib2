import React from "react";
import { Settings } from "react-slick";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
interface IProps extends Settings, JDatomExtentionSet {
    whiteIcon?: boolean;
    displayArrow?: boolean;
    condition?: boolean;
}
declare const JDSlider: React.FC<IProps & IDiv>;
export declare const Slide: React.FC;
export default JDSlider;
