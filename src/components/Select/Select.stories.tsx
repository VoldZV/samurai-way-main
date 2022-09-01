import React, {useState} from 'react';
import './select.css'


import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

export const UnCollapsedSelectValueBob = () => {
    return <Select setCollapseSelect={() => {}} collapseSelect={false} onChange={()=>{}} value={'Bob'} items={[
        {title: 'Bob', value: '1'},
        {title: 'Nick', value: '2'},
        {title: 'John', value: '3'},
    ]}/>
}

export const CollapsedSelectValueNick = () => {
    return <Select setCollapseSelect={() => {}} collapseSelect={true} onChange={()=>{}} value={'Nick'} items={[
        {title: 'Bob', value: '1'},
        {title: 'Nick', value: '2'},
        {title: 'John', value: '3'},
    ]}/>
}

export const ChangeSelectModeAndValue = () => {
    const items = [
        {title: 'Bob', value: '1'},
        {title: 'Nick', value: '2'},
        {title: 'John', value: '3'},
    ]

    const [collapseSelect, setCollapseSelect] = useState<boolean>(true)
    const [select, setSelect] = useState(items[0].title)
    const onChangeSelect = (itemTitle: any) => setSelect(itemTitle)

    return <Select setCollapseSelect={setCollapseSelect} collapseSelect={collapseSelect} onChange={onChangeSelect} value={select} items={items}/>
}
