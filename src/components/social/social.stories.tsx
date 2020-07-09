import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ShareBtn from './ShareBtn';
import SocialHead from './SocialHead';
import JDcontainer from '../container/Container';
import JDbutton from '../button/Button';

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <SocialHead content="JANDA 예약솔루션!" title="JANDA" url="" imgUrl="https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/icon/bookingIcon.png" />
            <ShareBtn shareProp={{
                text: "세사 모든 예약을 이곳에",
                title: "실시간 예약 솔루션 JANDA.",
                url: "https://stayjanda.com/",
            }} >
                <JDbutton mode="iconButton" iconProp={{
                    icon: "share"
                }} />
            </ShareBtn>
        </JDcontainer>
    );
};


export default {
    title: 'ShareBtn',
    component: standard,
    decorators: [withKnobs]
};

standard.story = {
    name: 'ShareBtn'
};
