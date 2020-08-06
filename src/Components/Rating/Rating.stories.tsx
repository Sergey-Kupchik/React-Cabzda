import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Rating, ratingValueType} from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
};
const callBack = action('star was clicked');

export const Rating0 = () => <Rating value={0} onClick={callBack}/>
export const Rating1 = () => <Rating value={1} onClick={callBack}/>
export const Rating2 = () => <Rating value={2} onClick={callBack}/>
export const Rating3 = () => <Rating value={3} onClick={callBack}/>
export const Rating4 = () => <Rating value={4} onClick={callBack}/>
export const Rating5 = () => <Rating value={5} onClick={callBack}/>
export const RatingChanging =()=>{
    let [ratingValue, setRatingValue] = useState<ratingValueType>(3)
    return <Rating value={ratingValue} onClick={setRatingValue}/>
}


