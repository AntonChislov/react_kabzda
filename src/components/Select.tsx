import {useState} from "react";

type SelectType = {
    items: Array<{ title: string, value: number }>
    titleHeader: string
}

export const MySelect = ({items, titleHeader}: SelectType) => {

    const [title, setTitle] = useState(titleHeader)
    const [collapsed, setCollapsed] = useState(false)

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    const changeTitle = (title: string) => {
        setTitle(title)
        setCollapsed(true)
    }

    return (
        <div style={{marginLeft: '30px'}}>
            <div onClick={collapsedHandler}>{title}</div>
            {!collapsed && <ul>
                {items.map(i => <li onClick={() => changeTitle(i.title)} key={i.value}>{i.title}</li>)}
            </ul>}
        </div>
    )
}