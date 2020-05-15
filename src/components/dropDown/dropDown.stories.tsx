import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import JDcontainer from '../container/Container';
import JDbutton from '../button/Button';
import DropDown from './DropDown';
import { useDropDown } from '../../hooks/hook';

export const Standard = () => {
    const dropDownHook = useDropDown<FOO>();
    const dropDownHook2 = useDropDown<FOO>();
    const dropDownHook3 = useDropDown<FOO>();

    return (
        <JDcontainer verticalPadding>
            <JDbutton label="basic" onClick={dropDownHook.open} />
            <DropDown closeOnWindowClick {...dropDownHook} Buttons={(info: FOO) => {
                console.log(info);
                return [<JDbutton key={"Asd"} label="123" />, <JDbutton key={"ccdd"} label="123" />];
            }} />
            <JDbutton label="Bottom" onClick={dropDownHook2.open} />
            <DropDown closeOnWindowClick {...dropDownHook2} Buttons={(info: FOO) => {
                console.log(info);
                return [<JDbutton key={"Asd"} label="123" />, <JDbutton key={"ccdd"} label="123" />];
            }} />
            <JDbutton label="widthHead" onClick={dropDownHook3.open} />
            <DropDown head={{
                title: "타이틀"
            }} closeOnWindowClick {...dropDownHook3} Buttons={(info: FOO) => {
                console.log(info);
                return [<JDbutton key={"Asd"} label="123" />, <JDbutton key={"ccdd"} label="123" />];
            }} />
        </JDcontainer>
    );
};

export default {
    title: 'DropDown',
    component: <Standard />,
    decorators: [withKnobs]
};

type FOO = {}

Standard.story = {
    name: 'standard'
};
