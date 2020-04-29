import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DayPicker, { TDayPickerDot } from './DayPicker';
import '../../scss/all.scss';
import { useDayPicker } from '../../hooks/hook';
import JDcontainer from '../container/Container';
import JDtypho from '../typho/Typho';

export default {
	title: 'DayPicker',
	component: () => {
		const dayPickerHook = useDayPicker(null, null);

		return <DayPicker {...dayPickerHook} />;
	},
	decorators: [ withKnobs ]
};

export const standard = () => {
	const dayPickerHook = useDayPicker(null, null);
	const dots: TDayPickerDot[] = [
		{
			color: 'error',
			date: new Date()
		}
	];

	return (
		<JDcontainer verticalPadding>
			<JDtypho mb="normal" weight={600}>
				달력모드
			</JDtypho>
			<DayPicker mb="largest" dots={dots} {...dayPickerHook} />
			<JDtypho mb="normal" weight={600}>
				인풋 모드
			</JDtypho>
			<DayPicker mode="input" {...dayPickerHook} />
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
