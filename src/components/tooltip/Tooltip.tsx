import OutReactTooltip, { TooltipProps } from "react-tooltip";
import React from "react";

interface IProps extends TooltipProps {
  children?: string | JSX.Element;
}

const JDToolTip: React.FC<IProps> = ({ children, ...props }) => (
  <OutReactTooltip class="JDtooltip" {...props}>
    {children}
  </OutReactTooltip>
);

export default JDToolTip;
export const ReactTooltip = OutReactTooltip;

//
