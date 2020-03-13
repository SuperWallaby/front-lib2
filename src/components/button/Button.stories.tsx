import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./Button";
import "../../scss/all.scss";

export default {
  title: "Button",
  component: () => <Button />,
  decorators: [withKnobs]
};

export const standard = () => {
  return <Button />;
};

standard.story = {
  name: "standard"
};
