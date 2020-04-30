import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RadioButton from './RadioButton';
import '../../scss/all.scss';
import JDcontainer from '../container/Container';
import { useRadioBox } from '../../hooks/hook';

const options = [
	{
		label: '1',
		value: '1'
	},
	{
		label: '2',
		value: '2'
	},
	{
		label: '3',
		value: '3'
	}
];

export default {
	title: 'RadioButton',
	component: <RadioButton onChangeSelect={() => {}} options={[]} selectedValues={[ '' ]} />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	const radioBoxHook = useRadioBox([ '1' ], options);

	return (
		<JDcontainer verticalPadding>
			<RadioButton mode="gather" {...radioBoxHook} />
			<RadioButton only {...radioBoxHook} />
			<RadioButton {...radioBoxHook} />
			<RadioButton withAllTooglerLabel="전체투글" withAllToogler {...radioBoxHook} />
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
