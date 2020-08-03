import React from 'react';
import { JDcontainer } from "../../";
import Nomatch from "./Nomatch";

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <Nomatch handleGoBackBtn={() => { }} />
        </JDcontainer>
    );
};

export default {
    title: 'Nomatch',
    component: standard,
};


standard.story = {
    name: 'standard'
};
