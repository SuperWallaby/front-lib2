import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';
import JDcontainer from '../container/Container';
import JDbutton from '../button/Button';

export default {
	title: 'Card',
	component: <Card />,
	decorators: [withKnobs]
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<Card mr="no">Card Content</Card>
			<Card
				mr="no"
				foot={{
					mode: 'fit',
					element: (
						<div>
							<JDbutton label="111" />
							<JDbutton label="222" />
							<JDbutton label="333" />
						</div>
					)
				}}
			>
				Card Content
			</Card>
			<Card
				badges={[
					{
						mode: 'folded',
						label: '111',
						thema: 'primary',
						size: 'large'
					},
					{
						mode: 'folded',
						label: '222',
						thema: 'new',
						size: 'large'
					}
				]}
			>
				<div>Card Content</div>
			</Card>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
