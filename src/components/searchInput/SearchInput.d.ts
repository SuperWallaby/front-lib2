import React from "react";
import { IInputTextCutsomProp } from "../InputText/InputText";
import { IDateModalProps } from "./DataModal";
export interface IJDsearchInputProp extends IDateModalProps {
    searchValue: string;
    onSearchChange: (v: any) => void;
    inputProp?: IInputTextCutsomProp & React.AllHTMLAttributes<HTMLInputElement>;
    loading?: boolean;
    maxModalBodyHeight?: number;
    filterBySearch?: boolean;
    sortBySmiliarity?: boolean;
    focuseOutAfterSelect?: boolean;
}
export declare const SearchInput: React.FC<IJDsearchInputProp>;
export default SearchInput;
