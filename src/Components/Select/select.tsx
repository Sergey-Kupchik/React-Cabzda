import React, {useState} from "react";
import {v1} from "uuid";
import {debuglog} from "util";


// type SelectPropsType = {
//     value: any
//     onClick: (value:any)=>void
//     item: ItemType[]
// }

type ItemType = {
    id: string
    item: string
    about?: string
}

type SelectedType = {
    list: ItemType[]

}

const city: ItemType[] = [
    {
        id: v1(),
        item: "New York",
        about: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square."
    },
    {
        id: v1(),
        item: "Orlando",
        about: "Orlando, a city in central Florida, is home to more than a dozen theme parks. Chief among its claims to fame is Walt Disney World, comprised of parks like the Magic Kingdom and Epcot, as well as water parks. Another major destination, Universal Orlando, offers Universal Studios and Islands of Adventure, with the Wizarding World of Harry Potter straddling both."
    },
    {
        id: v1(),
        item: "Sydney",
        about: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs."
    },
    {
        id: v1(),
        item: "Ayia Napa",
        about: "Ayia Napa is a Mediterranean resort town on the southeast coast of Cyprus, known for its beaches. The town's main landmark is the storied, Venetian-era Ayia Napa Monastery, which stands in the central square of Plateia Seferi, surrounded by bars and clubs. Freshly caught seafood is served at Ayia Napa Harbour’s busy tavernas, while adjoining Pantachou Beach offers a stretch of golden sand."
    },
]




export const Select = React.memo(
    function Select(props: SelectedType) {
        let [value, setValue] = useState<string>("City")
        let [collapsed, setCollapsed] = useState<boolean>(false)
        let [focus, setFocus] = useState<boolean>(false)


        const on = {
            border: "1px solid black",
            width: "100px"
            // backgroundColor: "#8ee1ed"
        }

        const body = {
            backgroundColor: focus ? "blue" : "",
            color: focus ? "white" : "",

        }


        const onClick = (item: string) => {
            setValue(item);
            setCollapsed(false)
        }


        // const predicat = (value:string)=>{value===props.list}

        return (
            <div style={on}>
                <div onClick={() => {
                    setCollapsed(!collapsed)
                }}>{value}</div>
                {collapsed ? props.list.map(i =>
                    <div
                        style={body}
                        onMouseEnter={() => {
                            setFocus(true)
                        }}
                        onClick={() => {
                            onClick(i.item)
                        }}
                        key={i.id}>
                        {i.item}
                    </div>) : ""}
                {/*<div>{!collapsed? props.list.filter(predicat(value))}</div>*/}
            </div>
        );
    }
)

export default Select;