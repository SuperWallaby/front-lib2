import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CheckBox from './CheckBox';
import MDX from './checkbox.mdx';
import JDcontainer from '../container/Container';
import CheckBoxMini from './CheckBoxMini';
import { useCheckBox } from '../../hooks/hook';

export const standard = () => {
    const checkBoxHook = useCheckBox(false);
    return (
        <JDcontainer verticalPadding>
            <CheckBox label="normal" {...checkBoxHook} />
            <CheckBox label="small" size="small" {...checkBoxHook} />
            <CheckBox label="tiny" size="tiny" {...checkBoxHook} />
        </JDcontainer>
    );
};

export const mini = () => {

    return (
        <JDcontainer verticalPadding>
            <CheckBoxMini handleClick={() => { }} checked={false} />
        </JDcontainer>
    );
};

standard.story = {
    name: 'standard'
};


export default {
    title: 'CheckBox',
    component: standard,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: '버튼 컴포넌트',
        docs: {
            page: MDX
        }
    }
};
