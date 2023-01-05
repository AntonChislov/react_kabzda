import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import {Rating, RatingValueType} from './components/Rating';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";

function App() {

    const [rating, setRating] = useState<RatingValueType>(0)

    const [on, setOn] = useState<boolean>(false)

    const [collapsed, setCollapsed] = useState<boolean>(false)

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
        </div>
    );
}

export default App;
