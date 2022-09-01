import React, {useState} from 'react';
import {Story} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {AccordionControled, AccordionControlledPropsType} from "./AccordionControled";

export default {
    title: 'AccordionControled',
    component: AccordionControled,
    argsTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    }
}

const callback = action('change collapsed')
const callbackOnClick = action('accordion show value')

const Template: Story<AccordionControlledPropsType> = (args) => <AccordionControled {...args} items={[
    {title: 'Bob', value: '1'},
    {title: 'Nick', value: '2'},
    {title: 'John', value: '3'},
]} onClickAccordion={callbackOnClick}/>

export const CollapsedMode = Template.bind({})

CollapsedMode.args  = {
    titleValue: 'Collapsed Menu',
    collapsedMenu: true,
    changeCollapse: callback
}

// Такая запись через Template и args позволяет в дальнейшем в storybook во вкладке docs изменять
// входящие параметры и сразу видеть как это влияет отображения компоненты

export const UnCollapsedMode = Template.bind({})

UnCollapsedMode.args  = {
    titleValue: 'UnCollapsed Menu',
    collapsedMenu: false,
    changeCollapse: callback
}



export const ChangeMode: Story<AccordionControlledPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <AccordionControled {...args} onClickAccordion={callbackOnClick} collapsedMenu={value} changeCollapse={()=>setValue(!value)} items={[
        {title: 'Bob', value: '1'},
        {title: 'Nick', value: '2'},
        {title: 'John', value: '3'},
    ]}/>
}
ChangeMode.args = {
    titleValue: 'Change Mode Menu',
    changeCollapse: callback,
    collapsedMenu: false
}