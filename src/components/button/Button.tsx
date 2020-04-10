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
import JDtypho from "../typho/Typho";

interface IButtonConstum {
  /** 사용 불가능함*/
  disabled?: boolean;
  /** 버튼 텍스트 */
  label?: string | TElements;
  /**  아이콘 PROP 들 */
  iconProp?: IConProps & IconConifgProps;
  /** 패딩을 제거합니다. */
  cunsumPadding?: boolean;
  iconClasses?: string[];
  /** 해당 PROP에 값을 넣으면 버튼에 툴팁을 생성합니다. */
  dataTip?: any;
  /** 툴팁 PROP 참고 */
  dataFor?: any;
  /** 버튼 패딩 */
  padding?: TMarginSize;
  /** 버튼의 모양을 조절 */
  mode?: "flat" | "normal" | "border" | "iconButton";
  /** 버튼의 크기를 조절 */
  size?: "small" | "large" | "long" | "longLarge";
  /** 해당 버튼은 float 속성을 지닙니다. */
  type?: "button" | "submit" | "reset" | undefined;
  /** 버튼 색상 */
  thema?: JDColor | null;
  /** 해당 버튼은 펄스 효과를 가집니다. */
  pulse?: boolean;
  /** 해당 버튼은 깜빡임 효과를 가집니다. */
  blink?: boolean;
  toggle?: boolean;
  /** 해당 버튼은 로딩 효과를 가집니다. */
  preloader?: boolean;
  /** 해당 버튼의 라운드를 조절합니다. */
  br?: "round" | "normal" | "no";
  /** 해당 버튼의 동작을 A링크처럼 처리합니다. */
  hrefOpen?: string;
  /** 해당 PROP 를 전달하여 툴팁을 생성합니다. */
  tooltip?: string;
  /** 해당 버튼을 Redirect 하는 용도로 사용합니다. */
  redirect?: string;
  /** 폰트 색상을 강제합니다. */
  color?: "white";
}

export interface IButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    JDatomExtentionSet,
    IButtonConstum {
  color?: "white";
}

export const TypeButton: React.FC<IButtonConstum> = () => <div />;

export const Button: React.FC<IButtonProps> = ({
  disabled,
  label,
  iconProp,
  tooltip,
  onClick,
  iconClasses,
  dataTip,
  dataFor,
  mode,
  cunsumPadding,
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
  size,
  mb,
  mr,
  hrefOpen,
  // 투글은 클래스만 바꾸어 줍니다.
  toggle,
  ...props
}: IButtonProps) => {
  const classes = classNames("JDbtn", className, {
    "JDbtn--flat": mode === "flat",
    "JDbtn--pno": padding === "no",
    "JDbtn--ptiny": padding === "tiny",
    "JDbtn--plargest": padding === "largest",
    "JDbtn--plarge": padding === "large",
    "JDbtn--phuge": padding === "huge",
    "JDbtn--small": size === "small",
    "JDbtn--large": size === "large" || size === "longLarge",
    "JDbtn--long": size === "long" || size === "longLarge",
    "JDbtn--border": mode === "border",
    "JDbtn--round": br === "round",
    "JDbtn--unRound": br === "no",
    "JDbtn--text-white": color === "white",
    ...colorClass("JDbtn", thema),
    "JDwaves-effect-dark": mode === "flat" && thema === "normal",
    "JDbtn--iconButton": mode === "iconButton",
    "JDbtn--pulse": pulse,
    "JDbtn--toogleOn": toggle === true,
    "JDbtn--toogle111Off": toggle === false,
    "JDbtn--cunsumPadding": cunsumPadding,
    "JDtext-blink": blink,
    "visibility-none": props.hidden,
    ...JDmbClass(mb),
    ...JDmrClass(mr),
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

  if (mode === "iconButton") {
    return (
      <button
        {...props}
        type={type}
        disabled={disabled}
        className={`JDbtn JDwaves-effect ${classes}`}
        onClick={handleClickButton}
        onKeyPress={handleKeyPress}
        data-tip={tooltip ? true : dataTip}
        data-for={tooltip ? `btnTooltip${newId}` : dataFor}
      >
        <div>
          <JDIcon {...iconProp!} />
        </div>
        {label && (
          <JDtypho className="JDbtn--iconButton__label" size="tiny">
            {label}
          </JDtypho>
        )}
      </button>
    );
  }

  return (
    <Fragment>
      <button
        {...props}
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
