import React from "react";
import { SelectTableAdditionalProps } from "react-table/lib/hoc/selectTable";
import { IUseCheckBoxTable } from "../../hooks/hook";
import { IJDTableProps } from "./Table";
declare const JDSelectableJDtable: React.FC<IJDTableProps & SelectTableAdditionalProps & IUseCheckBoxTable>;
export { JDSelectableJDtable };
