/* eslint-disable max-len */
import React from "react";
import classNames from "classnames";
import { colorClass } from "../../utils/autoClasses";
import s4 from "../../utils/keyGen";
import Tooltip from "../tooltip/Tooltip";
import { iconSizeClass, JDmbClass, JDmrClass } from "../../utils/autoClasses";
import { IIcons, IconConifgProps, IConOrigin } from "./declation";
import { JDatomExtentionSet } from "../../types/interface";

export interface IConProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
    JDatomExtentionSet {
  icon: IIcons;
  tooltipProp?: any;
}

const JDicon: React.FC<IConProps & IconConifgProps> = ({
  label,
  icon,
  hover = false,
  onClick,
  size = undefined,
  tooltip,
  color,
  labelSize,
  className,
  selected,
  dots,
  mb,
  mr,
  tooltipProp,
  ...props
}) => {
  const wrapClasses = classNames("iconWrapper", className, {
    ...JDmbClass(mb),
    ...JDmrClass(mr)
  });

  const classes = classNames("JDicon", undefined, {
    JDicon__svg: true,
    "JDicon__svg--hover": hover,
    "JDicon__svg--selected": selected,
    ...colorClass("JDicon", color),
    ...iconSizeClass("JDicon", size)
  });

  const newId = s4();

  return (
    <span
      {...tooltipProp}
      onClick={onClick}
      data-tip={tooltip ? true : false}
      data-for={tooltip && `btnTooltip${newId}`}
      className={wrapClasses}
    >
      {IConOrigin[icon]({
        className: classes,
        onClick: onClick,
        ...props
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
              whiteSpace: "nowrap"
            }}
          >
            {tooltip}
          </span>
        </Tooltip>
      )}
      {dots && <span className="JDicon__dots">{dots}</span>}
      {label && (
        <span
          className={`Icon__label ${labelSize === "large" &&
            "Icon__label--large"}`}
        >
          {label}
        </span>
      )}
    </span>
  );
};

const JDIcon = React.memo(JDicon);
export default JDIcon;
