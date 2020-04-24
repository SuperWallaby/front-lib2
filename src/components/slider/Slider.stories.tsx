import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Slider, { Slide } from "./Slider";
import "../../scss/all.scss";
import Align from "../align/Align";
import JDcontainer from "../container/Container";

export default {
  title: "Slider",
  component: () => <Slider />,
  decorators: [withKnobs],
};

export const standard = () => {
  return (
    <JDcontainer verticalPadding>
      <Slider >
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>
          <Align
            flex={{
              center: true,
              vCenter: true,
            }}
            style={{
              background: "#eee",
              height: "100px",
            }}
          >
            3
          </Align>
        </Slide>
        <Slide>
          <Align
            flex={{
              center: true,
              vCenter: true,
            }}
            style={{
              background: "#eee",
              height: "100px",
            }}
          >
            4
          </Align>
        </Slide>
        <Slide>
          <Align
            flex={{
              center: true,
              vCenter: true,
            }}
            style={{
              background: "#eee",
              height: "100px",
            }}
          >
            5
          </Align>
        </Slide>
      </Slider>
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
