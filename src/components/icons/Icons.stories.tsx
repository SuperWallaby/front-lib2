import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Icon from './Icons';
import { IConOrigin } from './declation';
import Align from '../align/Align';
import JDcontainer from '../container/Container';
import JDtypho from '../typho/Typho';

export default {
	title: 'Icon',
	component: () => <Icon icon={'close'} />,
	decorators: [withKnobs]
};

const Wrapper: React.FC = ({ children }) => (
	<Align
		style={{
			textAlign: 'center',
			padding: '.4rem',
			margin: '.2rem',
			borderRadius: '5px',
			background: '#fff'
		}}
	>
		{children}
	</Align>
);

export const standard = () => {
	const keys = Object.keys(IConOrigin);
	return (
		<JDcontainer verticalPadding>
			<Align
				flex={{
					wrap: true
				}}
			>
				{keys.map(key => (
					<Wrapper key={key}>
						<div>
							<JDtypho
								style={{
									fontSize: '4px'
								}}
								mb="small"
							>
								{key}
							</JDtypho>
						</div>
						<Icon icon={key as any} />
					</Wrapper>
				))}
			</Align>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
