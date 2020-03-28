import classNames from "classnames";
import React, { useState } from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import { JDatomClasses } from "../../utils/autoClasses";
import JDIcon from "../icons/Icons";




interface IProps extends IDiv {
  /**
   * Sets the button size.
   */
  children?: JSX.Element[] | JSX.Element | string;
  hover?: boolean;
  toogleCard?: boolean;
  onToogleCardClick?: () => any;
  fullHeight?: boolean;
  className?: string;
  selected?: boolean;
  fullWidth?: boolean;
  align?: "center";
  noMargin?: boolean;
  onClickCard?(): void;
}

export interface CardProps extends IProps {}

export const JDcard: React.FC<IProps & JDatomExtentionSet> = ({
  children,
  hover,
  align,
  className,
  onClickCard,
  fullHeight,
  fullWidth,
  selected,
  toogleCard,
  onToogleCardClick,
  noMargin,
  mb,
  mr,
  ...props
}: IProps & JDatomExtentionSet) => {
  const [render, setRender] = useState(true);

  const classes = classNames("JDcard", className, {
    JDcard: true,
    "JDcard--hover": hover,
    "JDcard--selected": selected,
    "JDcard--fullHeight": fullHeight,
    "JDcard--fullWidth": fullWidth,
    "JDcard--noMargin": noMargin,
    "JDcard--center": align === "center",
    ...JDatomClasses({
      mb,
      mr
    })
  });

  const handleClickCard = () => {
    onClickCard && onClickCard();
  };

  if (!render) {
    return <div />;
  }

  return (
    <div onClick={handleClickCard} {...props} className={classes}>
      {toogleCard && (
        <span className="JDcard__clearIcon">
          <JDIcon
            onClick={() => {
              setRender(false);
              onToogleCardClick && onToogleCardClick();
            }}
            icon="close"
          />
        </span>
      )}
      {children}
    </div>
  );
};

JDcard.defaultProps = {
  hover: false
};

export default JDcard;
