import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import JDcontainer from '../container/Container';
import Configer from './Configer';

export default {
	title: 'Configer',
	component: Configer,
	decorators: [ withKnobs ]
};

const allItems = [ 'photato', 'apple', 'banana', 'honey2', 'photato2', 'apple2', 'banana2', 'honey3' ];

export const standard = () => {
	const [ eanbleItems, setEanbleItems ] = useState(allItems);
	return (
		<JDcontainer verticalPadding>
			<Configer
				langs={{
					enableHeader: '적용',
					unableHeader: '미적용'
				}}
				onEnableChange={enableItems => {
					setEanbleItems(enableItems);
				}}
				allItem={allItems}
				enableItems={eanbleItems}
			/>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
