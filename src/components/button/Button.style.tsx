import styled, {css} from "styled-components";
import {IButtonProps, IBtnIcon} from "./Button";
import {shadow3, shadow2} from "../../style/shared";
import {space, round, color as colorMixin} from "../../style/mixin";
import Color from "color";

export interface IButtonStyleProps extends IButtonProps {}

export const StyledButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const StyledButtonIconWrap = styled.i<IBtnIcon>`
  ${(prop: any) => {
    const {theme, iconDir} = prop;
    const {buttonsIconMargin} = theme;

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
    const {theme, padding, mode, round: radius, size, color} = prop;
    const {
      buttonRadius,
      buttonHeight,
      buttonPadding,
      buttonLetterSpacing,
      buttonLargeHeight,
      buttonLargePadding,
      buttonLargeFontSize,
      buttonLargeIconFontSize,
      outborderColor,
      buttonDisabledBackground,
      buttonDisabledColor,
      buttonTinyFontSize,
      buttonsTinyHeight,
      buttonsTinyIconMargin,
      typhoTiny,
      buttonColor,
      buttonSmallFontSize,
      buttonsSmallIconMargin,
      buttonBgColor,
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
      border-radius: ${buttonRadius};
      display: inline-block;
      height: ${buttonHeight};
      line-height: 100%;
      outline: 0;
      padding: ${buttonPadding};
      text-transform: uppercase;
      vertical-align: middle;
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
      color: ${isLightBg ? buttonColor : "#fff"};
      text-align: center;
      letter-spacing: ${buttonLetterSpacing};
      box-shadow: ${shadow3};
      transition: background-color 0.2s ease-out;
      cursor: pointer;
      border: none;
      font-weight: 300;
      line-height: 0;
      background-color: ${bgColor};
      
      &:hover {
        box-shadow: ${shadow2};
        background-color: ${bgColorDark};
      }


      &:disabled {
        pointer-events: none;
        background-color: ${buttonDisabledBackground};
        box-shadow: none;
        color: ${buttonDisabledColor};
        cursor: default;
    
        * {
          pointer-events: none;
        }
      }
      

      ${padding && `padding: 0 ${space(padding)}`}

      ${radius && `borderRadius: 0 ${round(radius)}`}

      ${size === "large" &&
        css`
          height: ${buttonLargeHeight};
          line-height: ${buttonLargeHeight};
          padding: ${buttonLargePadding};
          font-size: ${buttonLargeFontSize};

          &.JDbtn--round {
            border-radius: ${buttonLargeHeight};
          }

          .JDbtn__icon {
            font-size: ${buttonLargeIconFontSize};
          }
        `}

      ${size === "long" &&
        css`
          width: 100%;
          .JDbtn__icon {
            float: none;
          }
        `}

      ${size === "long" &&
        css`
          width: 100%;
          .JDbtn__icon {
            float: none;
          }
        `}
          
      ${size === "small" &&
        css`
          font-size: ${buttonTinyFontSize};
          height: ${buttonsTinyHeight};
          .JDbtn__icon {
            margin-left: ${buttonsTinyIconMargin};
          }
        `}

      ${size === "tiny" &&
        css`
          font-size: ${typhoTiny};
          height: ${space(3)};
          padding: 0 ${space(1)};
        `}

      ${size === "small" &&
        css`
          font-size: ${buttonSmallFontSize};

          .JDbtn__icon {
            margin-left: ${buttonsSmallIconMargin};
          }
        `}

      ${size === "small" &&
        css`
          font-size: ${buttonSmallFontSize};

          .JDbtn__icon {
            margin-left: ${buttonsSmallIconMargin};
          }
        `}
      
      ${mode === "flat" &&
        css`
          box-shadow: none;
          cursor: pointer;

          &:disabled {
            cursor: default;
          }

          &:hover {
            box-shadow: none;
          }
        `}
        
      ${mode === "border" &&
        css`
          border: 1px solid;
          box-shadow: none;
          border-color: ${outborderColor};
          &:hover {
            border-color: ${Color(outborderColor)
              .darken(0.2)
              .rgb()
              .string()};
          }
        `}
    `;
  }}
`;
