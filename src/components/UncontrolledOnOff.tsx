import React, {useState} from 'react';

export const UncontrolledOnOff = () => {

    const [active, setActive] = useState(false)

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: active ? 'green' : ''
    }

    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: active ? '' : 'red'
    }

    const indicatorStyle = {
        width: '17px',
        height: '17px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '8px',
        backgroundColor: active ? 'green' : 'red'
    }

    return (
        <div style={{margin: '30px 0 0 20px'}}>
            <div onClick={() => setActive(true)} style={onStyle}>On</div>
            <div onClick={() => setActive(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    );
}

