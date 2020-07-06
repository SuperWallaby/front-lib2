import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import JDcontainer from '../container/Container';
import JDcolorPicker from './JDcolorPicker';
import { useColorPicker } from '../../hooks/hook';


export const standard = () => {
    const colorHook = useColorPicker("#fff")
    return (
        <JDcontainer verticalPadding>
            <JDcolorPicker colorHook={colorHook} />
        </JDcontainer>
    );
};


export default {
    title: 'ColorPicker',
    component: standard,
    decorators: [withKnobs]
};

standard.story = {
    name: 'standard'
};
