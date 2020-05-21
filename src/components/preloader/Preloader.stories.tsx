import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Preloader from './Preloader';
import JDcontainer from '../container/Container';

export default {
	title: 'Preloader',
	component: <Preloader />,
	decorators: [withKnobs]
};

export const page = () => {
	return (
		<JDcontainer verticalPadding>
			<Preloader page loading={true}/>
		</JDcontainer>
	);
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<Preloader loading={true}/>
		</JDcontainer>
	);
};

page.story = {
	name: 'page'
};

standard.story = {
	name: 'standard'
};
