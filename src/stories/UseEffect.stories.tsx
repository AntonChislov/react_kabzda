import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect from counter')
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        console.log('useEffect all')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect every one')
        document.title = counter.toString()
    }, [])

    return <>
        <div>Count: {counter}</div>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <div>Fake: {fake}</div>
        <button onClick={() => setFake(state => state + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [date, setDate] = useState<Date>(new Date)
    const [timer, setTimer] = useState(1)
    console.log('SetTimeoutExample')
    useEffect(() => {
        console.log('useEffect from counter')
        setTimer(+setInterval(() => {
            setDate(new Date)
        }, 1000))
    }, [])

    let resDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    const format = new Intl.DateTimeFormat('eng',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }).format(date)

    return <>
        <div> Date native: {resDate}</div>
        <div> Date use format: {format}</div>
        <button onClick={() => clearInterval(timer)}>pause</button>
    </>
}