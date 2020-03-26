import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Button from "./Button";
import "../../scss/all.scss";
import JDcontainer from "../container/Container";

export default {
  title: "Button",
  component: () => <Button />,
  decorators: [withKnobs]
};

export const standard = () => {
  const options = {
    Primary: "primary",
    Secondary: "point",
    error: "error"
  };
  return (
    <JDcontainer verticalPadding>
      <Button
        thema={(select("thema", options, "primary") as any) || undefined}
        disabled={boolean("disabled", false)}
        label={text("label", "example")}
      />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard"
};
