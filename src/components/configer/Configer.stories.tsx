import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import '../../scss/all.scss';
import JDcontainer from '../container/Container';
import Configer from './Configer';

export default {
	title: 'Card',
	component: Configer,
	decorators: [ withKnobs ]
};

const allItems = [ 'photato', 'apple', 'banana', 'honey' ];

export const standard = () => {
	const [ eanbleItems, setEanbleItems ] = useState(allItems);
	return (
		<JDcontainer verticalPadding>
			<Configer
				onChange={(enableItems) => {
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
