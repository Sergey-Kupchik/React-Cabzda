import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";
import {v1} from "uuid";
import {listForAccordionType} from "../../App";


export default {
    title: 'Accordion',
    component: Accordion,
};
const list:listForAccordionType = [
    {id: v1(), title: "Military", value:1},
    {id: v1(), title: "Waiter", value:2},
    {id: v1(), title: "Self-employed", value:3},
    {id: v1(), title: "Web-developer", value:4}
];

const callBack =action("clicked")
const callBackItem =action("this item was clicked")


export const UncollapsedMode = () => <Accordion title={"--Menu--"} collapsed={false} list={list} onChange={callBack} onClick={callBackItem}/>
export const CollapsedMode = () => <Accordion title={"--Menu--"} collapsed={true} list={list} onChange={callBack} onClick={callBackItem}/>

export const AccordionChanging =()=>{
    let [value, setValue] = useState<boolean>(false)
    return  <Accordion title={"--Menu--"} collapsed={value} list={list}  onChange={()=>setValue(!value)} onClick={callBackItem}/>
}


