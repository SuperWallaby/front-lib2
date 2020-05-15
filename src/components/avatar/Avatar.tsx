import classNames from "classnames";
import React, { Fragment, useRef } from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import { IconSize } from "../../types/enum";
import { iconSizeClass, JDatomClasses } from "../../utils/autoClasses";
import JDIcon from "../icons/Icons";
import $ from "jquery";

interface Iprops extends IDiv, JDatomExtentionSet {
    isBordered?: boolean;
    size?: IconSize;
    whiteBorder?: boolean;
    config?: boolean;
    className?: string;
    isError?: boolean;
}

const ProfileCircle: React.FC<Iprops> = ({
    isBordered,
    whiteBorder,
    className,
    config,
    size,
    isError,
    mb,
    mr,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const classes = classNames("profileCircle JDwaves-effect", className, {
        "profileCircle--bordered": isBordered,
        "profileCircle--error": isError,
        "profileCircle--whiteBorder": whiteBorder,
        "profileCircle--config": config,
        ...iconSizeClass("profileCircle", size),
        ...JDatomClasses(props)
    });

    const circleSize = parseFloat(size || "1em") * 2 + "em";

    const profileStyle = {
        width: circleSize,
        height: circleSize
    };

    return (
        <div
            role="button"
            tabIndex={0}
            className={classes}
            style={profileStyle}
            {...props}
        >
            {config && (
                <Fragment>
                    {/* 이부분을 컴포넌트로 */}
                    <span className="profileCircle__addIcon">
                        <span
                            onClick={() => {
                                if (inputRef.current) {
                                    $(inputRef.current).click();
                                }
                            }}
                            className="profileCircle__addIcon-inner"
                        >
                            <JDIcon size="tiny" icon="camera" />
                        </span>
                    </span>
                    <input
                        ref={inputRef}
                        className="profileCircle__input"
                        id="photo"
                        type="file"
                        accept="image/*"
                    />
                </Fragment>
            )}
        </div>
    );
};

export default ProfileCircle;
