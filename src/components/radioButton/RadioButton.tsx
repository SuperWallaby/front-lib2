import React, { useState } from 'react';
import classNames from 'classnames';
import Button, { IButtonProps } from '../button/Button';
import { JDatomExtentionSet, TElements, IDiv } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';

interface IProps extends JDatomExtentionSet, IDiv {
	options: {
		label: TElements;
		value: string;
	}[];
	mode?: 'gather';
	selectedValues: string[];
	onChangeSelect: (value: string[]) => void;
	reversal?: 'onlyFull' | 'always';
	only?: boolean;
	withAllToogler?: boolean;
	withAllTooglerLabel?: string;
	defaultAllToogle?: boolean;
	noWrap?: boolean;
	btnProps?: IButtonProps;
}

const JDRadioBox: React.FC<IProps> = ({
	selectedValues,
	defaultAllToogle = false,
	options,
	only,
	mode,
	onChangeSelect,
	withAllToogler,
	withAllTooglerLabel,
	reversal,
	className,
	noWrap,
	btnProps,
	...props
}) => {
	const [ allToogled, setAllToggle ] = useState(defaultAllToogle);

	const handleRadioBoxAllChange = () => {
		const allValues = options.map(op => op.value);
		setAllToggle(!allToogled);
		onChangeSelect(allToogled ? [] : allValues);
	};

	const handleRadioBoxChange = (text: string) => {
		const selectedTagrgetIndex = selectedValues.findIndex(inInValue => inInValue === text);
		const isUnSelectedValue = selectedTagrgetIndex === -1;
		const isFull = selectedValues.length === options.length;

		if (reversal === 'always') selectedValues = [];
		else if (reversal === 'onlyFull' && isFull) selectedValues = [];

		if (isUnSelectedValue) selectedValues.push(text);
		else selectedValues.splice(selectedTagrgetIndex, 1);

		if (only) selectedValues = [ text ];

		onChangeSelect(selectedValues.slice());
	};

	const classes = classNames('radioBox', className, {
		'radioBox--noWrap': noWrap,
		'radioBox--gather': mode === 'gather',
		...JDatomClasses(props)
	});

	const innerClasses = classNames('radioBox__inner', undefined, {
		'radioBox__inner--noWrap': noWrap
	});

	return (
		<div className={`radioBox ${classes}`} {...props}>
			<div className={innerClasses}>
				<Button
					hide={!withAllToogler}
					toggle={allToogled}
					label={withAllTooglerLabel}
					onClick={handleRadioBoxAllChange}
					{...btnProps}
				/>
				{options.map(op => (
					<Button
						key={op.value}
						toggle={selectedValues.includes(op.value)}
						label={op.label}
						onClick={() => handleRadioBoxChange(op.value)}
						{...btnProps}
					/>
				))}
			</div>
		</div>
	);
};

const RadioBox = React.memo(JDRadioBox);
export default RadioBox;
