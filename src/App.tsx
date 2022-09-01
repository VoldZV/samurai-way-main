import React, {useState} from 'react';
import './App.css';
import {RatingUnContr} from "./components/Rating/RatingUnContr";
import {OnOff1, OnOff2, OnOff3} from "./components/OnOff/OnOff";
import { AccordionUnContr } from './components/Accordion/AccordionUnContr';
import {AccordionControled} from "./components/Accordion/AccordionControled";
import {RatingContr} from "./components/Rating/RatingContr";
import {OnOffControl} from "./components/OnOff/OnnOff-Control";
import {Select} from "./components/Select/Select";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {


    // State для контролируемых accordion, Rating, OnOff
    const [collapseAcc, setCollapseAcc] = useState<boolean>(false)
    const [raitingValue, setRatingValue] = useState<RatingValueType>(0)
    const [on, setOn] = useState<boolean>(true)

    const onClickAccordion = (value: any) => {
        console.log(value)
    }

    // State для select компоненты
    const items = [
        {title: 'Bob', value: '1'},
        {title: 'Nick', value: '2'},
        {title: 'John', value: '3'},
    ]
    const [collapseSelect, setCollapseSelect] = useState<boolean>(true)
    const [select, setSelect] = useState(items[0].title)
    const onChangeSelect = (itemTitle: any) => setSelect(itemTitle)

    return (
        <div className="App">
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <RatingUnContr />
            <AccordionUnContr titleValue={'МЕНЮ 1 (НАЖМИ)'} />
            <AccordionUnContr titleValue={'МЕНЮ 2 (НАЖМИ)'} />
            Article 2
            <RatingUnContr />
            <hr/>
            <div>Кнопки On Off</div>
            Мой вариант через классы
            <OnOff1 on={true}/>
            <hr/>
            <OnOff1 on={false}/>
            <hr/>
            Вариант Димыча в видео через инлайн стили (style - атрибут)
            <OnOff2 on={true}/>
            <hr/>
            <OnOff2 on={false}/>
            <hr/>
            Вариант Димыча в видео через useState (по нажатию на кнопку)
            <OnOff3/>
            <hr/>
            <OnOff3/>
            <hr/>
            <div>Контролируемый аккордион</div>
            <AccordionControled titleValue={'МЕНЮ 1 (НАЖМИ)'}
                                collapsedMenu={collapseAcc}
                                changeCollapse={setCollapseAcc}
                                items={items}
                                onClickAccordion={onClickAccordion}
            />
            <hr/>
            <div>Контролируемый Rating</div>
            <RatingContr raitingValue={raitingValue}
                        changeRating={setRatingValue}
            />
            <hr/>
            <div>Контролируемый Onn Off</div>
            <OnOffControl on={on} setOn={setOn}/>
            <div>Контролируемый Select через div</div>
            <Select setCollapseSelect={setCollapseSelect} collapseSelect={collapseSelect} items={items} onChange={onChangeSelect} value={select}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
