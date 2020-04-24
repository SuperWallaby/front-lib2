import React from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
interface IProps extends IDiv {
    /**
     * Sets the button size.
     */
    children?: JSX.Element[] | JSX.Element | string;
    hover?: boolean;
    toogleCard?: boolean;
    onToogleCardClick?: () => any;
    fullHeight?: boolean;
    className?: string;
    selected?: boolean;
    fullWidth?: boolean;
    align?: "center";
    noMargin?: boolean;
    onClickCard?(): void;
}
export interface CardProps extends IProps {
}
export declare const JDcard: React.FC<IProps & JDatomExtentionSet>;
export default JDcard;
