import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Badge from './Badge';
import JDcontainer from '../container/Container';
import { JDalign } from '../..';

export default {
	title: 'Badge',
	component: <Badge />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<JDalign mb="normal">
				<Badge thema="primary">Badge</Badge>
				<Badge thema="point">Badge</Badge>
				<Badge thema="grey1">Badge</Badge>
				<Badge thema="grey2">Badge</Badge>
				<Badge thema="grey3">Badge</Badge>
				<Badge thema="grey4">Badge</Badge>
				<Badge thema="new">Badge</Badge>
			</JDalign>
			<div>
				<Badge thema="new" size="tiny">
					Badge
				</Badge>
				<Badge thema="new" size="large">
					Badge
				</Badge>
				<Badge thema="new" mode="folded" size="large">
					Badge
				</Badge>
			</div>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
