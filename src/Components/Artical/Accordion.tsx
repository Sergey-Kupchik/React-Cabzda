import React from "react";
import {listForAccordionType} from "../../App";

type ArticlePropsType = {
    title: string
    collapsed: boolean
    list: listForAccordionType
    onChange: () => void
    onClick: (value: any) => void
}

export const Accordion = React.memo(
    function Accordion(props: ArticlePropsType) {
        return <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody list={props.list} onClick={props.onClick}/>}
        </div>
    }
)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = React.memo(
    function AccordionTitle(props: AccordionTitlePropsType) {
        return <h1 onClick={(e) => props.onChange()}>{props.title}</h1>
    }
)

type AccordionBodyPropsType = {
    list: listForAccordionType
    onClick: (value: any) => void
}

const AccordionBody = React.memo(
    function AccordionBody(props: AccordionBodyPropsType) {
        return <ul>{
            props.list.map(t => <li key={t.id} onClick={() => {
                props.onClick(t.value)
            }}>{t.title}</li>)
        }</ul>
    })

export default ArticlePropsType;