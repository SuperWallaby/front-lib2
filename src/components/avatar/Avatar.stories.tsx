import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Avatar from './Avatar';
import JDcontainer from '../container/Container';

export default {
    title: 'Card',
    component: <Avatar />,
    decorators: [withKnobs]
};

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <Avatar />
        </JDcontainer>
    );
};

standard.story = {
    name: 'standard'
};
