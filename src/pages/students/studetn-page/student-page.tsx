// import {}

import { useEffect } from 'react'
import useTitle from '../../../hooks/useTitle'
import Main from '../../../components/main/main'

function StudentPage() {

    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Student Page')
    })

    return (
        <Main>
            Student Inner Page
        </Main>
    )
}

export default StudentPage