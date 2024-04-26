import { useContext } from "react"
import { Context } from "../context/title_context"

const useTitle = () => {
    const { title, setTitle } = useContext(Context)

    return { title, setTitle }
}

export default useTitle