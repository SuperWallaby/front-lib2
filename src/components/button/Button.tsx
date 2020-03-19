import React, { Fragment } from "react";
import classNames from "classnames";
import { IConProps } from "../icons/Icons";
import Preloader from "../preloader/Preloader";
import { colorClass } from "../../utils/autoClasses";
import s4 from "../../utils/keyGen";
import Tooltip from "../tooltip/Tooltip";
import { JDColor, TMarginSize } from "../../types/enum";
import { JDmbClass, JDmrClass } from "../../utils/autoClasses";
import { JDatomExtentionSet, TElements } from "../../types/interface";
import userTacking from "../../utils/userTracking";
import JDIcon from "../icons/Icons";
import { IconConifgProps } from "../icons/declation";

export interface IButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    JDatomExtentionSet {
  disabled?: boolean;
  label?: string | TElements;
  iconProp?: IConProps & IconConifgProps;
  refContainer?: any;
  cunsumPadding?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  iconClasses?: string[];
  dataTip?: any;
  dataFor?: any;
  padding?: TMarginSize;
  mode?: "flat" | "normal" | "border";
  size?: "tiny" | "small" | "large" | "long" | "longLarge";
  flat?: boolean;
  float?: string;
  type?: "button" | "submit" | "reset" | undefined;
  color?: "white";
  thema?: JDColor | null;
  pulse?: boolean;
  blink?: boolean;
  toggle?: boolean;
  preloader?: boolean;
  transparent?: boolean;
  className?: string;
  br?: "round" | "normal" | "no";
  hrefOpen?: string;
  tooltip?: string;
  redirect?: string;
}

const Button: React.FC<IButtonProps> = ({
  disabled,
  label,
  iconProp,
  tooltip,
  onClick,
  iconClasses,
  dataTip,
  dataFor,
  flat,
  mode,
  cunsumPadding,
  refContainer,
  float,
  type,
  color,
  thema,
  padding,
  redirect,
  pulse,
  blink,
  preloader,
  br,
  children,
  className,
  transparent,
  size,
  mb,
  mr,
  hrefOpen,
  // 투글은 클래스만 바꾸어 줍니다.
  toggle,
  ...props
}) => {
  const classes = classNames("JDbtn", className, {
    "JDbtn--flat": mode === "flat" || flat,
    "JDbtn--pno": padding === "no",
    "JDbtn--ptiny": padding === "tiny",
    "JDbtn--plargest": padding === "largest",
    "JDbtn--plarge": padding === "large",
    "JDbtn--phuge": padding === "huge",
    "JDbtn--small": size === "small",
    "JDbtn--tiny": size === "tiny",
    "JDbtn--large": size === "large" || size === "longLarge",
    "JDbtn--long": size === "long" || size === "longLarge",
    "JDbtn--border": mode === "border",
    "JDbtn--left": float === "left",
    "JDbtn--round": br === "round",
    "JDbtn--unRound": br === "no",
    "JDbtn--right": float === "right",
    "JDbtn--text-white": color === "white",
    "JDbtn--transparent": transparent,
    ...colorClass("JDbtn", thema),
    "JDwaves-effect-dark": mode === "flat" && thema === "normal",
    "JDbtn--pulse": pulse,
    "JDbtn--toogleOn": toggle === true,
    "JDbtn--toogle111Off": toggle === false,
    "JDbtn--cunsumPadding": cunsumPadding,
    "JDtext-blink": blink,
    "visibility-none": props.hidden,
    ...JDmbClass(mb),
    ...JDmrClass(mr)
  });

  const handleClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    hrefOpen && window.open(hrefOpen);
    if (redirect) {
      document.location.href = redirect;
    }
    if (typeof label === "string") userTacking(label);

    onClick && onClick(event);
  };

  const handleKeyPress = () => {};

  const newId = s4();

  return (
    <Fragment>
      <button
        {...props}
        ref={refContainer}
        type={type}
        disabled={disabled}
        className={`JDbtn JDwaves-effect ${classes}`}
        onClick={handleClickButton}
        onKeyPress={handleKeyPress}
        data-tip={tooltip ? true : dataTip}
        data-for={tooltip ? `btnTooltip${newId}` : dataFor}
      >
        <span className="JDbtn__contents">
          {children}
          {preloader ? <Preloader loading={true} /> : label}
          {!preloader && iconProp && (
            <i
              className={`JDbtn__icon ${iconClasses && iconClasses.join(" ")}`}
            >
              {iconProp && <JDIcon {...iconProp} />}
            </i>
          )}
        </span>
      </button>
      {tooltip && (
        <Tooltip type="dark" effect="solid" id={`btnTooltip${newId}`}>
          <span>{tooltip}</span>
        </Tooltip>
      )}
    </Fragment>
  );
};

export default Button;
