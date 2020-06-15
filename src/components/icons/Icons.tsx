/* eslint-disable max-len */
import React from "react";
import s4 from "../../utils/keyGen";
import Tooltip from "../tooltip/Tooltip";
import {IIcons, IconConifgProps, IConOrigin} from "./declation";
import {JDatomExtentionSet} from "../../types/interface";
import {StyledIconWrap, StyledIconLabel} from "./Icon.style";

export interface IConProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
    JDatomExtentionSet {
  icon: IIcons;
  tooltipProp?: any;
}

export type ICONPROP = IConProps & IconConifgProps;

const JDicon: React.FC<ICONPROP> = ({
  label,
  icon,
  onClick,
  size = undefined,
  tooltip,
  color,
  labelSize,
  className,
  selected,
  tooltipProp,
  hover = true,
  mb,
  mr,
  ...props
}) => {
  const newId = s4();

  return (
    <StyledIconWrap
      {...tooltipProp}
      onClick={onClick}
      mb={mb}
      mr={mr}
      size={size}
      data-tip={tooltip ? true : false}
      data-for={tooltip && `btnTooltip${newId}`}
    >
      {IConOrigin[icon]({
        ...props,
      })}
      {tooltip && (
        <Tooltip
          wrapper="div"
          type="dark"
          effect="solid"
          id={`btnTooltip${newId}`}
        >
          <span
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {tooltip}
          </span>
        </Tooltip>
      )}
      {label && <StyledIconLabel />}
    </StyledIconWrap>
  );
};

const JDIcon = React.memo(JDicon);
export default JDIcon;
