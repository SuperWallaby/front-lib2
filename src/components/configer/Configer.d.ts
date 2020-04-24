import React from 'react';
import { IDiv, JDatomExtentionSet, TElements } from '../../types/interface';
declare type Tlang = {
    enableHeader?: string;
    unableHeader?: string;
    /** 값을 언어에따라 바꾸는 함수를 제공하세요. */
    labelFn?: (key: TElements) => string;
};
export interface IConfigerProp extends IDiv, JDatomExtentionSet {
    /** 사용함 처리된 아이템들*/
    enableItems: string[];
    /** 모든 아이템들*/
    allItem: string[];
    /** 현재 사용함 처리의 아이템들이 변할떄마다 변환해줌 */
    onEnableChange: (enableItems: string[]) => any;
    /** 텍스트설정 */
    langs?: Tlang;
}
export declare const Configer: React.FC<IConfigerProp>;
export default Configer;
