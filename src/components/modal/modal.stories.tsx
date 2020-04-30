import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from './Modal';
import '../../scss/all.scss';
import JDcontainer from '../container/Container';
import { useModal } from '../..';
import { JDtabs, Tab, TabList, TabPanel } from '../tabs/Tabs';
import JDtypho from '../typho/Typho';

export default {
	title: 'Modal',
	component: () => {
		const modalHook = useModal(true);
		return <Modal {...modalHook} />;
	},
	decorators: [ withKnobs ]
};

export const elementHeader = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
				head={{
					element: (
						<div>
							<JDtypho mb="small" size="h6">
								타이틀 커스텀
							</JDtypho>
							<JDtypho size="small">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse officiis fugit quaerat
								animi cum autem consectetur unde a molestiae aliquid alias quae perferendis,
								praesentium, omnis nihil non odio? Debitis, est.
							</JDtypho>
						</div>
					)
				}}
				{...modalHook}
			>
				content content content content content content content content content
			</Modal>
		</JDcontainer>
	);
};

export const withTab = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
				head={{
					title: 'Modal Title'
				}}
				contentWrapStyle={{
					paddingTop: '0px'
				}}
				{...modalHook}
			>
				<JDtabs mb="large">
					<TabList>
						<Tab>바나나</Tab>
						<Tab>사과</Tab>
					</TabList>
					<TabPanel>🍌🍌 Banana Banana Banana Banana Banana Banana</TabPanel>
					<TabPanel>🍎🍎 Apple Apple Apple Apple Apple Apple</TabPanel>
				</JDtabs>
			</Modal>
		</JDcontainer>
	);
};

export const standard = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
				head={{
					title: 'Modal Title'
				}}
				{...modalHook}
			>
				content content content content content content content content content
			</Modal>
		</JDcontainer>
	);
};

export const loading = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal loading {...modalHook}>
				content content content content content content content content content
			</Modal>
		</JDcontainer>
	);
};

withTab.story = {
	name: 'with tab'
};
standard.story = {
	name: 'standard'
};
loading.story = {
	name: 'loading'
};
