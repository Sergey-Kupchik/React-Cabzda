import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

import {Rating, ratingValueType} from "../Rating/Rating";
import {UncontrolOnOff} from "./UncontrolOnOff";



export default {
    title: 'UncontroledOnOff',
    component: UncontrolOnOff,
};

export const ModeOn =()=><UncontrolOnOff defaultOn={true}/>
export const ModeOff =()=><UncontrolOnOff defaultOn={false}/>






