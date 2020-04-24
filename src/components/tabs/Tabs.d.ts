import React from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import { TMarginSize } from "../../types/enum";
interface IProps {
    styleMode?: "button";
    className?: string;
    defaultFocus?: boolean;
    defaultIndex?: number;
    tabsAlign?: "spaceAround" | "spaceBetween";
    disabledTabClassName?: string;
    domRef?: (node?: HTMLElement) => void;
    forceRenderTabPanel?: boolean;
    onSelect?: (index: number, last: number, event: Event) => boolean | void;
    selectedIndex?: number;
    selectedTabClassName?: string;
    selectedTabPanelClassName?: string;
    mb?: TMarginSize;
    breakTabs?: boolean;
}
declare const JDtabs: React.FC<IProps>;
export { Tab, JDtabs, TabList, TabPanel };
