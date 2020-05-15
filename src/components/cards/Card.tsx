import classNames from 'classnames';
import React, { useState } from 'react';
import { IDiv, JDatomExtentionSet, TElements } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';
import JDIcon from '../icons/Icons';
import JDbadge, { IJDbadge } from '../badge/Badge';

interface ICardFoot extends IDiv {
	mode?: 'fit';
	element?: TElements;
}

interface IProps extends IDiv {
	/**
   * Sets the button size.
   */
	children?: JSX.Element[] | JSX.Element | string;
  hover?: boolean;
  badges?: IJDbadge[];
	toogleCard?: boolean;
	onToogleCardClick?: () => any;
	fullHeight?: boolean;
	className?: string;
	selected?: boolean;
	fullWidth?: boolean;
	align?: 'center';
	noMargin?: boolean;
	foot?: ICardFoot;
	onClickCard?(): void;
}

export interface CardProps extends IProps {}

export const JDcard: React.FC<IProps & JDatomExtentionSet> = ({
	children,
	hover,
	align,
	className,
	onClickCard,
	fullHeight,
	fullWidth,
	selected,
	toogleCard,
	onToogleCardClick,
	noMargin,
  foot,
  badges,
	...props
}: IProps & JDatomExtentionSet) => {
	const [ render, setRender ] = useState(true);

	const classes = classNames('JDcard', className, {
		JDcard: true,
		'JDcard--withFoot': foot,
		'JDcard--hover': hover,
		'JDcard--selected': selected,
		'JDcard--fullHeight': fullHeight,
		'JDcard--fullWidth': fullWidth,
		'JDcard--noMargin': noMargin,
		'JDcard--center': align === 'center',
		...JDatomClasses(props)
	});
	const footClasses = classNames('JDcard__foot', foot?.className, {
    'JDcard__foot--fit': foot?.mode === "fit"
	});

	const handleClickCard = () => {
		onClickCard && onClickCard();
	};

	if (!render) {
		return <div />;
	}

	return (
		<div onClick={handleClickCard} {...props} className={classes}>
			{toogleCard && (
				<span className="JDcard__clearIcon">
					<JDIcon
						onClick={() => {
							setRender(false);
							onToogleCardClick && onToogleCardClick();
						}}
						icon="close"
					/>
				</span>
			)}
			<div className="JDcard__body">{children}</div>
			{foot && <div className={footClasses}>{foot.element}</div>}
      {badges && <div className="JDcard__badges">
        {badges?.map(b => <JDbadge {...b}/>)}
      </div>}
		</div>
	);
};

JDcard.defaultProps = {
	hover: false
};

export default JDcard;
