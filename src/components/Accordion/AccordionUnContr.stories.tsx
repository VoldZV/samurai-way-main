import React from 'react';
import {AccordionUnContr} from "./AccordionUnContr";

export default {
    title: 'AccordionUnControlled',
    component: AccordionUnContr,
}

export const DefaultCollapsed = () => <AccordionUnContr titleValue={'Default Collapsed'} defaultCollapseValue={true}/>
export const DefaultUnCollapsed = () => <AccordionUnContr titleValue={'Default UnCollapsed'} defaultCollapseValue={false}/>
export const WithoutDefaultCollapsedValue = () => <AccordionUnContr titleValue={'Without Default Value'} />

