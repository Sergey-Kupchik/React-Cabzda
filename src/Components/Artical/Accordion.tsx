import React from "react";
import {listForAccordionType} from "../../App";

type ArticlePropsType = {
    title: string
    collapsed: boolean
    list: listForAccordionType
    onChange: () => void
    onClick: (value:any) => void
}

export function Accordion(props: ArticlePropsType) {
    return <div>
        <AccordionTitle title={props.title} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody list={props.list} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h1 onClick={(e) => props.onChange()}>{props.title}</h1>
}

type AccordionBodyPropsType = {
    list: listForAccordionType
    onClick: (value:any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>{
        props.list.map(t => <li key={t.id} onClick={()=>{props.onClick(t.value)}}>{t.title}</li>)
    }</ul>
}

export default ArticlePropsType;