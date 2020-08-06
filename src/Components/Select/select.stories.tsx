import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import Select from "./select";
import {v1} from "uuid";




export default {
    title: 'Select',
    component: Select,
};
const callBack = action('star was clicked');

const city = [
    {id: v1(), item: "NewYork"},
    {id: v1(), item: "Orlando"},
    {id: v1(), item: "Sydney"},
    {id: v1(), item: "Ayia Napa"},
]

export const Testseeg = () => <Select  list={city}/>
