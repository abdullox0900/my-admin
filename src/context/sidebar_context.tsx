import { createContext, useEffect, useState } from "react"
import { childrenType } from '../types/children-type'

const Context = createContext({})

function SidebarToggle(props: childrenType) {

    const [modifier, setModifier] = useState(() => {
        const storedValue = localStorage.getItem('modifier')
        return storedValue ? JSON.parse(storedValue) : false
    })

    useEffect(() => {
        localStorage.setItem('modifier', JSON.stringify(modifier))
    }, [modifier])

    return (
        <Context.Provider value={{ modifier, setModifier }}>{props.children}</Context.Provider>
    )
}

export { Context, SidebarToggle }