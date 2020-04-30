import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Logo from './Logo';
import JDcontainer from '../container/Container';

export default {
	title: 'Logo',
	component: <Logo />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<div
				style={{
					backgroundColor: 'black'
				}}
			>
				<Logo />
			</div>
			<Logo color="black" />
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
