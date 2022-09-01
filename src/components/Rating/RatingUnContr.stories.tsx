import React from 'react';
import { RatingUnContr } from './RatingUnContr';

export default {
    title: 'RatingUnContr',
    component: RatingUnContr,
}

export const EmptyRating = () => <RatingUnContr defaultValue={0}/>
export const DefaultValue1 = () => <RatingUnContr defaultValue={1}/>
export const DefaultValue2 = () => <RatingUnContr defaultValue={2}/>
export const DefaultValue3 = () => <RatingUnContr defaultValue={3}/>
export const DefaultValue4 = () => <RatingUnContr defaultValue={4}/>
export const DefaultValue5 = () => <RatingUnContr defaultValue={5}/>

