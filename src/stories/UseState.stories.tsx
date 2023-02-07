import React, {useMemo, useState} from 'react';
import {Accordion, AccordionPropsType} from '../components/Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';

export default {
    title: 'useState demo',
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(() => {
        console.log('generateData')
        return 1
    })

    return <>
        <div>Count: {counter}</div>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
    </>
}