import { useContext } from "react"
import { Context } from "../context/title_context"

type ContextType = {
    title?: string
    setTitle: string
}

const useTitle = () => {
    const { title, setTitle } = useContext<ContextType>(Context)

    return { title, setTitle }
}

export default useTitle