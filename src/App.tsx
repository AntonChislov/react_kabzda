import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import { Rating } from './components/Rating';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <UncontrolledAccordion liList={['HTML', 'CSS', 'React']} title={'Technologies'}/>
            <Accordion liList={['eat', 'sleep', 'game']} title={'Tasks'} collapsed={false}/>
            <UncontrolledRating/>
            <Rating rating={3}/>
            <OnOff/>
        </div>
    );
}

export default App;
