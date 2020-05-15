import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { JDtabs, Tab, TabList, TabPanel } from './Tabs';
import JDcontainer from '../container/Container';

export default {
	title: 'Tabs',
	component: <JDtabs />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<JDtabs>
				<TabList>
					<Tab>사과</Tab>
					<Tab>바나나</Tab>
				</TabList>
				<TabPanel>Apple</TabPanel>
				<TabPanel>Banana</TabPanel>
			</JDtabs>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
