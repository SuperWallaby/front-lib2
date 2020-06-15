import React, {useState} from "react";
import classNames from "classnames";
import Button, {IButtonProps} from "../button/Button";
import {JDatomExtentionSet, TElements, IDiv} from "../../types/interface";
import {JDatomClasses} from "../../utils/autoClasses";
import styled, {css} from "styled-components";
interface IStyleProps {
  /** 모양결정 */
  mode?: "gather";
  /** 전체 투글러와 함께 작동 */
  withAllToogler?: boolean;
  /** 흘러내림 설정 */
  noWrap?: boolean;
  /** 모든 버턴 공통 설정 */
  btnProps?: IButtonProps;
}

export interface IRadiosOps extends IButtonProps {
  label: TElements;
  value: string;
}

interface IProps extends JDatomExtentionSet, IDiv, IStyleProps {
  /** 버튼 라벨과 값의 쌍 */
  options: IRadiosOps[];
  /** 선택된 값들 */
  selectedValues: string[];
  /** 선택된 값이 변할 때 */
  onChangeSelect: (value: string[]) => void;
  /** 모양결정 */
  mode?: "gather";
  /** 선택 반전 행동 패턴 정의 */
  reversal?: "onlyFull" | "always";
  /** 선택 할수 있는 값은 하나로 고정 */
  only?: boolean;
  /** 전체 투글러와 함께 작동 */
  withAllToogler?: boolean;
  /** 전체 투글러 라벨*/
  withAllTooglerLabel?: string;
  /** DEFRECATED*/
  defaultAllToogle?: boolean;
  /** 흘러내림 설정 */
  noWrap?: boolean;
  /** 모든 버턴 공통 설정 */
  btnProps?: IButtonProps;
}

const RadioButton = styled(Button)``;

const RadioButtonsInner = styled.div``;

const RadioButtons = styled.div<IStyleProps>`
  ${(prop) => {
    const {theme, mode, btnProps} = prop;
    const {standardMarginBottom, greyOpacity1, outborderColor, br1} = theme;
    const isBorder = btnProps?.mode === "border";
    const isGather = mode === "gather";
    return css`
      max-width: 100%;
      margin-bottom: ${standardMarginBottom};
      ${() => {
        if (isGather) {
          return css`
            width: max-content;      
            ${RadioButton} {
            border-right: 1px solid ${greyOpacity1};
            eborder-radius: 0;
            margin: 0;
            ${isBorder &&
              css`
                &:not(:last-child) {
                  border-right: none;
                }
                &:hover {
                  border-color: ${outborderColor};
                }
              `}
            &:nth-child(2) {
              border-radius: ${br1} 0px 0px ${br1};
            }
            &:last-child {
              border-right: none;
              border-radius: 0px ${br1} ${br1} 0px;
            }
          `;
        } else return "";
      }}
    `;
  }}
`;

export const JDRadioBox: React.FC<IProps> = ({
  selectedValues,
  defaultAllToogle = false,
  options,
  only,
  mode,
  onChangeSelect,
  withAllToogler,
  withAllTooglerLabel,
  reversal,
  className,
  noWrap,
  btnProps,
  ...props
}) => {
  const [allToogled, setAllToggle] = useState(defaultAllToogle);

  const handleRadioBoxAllChange = () => {
    const allValues = options.map((op) => op.value);
    setAllToggle(!allToogled);
    onChangeSelect(allToogled ? [] : allValues);
  };

  const handleRadioBoxChange = (text: string) => {
    const selectedTagrgetIndex = selectedValues.findIndex(
      (inInValue) => inInValue === text
    );
    const isUnSelectedValue = selectedTagrgetIndex === -1;
    const isFull = selectedValues.length === options.length;

    if (reversal === "always") selectedValues = [];
    else if (reversal === "onlyFull" && isFull) selectedValues = [];

    if (isUnSelectedValue) selectedValues.push(text);
    else selectedValues.splice(selectedTagrgetIndex, 1);

    if (only) selectedValues = [text];

    onChangeSelect(selectedValues.slice());
  };

  const classes = classNames("radioBox", className, {
    "radioBox--withAllToogler": withAllToogler,
    // 'radioBox--noWrap': noWrap,
    // 'radioBox--gather': mode === 'gather',
    ...JDatomClasses(props),
  });

  const innerClasses = classNames("radioBox__inner", undefined, {
    "radioBox__inner--noWrap": noWrap,
  });

  const styles = {
    withAllToogler,
    mode,
    noWrap,
  };

  return (
    <RadioButtons className={`radioBox ${classes}`} {...styles}>
      <RadioButtonsInner className={innerClasses}>
        <RadioButton
          hide={!withAllToogler}
          toggle={allToogled}
          label={withAllTooglerLabel}
          onClick={handleRadioBoxAllChange}
          {...btnProps}
        />
        {options.map((op) => (
          <RadioButton
            key={op.value}
            toggle={selectedValues.includes(op.value)}
            onClick={() => handleRadioBoxChange(op.value)}
            {...btnProps}
            {...op}
          />
        ))}
      </RadioButtonsInner>
    </RadioButtons>
  );
};

const RadioBox = React.memo(JDRadioBox);
export default RadioBox;
