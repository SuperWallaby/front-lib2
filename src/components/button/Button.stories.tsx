import React from "react";
import {withKnobs, text, boolean, select} from "@storybook/addon-knobs";
import Button from "./Button";
import MDX from "./button.mdx";
import JDcontainer from "../container/Container";
import Align from "../align/Align";

export default {
  title: "Button",
  component: () => <Button />,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
    docs: {
      page: MDX,
    },
  },
};

export const standard = () => {
  const options = {
    Primary: "primary",
    Secondary: "point",
    error: "error",
  };

  return (
    <JDcontainer verticalPadding>
      <h3>예시</h3>

      <Align>
        <Button color="primary" label={"primary"} />
        <Button color="point" label={"point"} />
        <Button color="grey4" label={"grey4"} />
        <Button color="grey3" label={"grey3"} />
        <Button color="grey2" label={"grey2"} />
        <Button color="grey1" label={"grey1"} />
        <Button color="positive" label={"positive"} />
        <Button color="error" label={"error"} />
      </Align>
      <Align>
        <Button
          onClick={() => {
            document
              .getElementById("root")!
              .style.setProperty("--primary-color", "#000");
          }}
          mode={"flat"}
          label={"default"}
        />

        <Button mode={"flat"} color="primary" label={"primary"} />
        <Button mode={"flat"} color="point" label={"point"} />
        <Button mode={"flat"} color="grey4" label={"grey4"} />
        <Button mode={"flat"} color="grey3" label={"grey3"} />
        <Button mode={"flat"} color="grey2" label={"grey2"} />
        <Button mode={"flat"} color="grey1" label={"grey1"} />
        <Button mode={"flat"} color="positive" label={"positive"} />
        <Button mode={"flat"} color="error" label={"error"} />
      </Align>
      <Align>
        <Button mode={"border"} color="primary" label={"border"} />
        <Button mode={"border"} color="point" label={"border"} />
        <Button mode={"border"} color="error" label={"border"} />
        <Button mode={"border"} label={"border"} />
        <Button mode={"border"} label={"border"} />
      </Align>
      <Align>
        <Button disabled label={"border"} />
        <Button br={2} label={"round"} />
        <Button padding={4} label={"padding"} />
        <Button
          iconProp={{
            icon: "addCircle",
          }}
          label={"icon"}
        />
      </Align>
      <Align>
        <Button size="large" label="large" />
        <Button label="long" size="long" />
        <Button label="longLarge" size="longLarge" />
        <Button label={"noraml"} />
        <Button label="small" size="small" />
      </Align>
      <h3>컨트롤</h3>
      <Button
        mode={
          select(
            "mode",
            {falt: "flat", border: "border", normal: "normal"},
            "normal"
          ) as any
        }
        br={select("br", {round: "round", normal: "normal"}, "normal") as any}
        size={select(
          "size",
          {
            small: "small",
            large: "large",
            normal: undefined,
            long: "long",
          },
          undefined
        )}
        pulse={boolean("pulse", false)}
        blink={boolean("blink", false)}
        color={(select("color", options, "primary") as any) || undefined}
        disabled={boolean("disabled", false)}
        label={text("label", "example")}
      />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
