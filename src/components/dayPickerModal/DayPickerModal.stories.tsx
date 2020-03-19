import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import DayPickerModal from "./DayPickerModal";
import { useDayPicker } from "../../hooks/hook";
import { useModal } from "../..";

export default {
  title: "DayPickerModal",
  component: () => {
    const DayPickerModalHook = useModal(true);
    const DayPickerHook = useDayPicker(null, null);

    return <DayPickerModal modalHook={DayPickerModalHook} {...DayPickerHook} />;
  },
  decorators: [withKnobs]
};

export const standard = () => {
  const DayPickerModalHook = useModal(true);
  const DayPickerHook = useDayPicker(null, null);
  return <DayPickerModal {...DayPickerHook} modalHook={DayPickerModalHook} />;
};

standard.story = {
  name: "standard"
};
