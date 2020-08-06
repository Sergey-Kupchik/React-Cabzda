import React, {useState} from "react";

type RatingValueTyp =0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultvalue?: RatingValueTyp
    onChange:(value:RatingValueTyp)=>void
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue]=useState<RatingValueTyp>(props.defaultvalue? props.defaultvalue:0)

    return (
        <div>
            <Star selected={value > 0} onClick={()=>{setValue(1); props.onChange(1);}}/>
            <Star selected={value > 1} onClick={()=>{setValue(2); props.onChange(2);}}/>
            <Star selected={value > 2} onClick={()=>{setValue(3); props.onChange(3);}}/>
            <Star selected={value > 3} onClick={()=>{setValue(4); props.onChange(4);}}/>
            <Star selected={value > 4} onClick={()=>{setValue(5); props.onChange(5);}}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: ()=> void
}

    function Star(props: StarPropsType) {
        return <span onClick={props.onClick}> {props.selected ? <b>Srat </b>:"Srat "} </span>
}

export default UncontrolledRating;