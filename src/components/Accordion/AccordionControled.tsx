import React from 'react';


type ItemType = {
    title: string
    value: any
}

export type AccordionControlledPropsType = {
    titleValue: string
    /**
     * This parameter is responsible for opening or closing the accordion
     */
    collapsedMenu: boolean
    /**
     * Callback that is called when user clicked on Title. Change collapsedMenu
     * @param collapseValue
     */
    changeCollapse: (collapseValue: boolean)=> void
    color?:string
    items: Array<ItemType>
    onClickAccordion: (value: any)=> void
}


export const AccordionControled = (props: AccordionControlledPropsType) => {

    return (
        <div>
            <AccordionTitle collapsedMenu={props.collapsedMenu}
                            changeCollapse={props.changeCollapse}
                            title={props.titleValue}
                            color={props.color}
            />
            {!props.collapsedMenu && <AccordionBody items={props.items} onClickAccordion={props.onClickAccordion}/>}
        </div>

    );
}



type AccordionTitlePropsType = {
    changeCollapse: (collapseValue: boolean)=> void
    title: string
    collapsedMenu: boolean
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const collapsMenuHandler = () => {
        props.changeCollapse(!props.collapsedMenu)
    }
    return (
        <h4 onClick={collapsMenuHandler} style={{color: props.color? props.color : 'black'}}>{props.title}</h4>
    );
}

type AccordionBodyType = {
    items: Array<ItemType>
    onClickAccordion: (value: any)=> void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((el,i) => <li onClick={()=> props.onClickAccordion(el.value)} key={i}>{el.title}</li>)}
        </ul>
    );
}