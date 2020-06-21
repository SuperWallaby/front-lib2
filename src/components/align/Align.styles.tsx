import styled, {css} from "styled-components";
import {IJDalignProp, TFlex, TGrid, TCol} from "./Align";
import {TextAlign} from "../../types/enum";
import {JDcommon, gridWidth} from "../../style/mixin";
import {device} from "../../style/shared";
export interface IAlignProp extends IJDalignProp {}

const flexFn = (flex: true | TFlex | undefined) => {
  const base = "display: flex;";
  console.log("flex");
  console.log(flex);

  if (flex === true)
    return `
    ${base}
    `;
  else if (!flex) return ``;

  const {around, between, center, column, end, grow, vCenter, wrap} = flex;

  return `
    ${base}
      ${end &&
        `
          justify-content: flex-end;
        `}
      ${center &&
        `
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      ${between &&
        `
          display: flex;
          justify-content: space-between;
        `}
      ${around &&
        `
          display: flex;
          justify-content: space-around;
        `}
      ${wrap &&
        `
          flex-wrap: wrap;
        `}
      ${column &&
        `
          display: flex;
          flex-direction: column;
        `}
      ${grow &&
        `
          & > div {
            flex: 1 1;
          }
        `}
      ${vCenter &&
        `
          display: flex;
          line-height: 1;
          align-items: center;
        `};
  `;
};

const colFn = (col: TCol | true | undefined) => {
  if (col) {
    const {full, lg, md, sm, wlg} = col as any;

    return `
      &:first-child {
        margin-left: 0rem;
      }
      &:last-child {
        margin-left: 0rem;
      }
      ${full &&
        `
          width: ${gridWidth(full)};
        `}
      ${wlg &&
        `
          @media ${device.DESKTOP} {
            width: ${gridWidth(wlg)};
          }
        `}
      ${lg &&
        `
          @media ${device.TABLET} {
            width: ${gridWidth(lg)};
          }
        `}
      ${md &&
        `
          @media ${device.PHABLET} {
            width: ${gridWidth(md)};
          }
        `}
      ${sm &&
        `
          @media ${device.MOBILE} {
            width: ${gridWidth(sm)};
          }
        `}
    `;
  }

  return css``;
};

const gridFn = (grid: TGrid | true | undefined) => {
  if (grid)
    return `
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      ${
        // @ts-ignore
        grid.grow &&
          `
          & * {
            flex: 1;
          }
        `
      }
    `;

  return ``;
};

const textFn = (text?: TextAlign) => {
  switch (text) {
    case "center":
      return `
        text-align: center;
      `;
    case "left":
      return `
        text-align: left;
      `;
    case "right":
      return `
        text-align: right;
      `;
    default:
      return "";
  }
};

// 아이콘도 같이 바꾸어야 할듯
// 가장 근본적인 컴포넌트 부터 하나씩
export const StyledAlign: React.FC<IJDalignProp> = styled.div<IAlignProp>`
  ${(prop) => {
    const {theme, flex, grid, col, text} = prop;
    const {} = theme;

    return css`
      ${JDcommon(prop, theme)}
      ${colFn(col)}
      ${gridFn(grid)}
      ${textFn(text)}
      ${flexFn(flex)}
    `;
  }}
`;

export default StyledAlign;
