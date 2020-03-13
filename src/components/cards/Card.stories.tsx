import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Card from "./Card";
import "../../scss/components/card/Card.scss";

export default {
  title: "Card",
  component: () => <Card />,
  decorators: [withKnobs]
};

export const standard = () => {
  return <Card />;
};

standard.story = {
  name: "standard"
};
