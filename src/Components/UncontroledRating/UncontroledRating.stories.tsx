import React, {useState} from 'react';
import UncontrolledRating from "./UncontrolledRating";
import {Rating} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callBack = action('raring changed inside component');

export const UncontrolledRating0 = () => <UncontrolledRating defaultvalue={0} onChange={callBack}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultvalue={1} onChange={callBack}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultvalue={2} onChange={callBack}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultvalue={3} onChange={callBack}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultvalue={4} onChange={callBack}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultvalue={5} onChange={callBack}/>








