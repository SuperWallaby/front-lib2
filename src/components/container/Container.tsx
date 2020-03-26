import React from "react";
import { IDiv } from "../../types/interface";
import { WindowSize } from "../../types/enum";
import classNames from "classnames";

interface IProps extends IDiv {
  size?: WindowSize;
  verticalPadding?: "normal" | "small" | boolean;
}

const JDcontainer: React.FC<IProps> = ({
  className,
  size,
  verticalPadding,
  ...prop
}) => {
  const classes = classNames("container", className, {
    "container--full": size === WindowSize.full,
    "container--sm": size === WindowSize.sm,
    "container--md": size === WindowSize.md,
    "container--lg": size === WindowSize.lg,
    "container--vps": verticalPadding === "normal" || verticalPadding === true,
    "container--vpSmall": verticalPadding === "small"
  });

  return <div className={classes} {...prop} />;
};

export default JDcontainer;
