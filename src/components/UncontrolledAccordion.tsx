import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    liList: string[]
}

export const UncontrolledAccordion = ({title, liList}: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    const onClickHandle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <div onClick={onClickHandle} style={{backgroundColor: 'red', display: 'inline-block'}}>{title}</div>
            {!collapsed && <ul>
                {liList.map((li, index) => <li key={index}>{li}</li>)}
            </ul>}
        </div>
    );
}

