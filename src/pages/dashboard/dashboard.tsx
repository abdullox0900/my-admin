import { useEffect } from 'react'
import useTitle from '../../hooks/useTitle'

export default function Dashboard() {

    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Dashboard')
    }, [])

    return (
        <>

        </>
    )
}