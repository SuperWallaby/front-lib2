import React from 'react';
import { TableProps, RowRenderProps } from 'react-table';
interface JDrowInfo<T> extends RowRenderProps {
    original: T;
}
export interface JDcolumn<T> {
    [key: string]: any;
    accessor?: keyof T;
    Cell?: (props: JDrowInfo<T>) => string | JSX.Element | JSX.Element[] | void;
}
declare type TLang = {
    previousText: string;
    nextText: string;
    loadingText: string;
    noDataText: string;
    pageText: string;
    rowsText: string;
};
export interface IJDTableProps<D = any> extends TableProps<D> {
    langs?: TLang;
    align?: 'center';
    inClassNames?: string;
    isCheckable?: boolean;
    marginAtuo?: boolean;
    visibleOver?: boolean;
}
declare const JDtable: React.FC<IJDTableProps>;
export default JDtable;
export declare const ReactTableDefault: TableProps<any, any> & {
    defaultPageSize: number;
    minRows: number;
    showPagination: boolean;
    sortable: boolean;
    resizable: boolean;
    ofText: string;
};
