import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Button from "./Button";
import MDX from "./button.mdx";
import "../../scss/all.scss";
import JDcontainer from "../container/Container";

export default {
  title: "Button",
  component: () => <Button />,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
    docs: {
      page: MDX
    }
  }
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
        mode={
          select(
            "mode",
            { falt: "flat", border: "border", normal: "normal" },
            "normal"
          ) as any
        }
        pulse={boolean("pulse", false)}
        blink={boolean("blink", false)}
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
