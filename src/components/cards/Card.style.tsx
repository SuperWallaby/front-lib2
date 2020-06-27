import styled, { css } from "styled-components";
import { ICardProps } from "./Card";
import { shadow, JDcommon } from "../../style/mixin";
import { device } from "../../style/shared";
import { textFn } from "../align/Align.styles";

export interface ICardStyleProps extends ICardProps { }

export const StyledCardBadges = styled.div`
    position: absolute;
    top: 0;
    right: ${({ theme }) => theme.cardPadding};
    display: flex;
`;

// 아이콘도 같이 바꾸어야 할듯
// 가장 근본적인 컴포넌트 부터 하나씩
export const StyledCard = styled.div<ICardStyleProps>`
  ${(prop) => {
        const { theme, align, selected } = prop;
        const {
            cardPadding,
            blackColor,
            cardRadius,
            cardBg,
            cardShadow,
            cardPaddingMd,
            primaryColor,
            cardHoverBg,
            hover
        } = theme;

        return css`
            ${JDcommon(prop, theme)}
            color: ${blackColor};
            position: relative;
            padding: ${cardPadding};
            text-align: left;
            border-radius: ${cardRadius};
            background-color: ${cardBg};
            ${shadow(cardShadow)}

            ${textFn(align)}

            @media ${device.TABLET} {
                padding: ${cardPaddingMd};
            }

            &__badges {

            }
        
        
            ${selected && css`{
                border: 1px solid ${primaryColor};
            }`}

            ${hover && css`&:hover {
                background-color: ${cardHoverBg};
                cursor: pointer;
            
                .JDcard__badges {
                    position: absolute;
                    top: 0;
                    right: ${cardPadding};
            
                    .JDbadge {
                        &:before {
                            border-color: ${cardHoverBg};
                        }
                    }
                }
            }`}
        
            .JDbtn {
                margin-bottom: 0;
            }
        
            & > *:last-child {
                margin-bottom: 0;
            }
        
            // drragable 을 위해서
            & > * {
            cursor: auto;
        }
    `;
    }}
`;
