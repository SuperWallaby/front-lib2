import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Align from "./Align";
import "../../scss/all.scss";
import JDlabel from "../label/JDLabel";
import JDcontainer from "../container/Container";
import { WindowSize } from "../../types/enum";
import { Block } from "./Block";
import AlignMdx from "./Align.mdx";

export default {
  title: "Align",
  component: () => <Align />,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: AlignMdx,
    },
  },
};

export const standard = () => {
  return (
    <JDcontainer size={WindowSize.sm}>
      <JDlabel txt="flex" />
      <Align
        style={{
          minHeight: "100px",
        }}
        flex={{}}
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>
      <JDlabel txt="flex-between" />
      <Align
        flex={{
          between: true,
        }}
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>
      <JDlabel txt="vertical-center" />
      <Align
        flex={{
          vCenter: true,
        }}
      >
        <Block
          style={{
            height: "50px",
          }}
        />
        <Block
          style={{
            height: "70px",
          }}
        />
        <Block />
        <Block
          style={{
            height: "30px",
          }}
        />
      </Align>
      <JDlabel txt="grid and col" />
      <Align grid>
        <Align col>
          <Block />
        </Align>
        <Align col>
          <Block />
        </Align>
        <Align col>
          <Block />
        </Align>
      </Align>
      <JDlabel txt="grid and col numbering" />
      <Align grid>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
      </Align>
      {/* <Align grid>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6
          }}

        >
          <Block />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6
          }}
        >
          <Block />
        </Align>
      </Align> */}
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
