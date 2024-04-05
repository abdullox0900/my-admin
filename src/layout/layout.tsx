import { IoIosArrowBack } from "react-icons/io"
import { Outlet } from "react-router-dom"
import Header from './header'
import Sidebar from './sidebar'
import useSidebarToggle from '../hooks/useToggle'

export default function LayoutComponent() {

    const { modifier, setModifier } = useSidebarToggle()

    return (
        <div className='flex flex-row h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex items-center justify-center absolute w-[30px] h-[30px] bg-[#fff] top-[50%] cursor-pointer' onClick={() => setModifier(!modifier)}>
                <IoIosArrowBack className='text-[25px] text-slate-400' />
            </div>
            <div style={{ transition: 'all 1s ease' }} className='w-full bg-[#fff] m-[10px] p-[25px] relative overflow-y-auto rounded-[20px] shadow-lg'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}