import { createContext, useState } from "react"

import { childrenType } from '../types/children-type'

type TextContext = {
    title?: string
    setTitle?: string
}

const Context = createContext<TextContext>({})

function TextProvider(props: childrenType) {

    const [title, setTitle] = useState('')

    return (
        <Context.Provider value={{ title, setTitle }}>{props.children}</Context.Provider>
    )
}
export { Context, TextProvider }
