import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import DayPicker from "./DayPicker";
import "../../scss/components/card/Card.scss";
import { useDayPicker } from "../../hooks/hook";

export default {
  title: "DayPicker",
  component: () => {
    const dayPickerHook = useDayPicker(null, null);

    return <DayPicker {...dayPickerHook} />;
  },
  decorators: [withKnobs]
};

export const standard = () => {
  const dayPickerHook = useDayPicker(null, null);
  return <DayPicker {...dayPickerHook} />;
};

standard.story = {
  name: "standard"
};
