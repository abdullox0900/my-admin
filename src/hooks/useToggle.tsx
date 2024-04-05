import { useContext } from "react"
import { Context } from "../context/sidebar_context"

const useSidebarToggle = () => {
    const { modifier, setModifier } = useContext(Context)

    return { modifier, setModifier }
}

export default useSidebarToggle