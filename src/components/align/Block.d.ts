/// <reference types="react" />
import { IDiv } from "../../types/interface";
interface IBlockProp extends IDiv {
    full?: boolean;
}
export declare const Block: ({ style, full, ...prop }: IBlockProp) => JSX.Element;
export {};
