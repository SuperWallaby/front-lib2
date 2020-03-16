import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import InputText from "./InputText";
import "../../scss/components/InputText.scss";

export default {
  title: "InputText",
  component: () => <InputText />,
  decorators: [withKnobs]
};

export const standard = () => {
  return <InputText />;
};

standard.story = {
  name: "standard"
};
