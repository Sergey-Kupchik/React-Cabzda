import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import {v1} from "uuid";
import ItemType, {Select2} from "./select2";


export default {
    title: 'Select2',
    component: Select2,
};

const city: ItemType[] = [
    {value: "1", title: "NewYork"},
    {value: "2", title: "Orlando"},
    {value: "3", title: "Sydney"},
    {value: "4", title: "Ayia Napa"},
]

export const BaseExampel = () => {
    let [value, setValue] = useState<any>("2")
    const onClickForTop = (v:any)=>{setValue(v)};

    return <>
        <Select2 value={value} onChage={onClickForTop} item={city}/>
    </>;
}


export const BaseWithoutValue = () => {
    let [value, setValue] = useState<any>(null);
    const onClickForTop = (v:any)=>{setValue(v)};
    return (
        <>
            <Select2 value={value} onChage={onClickForTop} item={city}/>
        </>
    )
}