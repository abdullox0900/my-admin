import { useEffect } from 'react'
import useTitle from '../../hooks/useTitle'
import TopFilter from '../../components/top_filter/top_filter'
import Main from '../../components/main/main'
import TeachersList from '../../components/teachers_list/teachers_list'

export default function Teachers() {

    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Teachers list')

    }, [])

    return (
        <Main>
            <TopFilter />
            <TeachersList />
        </Main>
    )
}