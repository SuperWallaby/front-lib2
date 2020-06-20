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
	const shared = {
			mb:"small" as any,
			mr:"small" as any
	}
	return (
		<JDcontainer verticalPadding>
			<JDalign mb="normal">
				<Badge {...shared} thema="primary">Badge</Badge>
				<Badge {...shared} thema="point">Badge</Badge>
				<Badge {...shared} thema="grey1">Badge</Badge>
				<Badge {...shared} thema="grey2">Badge</Badge>
				<Badge {...shared} thema="grey3">Badge</Badge>
				<Badge {...shared} thema="grey4">Badge</Badge>
				<Badge {...shared} thema="new">Badge</Badge>
			</JDalign>
			<div>
				<Badge {...shared} thema="new" size="tiny">
					Badge
				</Badge>
				<Badge {...shared} thema="new" size="large">
					Badge
				</Badge>
				<Badge {...shared} thema="new" mode="folded" size="large">
					Badge
				</Badge>
			</div>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
