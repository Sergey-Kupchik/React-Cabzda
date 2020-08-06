import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import PropsType, {OnOff} from "./OnOff";
import {Rating, ratingValueType} from "../Rating/Rating";



export default {
    title: 'OnOff',
    component: OnOff,
};

const callBack = action('clicked');

export const OnMode = () => <OnOff on={true} onClick={callBack}/>
export const OffMode = () => <OnOff on={false} onClick={callBack}/>
export const ModeChanging =()=>{
    let [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onClick={setValue}/>
}





