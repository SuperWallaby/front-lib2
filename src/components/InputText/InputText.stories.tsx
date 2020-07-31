import React, { useEffect } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import InputText from './InputText';
import JDcontainer from '../container/Container';
import MDX from './readMe.mdx';
import { useInput } from '../..';

export default {
	title: 'InputText',
	component: () => <InputText />,
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
		docs: {
			page: MDX
		}
	}
};

export const standard = () => {

	const textInputHook = useInput("");
	const numberInputHook = useInput(0);
	const commaInputHook = useInput(0);
	const nullInputHook = useInput(null);

	useEffect(() => {
		console.log(typeof commaInputHook.value);
	}, [
		commaInputHook.value
	]);

	useEffect(() => {
		console.log(typeof textInputHook.value);
	}, [
		textInputHook.value
	]);

	useEffect(() => {
		console.log(typeof numberInputHook.value);
	}, [
		numberInputHook.value
	]);

	return (
		<JDcontainer verticalPadding>
			<div>
				<InputText label="일반" />
			</div>
			<div>
				<InputText {...nullInputHook} label="Null HOOK" />
			</div>
			<div>
				<InputText {...numberInputHook} label="Number HOOK" />
			</div>
			<div>
				<InputText comma {...commaInputHook} label="Comma 넘버리턴" />
			</div>
			<div>
				<InputText {...textInputHook} label="Text HOOK" />
			</div>
			<div>
				<InputText br="round" Size="big" label="big" />
			</div>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
