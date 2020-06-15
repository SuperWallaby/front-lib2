import React from "react";
import classNames from "classnames";
import {ISpan, JDatomExtentionSet} from "../../types/interface";
import {JDatomClasses} from "../../utils/utils";

interface IProps extends ISpan, JDatomExtentionSet {
  disabled?: boolean;
  checked?: boolean | null;
  label?: string;
  className?: string;
  size?: "small" | "tiny";
  onChange?(foo: any): void;
  id?: string;
}

const JDcheckbox: React.FC<IProps> = ({
  disabled,
  checked = false,
  onChange,
  size,
  label,
  className,
  ...props
}) => {
  const warpClasses = classNames("JDcheck_box_wrap", className, {
    "JDcheck_box_wrap--small": size === "small",
    "JDcheck_box_wrap--tiny": size === "tiny",
    ...JDatomClasses(props),
  });
  const classes = classNames("JDcheck_box", className, {
    "JDcheck_box--small": size === "small",
  });

  const onHandleClick = () => {
    if (checked !== undefined && onChange) {
      const flag = disabled ? checked : !checked;
      onChange(flag || false);
    }
  };

  return (
    <span
      className={`${warpClasses}`}
      tabIndex={0}
      role="button"
      onKeyPress={onHandleClick}
      onClick={onHandleClick}
    >
      <input
        {...props}
        onChange={() => {}}
        checked={checked || false}
        disabled={disabled}
        className={classes}
        type="checkbox"
      />
      <span className="JDcheck_box_label">{label}</span>
    </span>
  );
};

JDcheckbox.defaultProps = {
  checked: false,
  disabled: false,
};

const JDcheckBox = JDcheckbox;

export default JDcheckBox;
