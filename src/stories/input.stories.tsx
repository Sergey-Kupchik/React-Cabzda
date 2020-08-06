import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input',
    // component: input,
};

export const UncontrolledInput = () => <input/>;
export const ControlledInputWithFixedValue = () => <input value={"Hi"}/>;
export const TrackValueOfControlledInput = () => {
    const [value, setValue] = useState<string>(" ")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        setValue(text);
    }
    return <><input value={value} onChange={onChange}/></>;
};
export const TrackValueOfUncontrolledInputWithButtonClick = () => {
    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const text = inputRef.current as HTMLInputElement
        setValue(text.value);
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>Save</button>
        {value}</>;
};


export const InputWithCheckbox = () => {
    const [value, setValue] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.checked
        setValue(currentValue)
    }
    return <input type={"checkbox"} checked={value} onChange={onChange}/>;
}


export const ControlledSelect = ()=>{
    const [value, setValue] = useState<string|undefined>(undefined);
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        let newValue = e.currentTarget.value;
        setValue(newValue);
    }

    return <select value={value} onChange={onChange}>
        <option></option>
        <option value={"1"}>Orlando</option>
        <option value={"2"}>Tampa</option>
        <option value={"3"}>Miami</option>
        <option value={"4"}>Ostin</option>
        {value}
    </select>
}
