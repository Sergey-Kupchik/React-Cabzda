import React, {useState, KeyboardEvent} from "react";
import {v1} from "uuid";
import {debuglog} from "util";
import style from "./select2.module.css";


export type Select2PropsType = {
    value?: any
    onChage: (v: any) => void
    item: ItemType[]
}

type ItemType = {
    value: any
    title: string
}


export function Select2(props: Select2PropsType) {

    let [active, setActive] = useState<boolean>(false)
    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const toggleItems = () => setActive(!active);

    const selectItem = props.item.find(i => i.value === props.value);
    const hoveredItem = props.item.find(i => i.value === hoveredElementValue);
    const onItemClick = (value: any) => {
        props.onChage(value);
        toggleItems();
    }
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        debugger
        if (e.key === "ArrowDown") {
            for (let i = 0; i < props.item.length; i++) {
                if (props.item[i].value === hoveredElementValue) {
                    if (props.item[i + 1]) {
                        setHoveredElementValue(props.item[i + 1].value);
                        props.onChage(props.item[i + 1].value);
                        return
                    }
                    setHoveredElementValue(props.item[i].value);
                    props.onChage(props.item[i].value)
                    return
                }
            }
            setHoveredElementValue(props.item[0].value);
            props.onChage(props.item[0].value)
        }
        if (e.key === "ArrowUp") {
            for (let i = 0; i < props.item.length; i++) {
                if (props.item[i].value === hoveredElementValue) {
                    if (props.item[i - 1]) {
                        setHoveredElementValue(props.item[i - 1].value);
                        props.onChage(props.item[i - 1].value);
                        return
                    }
                    setHoveredElementValue(props.item[i].value);
                    props.onChage(props.item[i].value)
                    return
                }
            }
            setHoveredElementValue(props.item[0].value);
            props.onChage(props.item[0].value)
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }


    }

    return (<>
            <div className={style.select} onKeyDown={onKeyDown} tabIndex={0}>
                <span className={style.main} onClick={toggleItems}>
                    {selectItem && selectItem.title}
                </span>
                {active &&
                <div className={style.items}>
                    {props.item.map(i => <div
                        onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                        className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}>
                        {i.title}
                    </div>)}
                </div>
                }
            </div>
        </>
    );
}

export default ItemType;