import { useEffect } from 'react'
import useTitle from '../../hooks/useTitle'
import Main from '../../components/main/main'

import { FaChalkboardTeacher } from "react-icons/fa"
import { PiStudentDuotone } from "react-icons/pi"
import { MdGroups3 } from "react-icons/md"
import { CiBoxList } from "react-icons/ci"
import { MdOutlineAttachMoney } from "react-icons/md"


export default function Dashboard() {

    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Dashboard')
    }, [])

    return (
        <Main>
            <div className='grid gap-5 grid-cols-5 grid-rows-3'>
                <div className='flex items-center gap-[20px] p-[30px] w-[100%] h-[100px] bg-blue-300 rounded-[10px]'>
                    <FaChalkboardTeacher className='text-[35px] text-[#fff]' />
                    <div>
                        <div className='text-[18px] text-[#fff] font-medium'>Teachers</div>
                        <div className='text-[24px] text-[#fff] font-bold'>20</div>
                    </div>
                </div>
                <div className='flex items-center gap-[20px] p-[30px] w-[100%] h-[100px] bg-red-300 rounded-[10px]'>
                    <PiStudentDuotone className='text-[35px] text-[#fff]' />
                    <div>
                        <div className='text-[18px] text-[#fff] font-medium'>Students</div>
                        <div className='text-[24px] text-[#fff] font-bold'>140</div>
                    </div>
                </div>
                <div className='flex items-center gap-[20px] p-[30px] w-[100%] h-[100px] bg-orange-300 rounded-[10px]'>
                    <MdGroups3 className='text-[35px] text-[#fff]' />
                    <div>
                        <div className='text-[18px] text-[#fff] font-medium'>Groups</div>
                        <div className='text-[24px] text-[#fff] font-bold'>24</div>
                    </div>
                </div>
                <div className='flex items-center gap-[20px] p-[30px] w-[100%] h-[100px] bg-orange-300 rounded-[10px]'>
                    <CiBoxList className='text-[35px] text-[#fff]' />
                    <div>
                        <div className='text-[18px] text-[#fff] font-medium'>Courses</div>
                        <div className='text-[24px] text-[#fff] font-bold'>7</div>
                    </div>
                </div>
                <div className='flex items-center gap-[20px] p-[30px] w-[100%] h-[100px] bg-green-300 rounded-[10px]'>
                    <MdOutlineAttachMoney className='text-[35px] text-[#fff]' />
                    <div>
                        <div className='text-[18px] text-[#fff] font-medium'>Balance</div>
                        <div className='text-[24px] text-[#fff] font-bold'>8 550 000s</div>
                    </div>
                </div>
            </div>
        </Main>
    )
}