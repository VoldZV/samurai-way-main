import React, {useState, KeyboardEvent, useEffect} from 'react';
import './select.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: Array<ItemType>
    collapseSelect: boolean
    setCollapseSelect: (collapseSelect: boolean) => void
}

export const Select = (props: SelectPropsType) => {
    const [hoveredEl, setHoveredEl] = useState(props.value)

    const onClickHandler = (title: string) => {
        props.onChange(title)
        props.setCollapseSelect(!props.collapseSelect)
    }

    useEffect(() => {
        setHoveredEl(props.value)
    }, [props.value])

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        // отменяем стандартное поведение при нажатии на клавиши, чтобы при активном select не прокучивалась страница
        // чтобы div мог быть активным - ниже мы передаем ему атрибут tabindex
        e.preventDefault()
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            let hoverElIndex = props.items.findIndex(el => el.title === hoveredEl)
            const index = e.key === 'ArrowDown' ? hoverElIndex + 1 : hoverElIndex - 1
            if (props.items[index]) {
                props.onChange(props.items[index].title)
                // setHoveredEl(props.items[index].title) // если без useEffect
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            props.setCollapseSelect(!props.collapseSelect)
        }
    }

    return (
        <div className={'wrapperOfSelect'} tabIndex={0} onKeyDown={onKeyDown}>
            <div className={'select'} onClick={() => props.setCollapseSelect(!props.collapseSelect)}>{props.value}</div>
            <div className={'itemsBlock'}>
                {!props.collapseSelect && props.items.map((el, i) => {
                    return <div key={i}
                                onMouseEnter={() => setHoveredEl(el.title)}
                                onMouseLeave={() => setHoveredEl(props.value)}
                                className={'items' + ' ' + (hoveredEl === el.title ? 'selected' : '')}
                                onClick={() => onClickHandler(el.title)}>{el.title}</div>
                })}
            </div>
            <div>HELLO!!! The menu should overlap <br/> this inscription <br/> The menu should overlap <br/> this
                inscription
            </div>
        </div>
    );
};
