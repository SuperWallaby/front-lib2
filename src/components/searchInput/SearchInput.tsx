import classNames from "classnames";
import React, { useRef, useState } from "react";
import { InputText, IInputTextCutsomProp } from "../InputText/InputText";
import DataModal, { IDateModalProps } from "./DataModal";
import $ from "jquery";
import { JDatomExtentionSet } from "../../types/interface";
import { JDatomClasses } from "../../utils/utils";

export interface IJDsearchInputProp extends IDateModalProps, JDatomExtentionSet {
  searchValue: string;
  onSearchChange: (v: any) => void;
  inputProp?: IInputTextCutsomProp & React.AllHTMLAttributes<HTMLInputElement>;
  loading?: boolean;
  maxModalBodyHeight?: number;
  // 미구현
  filterBySearch?: boolean;
  sortBySmiliarity?: boolean;
  focuseOutAfterSelect?: boolean;
}

// 이 컴포넌트는 검색하여 리스트를 보여주는것을 목적으로 합니다.

export const SearchInput: React.FC<IJDsearchInputProp> = ({
  dataList,
  onSearchChange,
  searchValue,
  onSelectData,
  className,
  inputProp,
  loading,
  head,
  foot,
  langs,
  maxModalBodyHeight = 300,
  focuseOutAfterSelect,
  ...prop
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const ulRef = useRef<HTMLDivElement>(null);
  const classes = classNames("JDsearchInput", className, {
    ...JDatomClasses(prop)
  });

  const autoScrollList = (target: HTMLElement) => {
    const height = $(target).height() || 0;
    $(target)
      .parent()
      .scrollTop(target.offsetTop - height);
  };

  const addClass = (target: JQuery<HTMLDivElement>) => {
    if (!target.get(0)) return;
    target.addClass("dataModal__li--selected");
    autoScrollList(target.get(0));
  };

  // Handler - input : onKeyPress
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!ulRef?.current?.children) return;

    // CASE: 엔터를 쳤을경우에
    if (e.key === "Enter") {
      e.preventDefault();
      // 키보드에 의해서 선택된것 또는 그런게없다면 완벽하게 일치하는것을 찾음
      const selectedNode = $(ulRef.current).find(".dataModal__li--selected");

      if (selectedNode) {
        const id = selectedNode.attr("id");
        const targetData = dataList?.find((d) => d.id === id);
        if (targetData) onSelectData(targetData);
      }
    }

    // ⌨️ 키보드 위아래로 움직일경우에 노드 선택
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const selectClass = "dataModal__li--selected";
      const selectedNodes = $(ulRef.current).children("." + selectClass);
      const selectedNode = selectedNodes[0];
      selectedNodes.removeClass(selectClass);
      // CASE: 선택되면
      if (selectedNode) {
        // active select
        if (e.key === "ArrowUp") {
          const target = $(selectedNode).prev();
          addClass(target);
        } else {
          const target = $(selectedNode).next();
          addClass(target);
        }
      } else if (e.key === "ArrowDown") {
        ulRef.current.children[0].classList.add("dataModal__li--selected");
      }
    }
  };

  return (
    <div className={classes}>
      <InputText
        {...prop}
        onKeyDown={handleOnKeyPress}
        onBlur={() => {
          setModalVisible(false);
        }}
        onFocus={() => {
          setModalVisible(true);
        }}
        value={searchValue}
        OnChange={onSearchChange}
        icon="magnifier"
        {...inputProp}
      />

      <DataModal
        className={modalVisible ? "dataModal--visible" : undefined}
        ref={ulRef}
        maxModalBodyHeight={maxModalBodyHeight}
        onSelectData={onSelectData}
        langs={langs}
        foot={foot}
        head={head}
        dataList={dataList}
        value={searchValue}
      />
    </div>
  );
};

export default SearchInput;
