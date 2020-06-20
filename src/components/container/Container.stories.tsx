import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Container from "./Container";
import MDX from "./container.mdx";
import { WindowSize } from "../../types/enum";

export default {
  title: "Container",
  component: <Container />,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "콘테이너",
    docs: {
      page: MDX,
    },
  },
};

export const standard = () => {
  const sizeOp = {
    full: WindowSize.full,
    lg: WindowSize.lg,
    md: WindowSize.md,
    sm: WindowSize.sm,
    wlg: WindowSize.wlg,
    wmd: WindowSize.wmd,
  };
  return (
    <Container
      size={select("mode", sizeOp, undefined) as any}
      style={{
        backgroundColor: "#ccc",
      }}
    >
      Content
    </Container>
  );
};

standard.story = {
  name: "standard",
};
