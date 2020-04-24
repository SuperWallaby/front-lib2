import React from "react";
import selectTableHOC, {
  SelectInputComponentProps,
  SelectTableAdditionalProps,
} from "react-table/lib/hoc/selectTable";
// SelectAllInputComponentProps,
import { IUseCheckBoxTable } from "../../hooks/hook";
import JDtable, { IJDTableProps } from "./Table";

// 작업중 셀렉트 테이블
interface ISCProp {
  onToogleRow: (key: string) => void;
}
// { checked, id, onToogleRow }
const SelectInputCompoent: React.FC<
  ISCProp & SelectInputComponentProps
> = () => {
  // const inId = id.replace('select-', '');
  // const onChange = (flag: boolean) => {
  // 	onToogleRow(inId);
  // };

  // checkBox
  return <div />;
};

// interface ISACProp {
// 	onToogleAllRow: () => void;
// 	selectAll: boolean;
// }

// const SelectAllInputComponent: React.FC<ISACProp & SelectAllInputComponentProps> = ({ selectAll, onToogleAllRow }) => (
// 	<CheckBox onChange={onToogleAllRow} checked={selectAll} />
// );

const JDSelectableJDtable: React.FC<
  IJDTableProps & SelectTableAdditionalProps & IUseCheckBoxTable
> = (prop) => {
  // const { selectAll, onToogleAllRow, onToogleRow } = prop;
  const SelectableJDtable = selectTableHOC(JDtable);

  return (
    <SelectableJDtable
      {...prop}
      SelectAllInputComponent={() => (
        // <SelectAllInputComponent onToogleAllRow={onToogleAllRow} selectAll={selectAll} {...prop} />
        <div />
      )}
      SelectInputComponent={(prop) => (
        <SelectInputCompoent onToogleRow={"" as any} {...prop} />
      )}
    />
  );
};

export { JDSelectableJDtable };
