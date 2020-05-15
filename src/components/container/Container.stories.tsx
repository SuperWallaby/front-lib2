import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Container from './Container';
import MDX from './container.mdx';

export default {
	title: 'Container',
	component: <Container />,
	decorators: [ withKnobs ],
	parameters: {
		componentSubtitle: '버튼 컴포넌트',
		docs: {
			page: MDX
		}
	}
};

export const standard = () => {
	return (
		<Container
			style={{
				backgroundColor: '#ccc'
			}}
		>
			Content
		</Container>
	);
};

standard.story = {
	name: 'standard'
};
