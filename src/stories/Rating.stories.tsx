import React, {useState} from 'react';
import {Rating, RatingValueType} from "../components/Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const Rating0 = () => <Rating rating={0} callBackRating={x=>x}/>
export const Rating1 = () => <Rating rating={1} callBackRating={x=>x}/>
export const Rating2 = () => <Rating rating={2} callBackRating={x=>x}/>
export const Rating3 = () => <Rating rating={3} callBackRating={x=>x}/>
export const Rating4 = () => <Rating rating={4} callBackRating={x=>x}/>
export const Rating5 = () => <Rating rating={5} callBackRating={x=>x}/>
export const RatingChange = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating rating={rating} callBackRating={setRating} />
}

