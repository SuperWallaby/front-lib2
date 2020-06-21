import classNames from "classnames";
import React, { Fragment } from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import { IconSize } from "../../types/enum";
import { iconSizeClass, JDatomClasses } from "../../utils/autoClasses";
import JDIcon from "../icons/Icons";
import $ from "jquery";
import { IuseFilesManager } from "../../hooks/hook";
import { JDsingleUploader } from "../..";
import { s4 } from "../../utils/utils";
import { IMG_REPO } from "../../types/const";

const DEFAULT_IMG = IMG_REPO + "default/default_profile.jpg";

interface Iprops extends IDiv, JDatomExtentionSet {
  img?: string;
  size?: IconSize;
  mode?: "edit" | "view";
  className?: string;
  isError?: boolean;
  uploader?: IuseFilesManager;
}

const Avatar: React.FC<Iprops> = ({
  img,
  className,
  mode = "view",
  size,
  isError,
  uploader,
  mb,
  mr,
  ...props
}) => {
  if (!uploader && mode === "edit") {
    console.warn("JDAvatar:: you should provide uploaderHOok");
  }

  const uplaoderId = s4();

  const classes = classNames("avatar JDwaves-effect", className, {
    "avatar--error": isError,
    "avatar--edit": mode === "edit",
    ...iconSizeClass("avatar", size),
    ...JDatomClasses(props),
  });

  const localImg = uploader?.localFiles[0]?.base64;
  const urlImg = img;
  const profileImg = localImg || urlImg || DEFAULT_IMG;

  const circleSize = parseFloat(size || "1em") * 2 + "em";

  const profileStyle = {
    width: circleSize,
    height: circleSize,
    backgroundImage: `url(${profileImg})`,
  };

  const CameraIcon = (
    <span
      onClick={() => {
        $(`#${uplaoderId} .JDbtn`).click();
      }}
      className="avatar__addIcon"
    >
      <span className="avatar__addIcon-inner">
        <JDIcon size="tiny" icon="camera" />
      </span>
    </span>
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={classes}
      style={profileStyle}
      {...props}
    >
      {mode === "edit" && (
        <Fragment>
          {CameraIcon}
          {uploader && (
            <div
              id={uplaoderId}
              style={{
                overflow: "hidden",
                opacity: 0,
                width: "1px",
                height: "1px",
              }}
            >
              <JDsingleUploader fileUploaderHook={uploader} />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Avatar;
