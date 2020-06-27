import classNames from 'classnames';
import React, { useState } from 'react';
import { IDiv, JDatomExtentionSet, TElements } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';
import JDIcon from '../icons/Icons';
import JDbadge, { IJDbadge } from '../badge/Badge';
import { TextAlign } from '../../types/enum';
import { StyledCard, StyledCardBadges } from "./Card.style"
interface ICardFoot extends IDiv {
	mode?: 'fit';
	element?: TElements;
}

export interface IProps extends IDiv {
	children?: JSX.Element[] | JSX.Element | string;
	hover?: boolean;
	badges?: IJDbadge[];
	toogleCard?: boolean;
	onToogleCardClick?: () => any;
	className?: string;
	selected?: boolean;
	align?: TextAlign;
	foot?: ICardFoot;
	onClickCard?(): void;
}

export interface ICardProps extends IProps, JDatomExtentionSet { }

export const JDcard: React.FC<ICardProps> = ({
	children,
	hover,
	align,
	className,
	onClickCard,
	selected,
	toogleCard,
	onToogleCardClick,
	foot,
	badges,
	...props
}: ICardProps) => {
	const [render, setRender] = useState(true);

	const classes = classNames('JDcard', className, {
		JDcard: true,
		...JDatomClasses(props)
	});
	const footClasses = classNames('JDcard__foot', foot?.className, {});

	const handleClickCard = () => {
		onClickCard && onClickCard();
	};

	if (!render) {
		return <div />;
	}

	return (
		<StyledCard onClick={handleClickCard} {...props} className={classes}>
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
			{badges && <StyledCardBadges>
				{badges?.map(b => <JDbadge {...b} />)}
			</StyledCardBadges>}
		</StyledCard>
	);
};

JDcard.defaultProps = {
	hover: false
};

export default JDcard;
