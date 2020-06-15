import styled, {css} from "styled-components";
import {color as mixinColor, margin, iconSize} from "../../style/mixin";
import {IConProps} from "./Icons";
import {IconConifgProps} from "./declation";
import {HTMLAttributes} from "react";
import {JDatomExtentionSet} from "../../types/interface";

export interface IButtonStyleProps extends IConProps {}

export const StyledIconSvg = styled.svg<HTMLAttributes<SVGElement>>`
  ${(prop) => {
    const {theme} = prop;
    const {} = theme;
    return css`
      display: inline-flex;
      align-self: center;
      position: relative;
      text-decoration: inherit;

      & path,
      & polygon,
      & rect,
      & line,
      & circle {
        fill: currentColor;
      }
    `;
  }}
`;

export const StyledIconLabel = styled.span`
  ${(prop) => {
    const {theme} = prop;
    const {typhoSuperTiny, typhoNormal} = theme;

    return css`
      font-size: ${typhoSuperTiny};
      width: 100%;
      color: black;

      &--large {
        font-size: ${typhoNormal};
      }
    `;
  }}
`;

export const StyledIconWrap = styled.span<IconConifgProps & JDatomExtentionSet>`
  ${(prop) => {
    const {theme, selected, color, mb, mr, size} = prop;
    const {primaryColorLight, primaryColorDark} = theme;

    console.log("iconSize");
    console.log(iconSize(theme, size));

    return css`
      color: ${mixinColor(theme, color)};
      margin-bottom: ${margin(theme, mb)};
      margin-right: ${margin(theme, mr)};

      ${StyledIconSvg} {
        width: ${iconSize(theme, size)};
        height: ${iconSize(theme, size)};
      }

      ${selected &&
        css`
          ${StyledIconSvg} {
            color: ${primaryColorLight};
            &:hover {
              color: ${primaryColorDark};
            }
          }
        `};
    `;
  }}
`;
