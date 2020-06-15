import React, {Fragment} from "react";
import {IConProps} from "../icons/Icons";
import Preloader from "../preloader/Preloader";
import s4 from "../../utils/keyGen";
import Tooltip from "../tooltip/Tooltip";
import {JDColor} from "../../types/enum";
import {JDatomExtentionSet, TElements} from "../../types/interface";
import userTacking from "../../utils/userTracking";
import JDIcon from "../icons/Icons";
import {IconConifgProps} from "../icons/declation";
import JDtypho from "../typho/Typho";
import {StyledButton, StyledButtonContent} from "./Button.style";

const handleKeyPress = () => {};

type Tshape = "flat" | "normal" | "border" | "iconButton";

export interface IBtnIcon {
  /** 아이콘 방향 조정 default Right */
  iconDir?: "left" | "right";
}

interface IButtonConstum extends IBtnIcon {
  /** 사용 불가능함*/
  disabled?: boolean;
  /** 버튼 텍스트 */
  label?: string | TElements;
  /**  아이콘 PROP 들 */
  iconProp?: IConProps & IconConifgProps;
  /** 해당 PROP에 값을 넣으면 버튼에 툴팁을 생성합니다. */
  dataTip?: any;
  /** 툴팁 PROP 참고 */
  dataFor?: any;
  /** 버튼 라디우스 */
  br?: number;
  /** 버튼 패딩 */
  padding?: number;
  /** 버튼의 모양을 조절 */
  mode?: Tshape | Tshape[];
  /** 버튼의 크기를 조절 */
  size?: "tiny" | "small" | "large" | "long" | "longLarge";
  /** 해당 버튼은 float 속성을 지닙니다. */
  type?: "button" | "submit" | "reset" | undefined;
  /** 버튼 색상 */
  color?: JDColor | null;
  /** 해당 버튼은 펄스 효과를 가집니다. */
  pulse?: boolean;
  /** 해당 버튼은 깜빡임 효과를 가집니다. */
  blink?: boolean;
  /** 해당 버튼은 로딩 효과를 가집니다. */
  loading?: boolean;
  /** 해당 버튼의 라운드를 조절합니다. */
  round?: number;
  /** 해당 PROP 를 전달하여 툴팁을 생성합니다. */
  tooltip?: string;
  /** 해당 버튼의 동작을 A링크처럼 처리합니다. */
  hrefOpen?: string;
  /** 해당 버튼을 Redirect 하는 용도로 사용합니다. */
  redirect?: string;
  /** 음수 마진으로 패딩값을 소모시킵니다. 패딩 곂침을 해야할때 유용합니다. */
  cunsumPadding?: boolean;
  // ClassAdd
  toggle?: boolean;
}

export interface IButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    JDatomExtentionSet,
    IButtonConstum {
  color?: JDColor;
}

export const Button: React.FC<IButtonProps> = ({
  disabled,
  label,
  iconProp,
  tooltip,
  onClick,
  dataTip,
  dataFor,
  mode = "normal",
  cunsumPadding,
  type,
  color,
  padding,
  redirect,
  pulse,
  blink,
  loading,
  round,
  children,
  className,
  size,
  hrefOpen,
  toggle,
  iconDir,
  ...props
}: IButtonProps) => {
  const handleClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    hrefOpen && window.open(hrefOpen);
    if (redirect) document.location.href = redirect;
    if (typeof label === "string") userTacking(label);

    onClick && onClick(event);
  };

  const withIcon = !loading && iconProp;

  let newId = "";
  let tooltipObj = {
    "data-tip": dataTip,
    "data-for": dataFor,
  };

  if (tooltip) {
    newId = s4();
    tooltipObj = {
      "data-for": true,
      "data-tip": `btnTooltip${newId}`,
    };
  }

  if (mode?.includes("iconButton")) {
    return (
      <StyledButton
        {...props}
        type={type}
        disabled={disabled}
        className={`JDbtn JDwaves-effect`}
        onClick={handleClickButton}
        onKeyPress={handleKeyPress}
        {...tooltipObj}
      >
        <div>
          <JDIcon {...iconProp!} />
        </div>
        <JDtypho
          hide={Boolean(label)}
          className="JDbtn--iconButton__label"
          size="tiny"
        >
          {label}
        </JDtypho>
      </StyledButton>
    );
  }

  return (
    <Fragment>
      <StyledButton
        {...props}
        mode={mode}
        color={color}
        type={type}
        disabled={disabled}
        className={`JDbtn JDwaves-effect`}
        onClick={handleClickButton}
        onKeyPress={handleKeyPress}
        data-tip={tooltip ? true : dataTip}
        data-for={tooltip ? `btnTooltip${newId}` : dataFor}
      >
        <StyledButtonContent>
          {children}
          <Preloader loading={loading} />
          {label}
          {withIcon && <JDIcon {...iconProp!} />}
        </StyledButtonContent>
      </StyledButton>
      {tooltip && (
        <Tooltip type="dark" effect="solid" id={`btnTooltip${newId}`}>
          <span>{tooltip}</span>
        </Tooltip>
      )}
    </Fragment>
  );
};

export const ButtonMemo = React.memo(Button);
export default Button;
