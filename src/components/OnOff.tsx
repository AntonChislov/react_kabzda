import React from 'react';

export type OnOffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
}

export const OnOff = ({on, setOn}: OnOffPropsType) => {


    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : ''
    }

    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? '' : 'red'
    }

    const indicatorStyle = {
        width: '17px',
        height: '17px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '8px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div style={{margin: '30px 0 0 20px'}}>
            <div onClick={() => setOn(!on)} style={onStyle}>On</div>
            <div onClick={() => setOn(!on)} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    );
}

