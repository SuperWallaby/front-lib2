import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Badge from './Badge';
import '../../scss/all.scss';
import JDcontainer from '../container/Container';

export default {
	title: 'Badge',
	component: <Badge />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<Badge thema="primary">Badge</Badge>
			<Badge thema="point">Badge</Badge>
			<Badge thema="grey1">Badge</Badge>
			<Badge thema="grey2">Badge</Badge>
			<Badge thema="grey3">Badge</Badge>
			<Badge thema="grey4">Badge</Badge>
			<Badge thema="new">Badge</Badge>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
