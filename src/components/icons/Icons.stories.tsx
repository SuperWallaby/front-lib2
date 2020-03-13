import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Icon from "./Icons";
import "../../scss/all.scss";

export default {
  title: "Icon",
  component: () => <Icon icon={"close"} />,
  decorators: [withKnobs]
};

export const standard = () => {
  return <Icon icon={"close"} />;
};

standard.story = {
  name: "standard"
};
