import React, {useReducer} from "react";
import {action, reducer} from "./reducer";

type ArticlePropsType = {
    title: string
    collapsed?: boolean
    list: string
}


function UncontrolledAccordion(props: ArticlePropsType) {
    // let [collapsed2, setCollapsed2] = useState<boolean>(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.title} dispatch={() => dispatch(action)} collapsed2={state.collapsed}/>
        {state.collapsed && <AccordionBody list={props.list}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsed2: boolean
    dispatch: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h1 onClick={props.dispatch}>{props.title}</h1>
}

type AccordionBodyPropsType = {
    list: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.list === "job") {
        return <>
            <div>Military</div>
            <div>Waiter</div>
            <div>Self-employed</div>
            <div>Web-developer</div>
        </>
    } else if (props.list === "meal") {
        return <>
            <div>Walnuts</div>
            <div>Sandwich</div>
            <div>Peas</div>
            <div>Potato</div>
        </>
    } else {
        return <>
            <div>String #1</div>
            <div>String #2</div>
            <div>String #3</div>
            <div>String #4</div>

        </>
    }

}

export default UncontrolledAccordion;