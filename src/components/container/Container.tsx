import React from "react";
import { IDiv } from "../../types/interface";
import { WindowSize } from "../../types/enum";
import classNames from "classnames";

interface IProps extends IDiv {
  size?: WindowSize;
}

const JDcontainer: React.FC<IProps> = ({ className, size, ...prop }) => {
  const classes = classNames("container", className, {
    "container--full": size === WindowSize.full,
    "container--sm": size === WindowSize.sm,
    "container--md": size === WindowSize.md,
    "container--lg": size === WindowSize.lg
  });

  return <div className={classes} {...prop} />;
};

export default JDcontainer;
