import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import PhotoFrame from './PhotoFrame';
import JDcontainer from '../container/Container';

export default {
	title: 'PhotoFrame',
	component: () => <PhotoFrame />,
	decorators: [ withKnobs ]
};

export const standard = () => {
	const langOptions = {
		kr: 'kr',
		en: 'en'
	};
	return (
		<JDcontainer verticalPadding>
			<PhotoFrame
				responseImg
				type=".png"
				lang={select('lang', langOptions, 'kr')}
				className="homepageRequest__topPhoto JDbgColor--primary"
				src={`https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/describe/homepage_request`}
			/>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
