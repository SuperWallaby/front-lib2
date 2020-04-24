import React from "react";
import { TElements, IDiv } from "../../types/interface";
export interface ISearchViewData {
    id: string;
    title: string;
    describe?: string;
    tag?: string;
}
interface Ilangs {
    noMatchedMessage: (text: string) => TElements;
}
export interface IDateModalProps extends IDiv {
    value?: string;
    dataList?: Array<ISearchViewData>;
    head?: TElements;
    langs?: Ilangs;
    maxModalBodyHeight?: number;
    foot?: TElements;
    onSelectData: (data: ISearchViewData) => any;
    loading?: boolean;
}
export declare const DataModal: React.ForwardRefExoticComponent<IDateModalProps & React.RefAttributes<HTMLDivElement>>;
export default DataModal;
