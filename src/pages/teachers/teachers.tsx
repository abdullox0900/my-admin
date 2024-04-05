import { useEffect } from 'react'
import useTitle from '../../hooks/useTitle'

export default function Teachers() {

    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Teachers list')

    }, [])


    return (
        <h1>Teachers</h1>
    )
}