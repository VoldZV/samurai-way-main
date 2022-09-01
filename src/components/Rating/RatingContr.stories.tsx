import React, {useState} from 'react';

import { RatingContr } from './RatingContr';
import {RatingValueType} from "../../App";

export default {
    title: 'RatingContr',
    component: RatingContr,
}

export const EmptyRatingContr = () => <RatingContr raitingValue={0} changeRating={()=>{}}/>
export const RatingContr1 = () => <RatingContr raitingValue={1} changeRating={()=>{}}/>
export const RatingContr2 = () => <RatingContr raitingValue={2} changeRating={()=>{}}/>
export const RatingContr3 = () => <RatingContr raitingValue={3} changeRating={()=>{}}/>
export const RatingContr4 = () => <RatingContr raitingValue={4} changeRating={()=>{}}/>
export const RatingContr5 = () => <RatingContr raitingValue={5} changeRating={()=>{}}/>
export const ChangeRatingContr = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return <RatingContr raitingValue={rating} changeRating={setRating}/>
}