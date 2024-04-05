import { childrenType } from '../../types/children-type'

function Main(props: childrenType) {
    return (
        <main className='py-[25px]'>{props.children}</main>
    )
}

export default Main