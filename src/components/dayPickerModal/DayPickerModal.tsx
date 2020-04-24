import React from "react";
import { IUseModal } from "../../hooks/hook";
import JDmodal from "../modal/Modal";
import JDdayPicker, { IJDdayPickerProps } from "..//dayPicker/DayPicker";

interface Iprops extends IJDdayPickerProps {
  autoClose?: boolean;
  modalHook: IUseModal;
  callBackChangeDate?: (from?: Date | null, to?: Date | null) => void;
}

const DayPickerModal: React.FC<Iprops> = ({
  modalHook,
  from,
  to,
  autoClose,
  callBackChangeDate,
  ...props
}) => {
  const handleChangeDate = () => {
    callBackChangeDate && callBackChangeDate(from, to);
    if (from && to && autoClose) {
      setTimeout(() => {
        modalHook.closeModal();
      }, 200);
    }
  };

  return (
    <JDmodal className="DayPickerModal" {...modalHook}>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <JDdayPicker
          from={from}
          to={to}
          onChangeDate={handleChangeDate}
          {...props}
        />
      </div>
    </JDmodal>
  );
};

export default DayPickerModal;
