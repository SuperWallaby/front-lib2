import React from "react";
import { IUseModal } from "../../hooks/hook";
import { IJDdayPickerProps } from "..//dayPicker/DayPicker";
interface Iprops extends IJDdayPickerProps {
    autoClose?: boolean;
    modalHook: IUseModal;
    callBackChangeDate?: (from?: Date | null, to?: Date | null) => void;
}
declare const DayPickerModal: React.FC<Iprops>;
export default DayPickerModal;
