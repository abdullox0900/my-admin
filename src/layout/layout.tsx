import { IoIosArrowBack } from "react-icons/io"
import { Outlet } from "react-router-dom"
import Header from './header'
import Sidebar from './sidebar'
import { useState } from 'react'


export default function LayoutComponent() {

    const [arr, setArr] = useState(false)

    return (
        <div className='flex flex-row h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='relative top-[50%] w-[20px] cursor-pointer' onClick={() => setArr(!arr)}>
                <IoIosArrowBack className='text-[25px] text-slate-400' />
            </div>
            <div style={{ transition: 'all 1s ease' }} className='w-full bg-[#fff] m-[10px] p-[25px] relative overflow-y-auto rounded-[20px] shadow-lg'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}