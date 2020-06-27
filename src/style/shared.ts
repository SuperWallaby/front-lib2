import { WindowSizeNumber } from "../types/enum";
import { css } from "styled-components";

export const shadow7 =
  "0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)";
export const shadow6 =
  "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2)";
export const shadow5 =
  "0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)";
export const shadow4 =
  "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)";
export const shadow3 =
  "0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
export const shadow2 =
  "0 1px 4px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
export const shadow1 =
  "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 2px 1px -1px rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)";

export const lastMargin = css`
  &:last-child {
    margin-right: 0;
  }
`;

export const device = {
  MOBILE: `(max-width: ${WindowSizeNumber.MOBILE})`,
  PHABLET: `(max-width: ${WindowSizeNumber.PHABLET})`,
  TABLET: `(max-width: ${WindowSizeNumber.TABLET})`,
  DESKTOP: `(max-width: ${WindowSizeNumber.DESKTOP})`,
  DESKTOPHD: `(max-width: ${WindowSizeNumber.DESKTOPHD})`,
};
