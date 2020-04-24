import OutReactTooltip from "react-tooltip";
import React from "react";
interface IProps extends OutReactTooltip.Props {
    children?: string | JSX.Element;
}
declare const JDToolTip: React.FC<IProps>;
export default JDToolTip;
export declare const ReactTooltip: typeof OutReactTooltip;
