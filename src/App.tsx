import React, {useState} from 'react';

import './App.css';

import {Rating, ratingValueType} from "./Components/Rating/Rating";
import {UncontrolOnOff} from "./Components/UncontrolOnOff/UncontrolOnOff";
import UncontrolledAccordion from "./Components/UncontroledAcordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontroledRating/UncontrolledRating";
import {OnOff} from "./Components/OnOff/OnOff";
import { Accordion } from './Components/Artical/Accordion';
import {v1} from "uuid";





export type listForAccordionType = objectForAccordionType[]
type objectForAccordionType = {
    id: string
    title: string
    value: any
}

function App() {


     const list = [
         {id: v1(), title: "Military", value:1},
         {id: v1(), title: "Waiter", value:2},
         {id: v1(), title: "Self-employed", value:3},
         {id: v1(), title: "Web-developer", value:4}
    ];


    let [ratingValue, setRatingValue] = useState<ratingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)

    let [OnOffValue,SetOnOffValue] = useState<boolean>(false)

    return (
        <div>
            {/*/!*<PageTitle title={"This is the first page"}/>*!/*/}
            {/*<Accordion title={"--Menu for us--"} collapsed={collapsed} list={list} onChange={()=>{setCollapsed(!collapsed)}} />*/}



            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<OnOff on={OnOffValue} onClick={SetOnOffValue}/>*/}

            {/*<UncontrolOnOff/>*/}

            <UncontrolledAccordion title={"Resepi"}  list={"meal"}/>


            {/*<UncontrolledRating/>*/}


            {/*<PageTitle title={"So sorry"}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={0}/>*/}


        </div>
    );
}





type PageTitlePropsType={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
