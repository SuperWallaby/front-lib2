import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Switch from './Switch';
import JDcontainer from '../container/Container';
import { useSwitch } from '../..';

export default {
	title: 'Switch',
	component: <Switch />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	const swithHook = useSwitch(false);
	return (
		<JDcontainer verticalPadding>
			<Switch {...swithHook} label="label" />
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
