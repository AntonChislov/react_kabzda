import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import {Rating, RatingValueType} from './components/Rating';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {BasicSelect, ItemsType} from "./components/SelectMUI";
import {MySelect} from "./components/Select";

function App() {

    const [rating, setRating] = useState<RatingValueType>(0)

    const [on, setOn] = useState<boolean>(false)

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const items = [
        {title: 'eat', value: 1}, {title: 'sleep', value: 2}, {title: 'game', value: 3}
    ]

    return (
        <div className="App">
            <div>
                <h1>Uncontrolled items</h1>
                <UncontrolledAccordion liList={['HTML', 'CSS', 'React']} title={'Technologies'}/>
                <UncontrolledRating/>
                <UncontrolledOnOff/>
            </div>
            <div style={{margin: '0 0 0 100px'}}>
                <h1>Controlled items</h1>
                <Accordion liList={['eat', 'sleep', 'game']} title={'Tasks'} setCollapsed={setCollapsed} collapsed={collapsed}/>
                <Rating callBackRating={setRating} rating={rating}/>
                <OnOff on={on} setOn={setOn}/>
            </div>
            <MySelect titleHeader={'Tasks'} items={items}/>
        </div>
    );
}

export default App;
