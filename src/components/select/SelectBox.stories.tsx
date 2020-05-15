import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SelectBox from './SelectBox';
import JDcontainer from '../container/Container';
import { useSelect } from '../..';
import { IselectedOption } from '../../types/interface';

export default {
	title: 'SelectBox',
	component: () => <SelectBox />,
	decorators: [withKnobs]
};

const options = [
	{
		label: 'Strawberry',
		value: 'strawberry'
	},
	{
		label: 'Apple',
		value: 'apple'
	},
	{
		label: 'Graph',
		value: 'graph'
	}
];

export const standard = () => {
	const selectBoxHook = useSelect(options[0], options);

	return (
		<JDcontainer
			verticalPadding
			style={{
				minHeight: '31.25rem'
			}}
		>
			<div>
				<SelectBox
					mode="underline"
					label="size"
					{...selectBoxHook}
				/>
			</div>
			<div>
				<SelectBox
					mode="underline"
					size="small"
					labelPosition="left"
					label="size"
					{...selectBoxHook}
				/>
			</div>
			<div>
				<SelectBox
					labelPosition="right"
					size="small"
					label="size"
					{...selectBoxHook}
				/>
			</div>
			<div>
				<SelectBox require label="asdasd" {...selectBoxHook} />
			</div>
		</JDcontainer>
	);
};

export const multiSelect = () => {
	const [selecteds, setSelecteds] = useState<IselectedOption[]>(options);

	return (
		<JDcontainer
			style={{
				minHeight: '31.25rem'
			}}
			verticalPadding
		>
			<div>
				<SelectBox
					isMulti
					onChanges={ops => {
						setSelecteds(ops);
					}}
					selectedOptions={selecteds}
					options={options}
				/>
			</div>
		</JDcontainer>
	);
};

multiSelect.story = {
	name: 'multi'
};
standard.story = {
	name: 'standard'
};
