import { createContext, useState } from "react"
import { childrenType } from '../types/children-type'

type SidebarType = object

const Context = createContext<SidebarType>({})

function SidebarToggle(props: childrenType) {
    const [modifier, setModifier] = useState(false)

    return (
        <Context.Provider value={{ modifier, setModifier }}>{props.children}</Context.Provider>
    )
}

export { Context, SidebarToggle }