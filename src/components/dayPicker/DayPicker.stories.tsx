import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import DayPicker, { TDayPickerDot } from "./DayPicker";
import "../../scss/all.scss";
import { useDayPicker } from "../../hooks/hook";
import JDcontainer from "../container/Container";
import DoubleInputRange from "./component/inputComponent/DoubleInputRange";

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
  const dots: TDayPickerDot[] = [
    {
      color: "error",
      date: new Date()
    }
  ];

  return (
    <JDcontainer verticalPadding>
      <DoubleInputRange dayPickerHook={dayPickerHook} />
      <DayPicker dots={dots} {...dayPickerHook} />
      <DayPicker mode="input" {...dayPickerHook} />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard"
};
