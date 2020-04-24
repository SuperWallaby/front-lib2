import React from "react";
import { IDiv, TElements, JDatomExtentionSet } from "../../types/interface";
import "./BaseHeader.scss";
interface Iprops extends IDiv, JDatomExtentionSet {
    titleElement: TElements;
    desc?: TElements;
    headerRgiht?: TElements;
}
declare const BaseHeader: React.FC<Iprops>;
export default BaseHeader;
