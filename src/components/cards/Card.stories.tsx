import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Card from "./Card";
import "../../scss/all.scss";
import JDcontainer from "../container/Container";

export default {
  title: "Card",
  component: () => <Card />,
  decorators: [withKnobs]
};

export const standard = () => {
  return (
    <JDcontainer verticalPadding>
      <Card>Card Content</Card>
    </JDcontainer>
  );
};

standard.story = {
  name: "standard"
};
