import React from "react";
import { JDatomExtentionSet, IDiv } from "../../types/interface";
interface Iprops extends JDatomExtentionSet, IDiv {
    src?: string;
    lang?: string;
    responseImg?: boolean;
    unStyle?: boolean;
    type?: string;
    className?: string;
    isBgImg?: boolean;
    context?: any;
    windowWidth?: number;
}
declare const PhotoFrame: React.FC<Iprops>;
export default PhotoFrame;
