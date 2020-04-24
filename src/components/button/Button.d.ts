import React from 'react';
import { IConProps } from '../icons/Icons';
import { JDColor, TMarginSize } from '../../types/enum';
import { JDatomExtentionSet, TElements } from '../../types/interface';
import { IconConifgProps } from '../icons/declation';
interface IButtonConstum {
    /** 사용 불가능함*/
    disabled?: boolean;
    /** 버튼 텍스트 */
    label?: string | TElements;
    /**  아이콘 PROP 들 */
    iconProp?: IConProps & IconConifgProps;
    /** 음수 마진으로 패딩값을 소모시킵니다. 패딩 곂침을 해야할때 유용합니다. */
    cunsumPadding?: boolean;
    iconClasses?: string[];
    /** 해당 PROP에 값을 넣으면 버튼에 툴팁을 생성합니다. */
    dataTip?: any;
    /** 툴팁 PROP 참고 */
    dataFor?: any;
    /** 버튼 패딩 */
    padding?: TMarginSize;
    /** 아이콘 버튼 아래쪽 모드와 같음 도드 = 디프리케이트*/
    iconButton?: boolean;
    /** 버튼의 모양을 조절 */
    mode?: 'flat' | 'normal' | 'border' | 'iconButton';
    /** 버튼의 크기를 조절 */
    size?: 'small' | 'large' | 'long' | 'longLarge';
    /** 해당 버튼은 float 속성을 지닙니다. */
    type?: 'button' | 'submit' | 'reset' | undefined;
    /** 버튼 색상 */
    thema?: JDColor | null;
    /** 해당 버튼은 펄스 효과를 가집니다. */
    pulse?: boolean;
    /** 해당 버튼은 깜빡임 효과를 가집니다. */
    blink?: boolean;
    toggle?: boolean;
    /** 해당 버튼은 로딩 효과를 가집니다. */
    preloader?: boolean;
    /** 해당 버튼의 라운드를 조절합니다. */
    br?: 'round' | 'normal' | 'no';
    /** 해당 버튼의 동작을 A링크처럼 처리합니다. */
    hrefOpen?: string;
    /** 해당 PROP 를 전달하여 툴팁을 생성합니다. */
    tooltip?: string;
    /** 해당 버튼을 Redirect 하는 용도로 사용합니다. */
    redirect?: string;
    /** 폰트 색상을 강제합니다. */
    color?: 'white';
}
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>, JDatomExtentionSet, IButtonConstum {
    color?: 'white';
}
export declare const TypeButton: React.FC<IButtonConstum>;
export declare const Button: React.FC<IButtonProps>;
export default Button;
