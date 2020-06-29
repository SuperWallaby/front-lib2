import styled, { css } from "styled-components";
import { IButtonProps, IBtnIcon } from "./Button";
import { space, round, color as colorMixin, JDcommon } from "../../style/mixin";
import Color from "color";

export interface IButtonStyleProps extends IButtonProps { }

export const StyledButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const StyledButtonIconWrap = styled.i<IBtnIcon>`
  ${(prop: any) => {
    const { theme, iconDir } = prop;
    const { buttonsIconMargin } = theme;

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;

      ${iconDir === "left" &&
      css`
           {
            float: left;
            order: -1;
            margin-left: 0;
            margin-right: ${buttonsIconMargin};
          }
        `}
    `;
  }}
`;

// 아이콘도 같이 바꾸어야 할듯
// 가장 근본적인 컴포넌트 부터 하나씩
export const StyledButton = styled.button<IButtonStyleProps>`
  ${(prop) => {
    const { theme, padding, mode, round: radius, size, color } = prop;
    const {
    } = theme;

    const bgColor = colorMixin(theme, color) || buttonBgColor;
    const bgColorDark = bgColor
      ? Color(bgColor)
        .darken(0.2)
        .rgb()
        .string()
      : "null";
    const isLightBg = Color(bgColor).isLight();

    return css`
    .JDinput-wrap {
        position: relative;
        font-size: 0;
        text-align: left;
      
        &--fullHeight {
          height: 100%;
        }
      
        &--fullWidth {
          width: 100%;
        }
      
        &--round {
          .JDinput {
            border-radius: $standard-round-border-radius;
          }
          &.JDinput-wrap--big {
            .JDinput {
              border: 2px solid $html-color;
              border-radius: $input-big-height;
            }
          }
        }
        &--big {
          height: $input-big-height;
          .JDinput {
            height: $input-big-height;
            padding: 0 $standard-large-space;
          }
        }
      }
      
      //  😄 인풋라인에 아이콘 맞춰줌
      .JDinput-iconWrap {
        position: absolute;
        right: $input-side-padding;
        height: 100%;
        display: flex;
        top: 0;
        align-items: center;
      
        .JDicon__svg {
          top: unset;
        }
      }
      
      .JDinput {
        margin: 0;
        border-radius: $br1;
        padding: $input-padding;
        background-color: transparent;
        border: 1px solid $outborder-color;
        border-bottom: $input-border-bottom;
        outline: none;
        height: $input-height;
        width: 100%;
        font-size: $input-font-size;
        box-shadow: none;
        box-sizing: border-box;
        transition: $input-transition;
      
        &__falseMessage {
          display: flex;
          font-size: 1rem;
          color: $error-color;
        }
      
        &__inside-wrap {
          position: relative;
          height: $input-height;
        }
      
        &--greyBg {
          background-color: $grey-level1;
        }
      
        &--underline {
          border: none;
          border-bottom: 1px solid $outborder-color;
        }
      
        &--overfloweEllipsis {
          text-overflow: ellipsis;
        }
      
        &--center {
          text-align: center;
        }
      
        //아래에있는 라벨을 위로 끌어올립니다
        & + .JDinput_label,
        & + .JDtextarea_label {
          position: absolute;
          font-size: $label-font-size;
          color: $label-font-color;
          top: 0.1rem;
          left: 0;
        }
      
        &::placeholder {
          color: $placeholder-text-color;
        }
      
        // Disabled input style
        &:disabled {
          color: $input-disabled-color;
          border: $input-disabled-border;
        }
      
        // Disabled .JDinput_label style
        &:disabled + .JDinput_label {
          color: $input-disabled-color;
        }
      
        // Focused input style
        &:focus {
          & ~ .JDinput-iconWrap {
            color: $html-color;
          }
        }
        &:focus:not([readonly]) {
          @extend %input-focus-style;
        }
      
        // Focused .JDinput_label style
        &:focus:not([readonly]) + .JDinput_label {
          color: $label-font-color;
        }
      
        // Valid Input Style
        &--valid.JDinput:focus:not([readonly]) + .JDinput_label {
          color: $label-font-color;
        }
      
        // Custom Success Message
        &--valid:not([readonly]) + .JDinput_label:after,
        &--valid:focus:not([readonly]) + .JDinput_label:after {
          @extend %custom-success-message;
        }
      
        // Invalid Input Style
        &--invalid.JDinput:not([readonly]),
        &--invalid.JDinput:focus:not([readonly]) {
          @extend %invalid-input-style;
        }
      
        // Custom Error message
        &--invalid.JDinput + .JDinput_label:after,
        &--invalid.JDinput:focus + .JDinput_label:after {
          @extend %custom-error-message;
        }
      
        // Full width .JDinput_label when using validate for error messages
        &--validate.JDinput + .JDinput_label {
          width: 100%;
        }
      
        // Form Message Shared Styles
        & + .JDinput_label:after {
          @extend %input-after-style;
        }
      
        &--invalid.JDinput + .JDinput_label:after,
        &--valid.JDinput + .JDinput_label:after {
          display: none;
        }
      
        &--invalid.JDinput.JDinput--allWaysShowValidMessage + .JDinput_label:after,
        &--valid.JDinput.JDinput--allWaysShowValidMessage + .JDinput_label:after {
          display: block;
        }
      
        &--withIcon {
          padding-right: ($input-side-padding * 2) + $icon-size-normal !important;
          text-overflow: ellipsis;
        }
      }
    `;
  }}
`;
