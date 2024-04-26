import { useEffect } from 'react'
import useTitle from '../../../hooks/useTitle'
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { FaChalkboardTeacher } from "react-icons/fa"
import { BsCalendarDate } from "react-icons/bs"
import { MdAttachMoney } from "react-icons/md"
import { PiStudent } from "react-icons/pi"
import { LiaLayerGroupSolid } from "react-icons/lia"


function TeacherPage() {

    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Teacher Abdullox')
    }, [])

    return (
        <section className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="row-span-5 h-[600px] border border-[#d9d9d9] rounded-[10px] py-[15px] px-[25px]">
                <div className='w-[120px] h-[120px] bg-gray-600 rounded-full mx-auto mt-[10px] mb-[25px] overflow-hidden'>
                    <img className='object-cover w-[120px] h-[120px]' src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=" alt="" />
                </div>
                <ul className='flex flex-col gap-[15px]'>
                    <li className='flex items-center gap-[10px] text-[#2b3674] font-semibold'>
                        <FaUserAlt className='text-gray-400 ' />
                        Abdusalomov Abdullox
                    </li>
                    <li className='flex items-center gap-[10px] text-[#2b3674] font-semibold'>
                        <FaChalkboardTeacher className='text-gray-400' />
                        English Teacher
                    </li>
                    <li className='flex items-center gap-[10px] text-[#2b3674] font-semibold'>
                        <BsCalendarDate className='text-gray-400' />
                        2003.02.03
                    </li>
                    <li className='flex items-center gap-[10px] text-[#2b3674] font-semibold'>
                        <BsFillTelephoneFill className='text-gray-400' />
                        +998 90 043 11 60
                    </li>
                </ul>
            </div>
            <div className="col-span-4 h-[150px rounded-[10px]">
                <ul className='grid grid-cols-3 gap-[20px]'>
                    <li className='flex justify-between relative overflow-hidden w-full h-[150px] p-[20px] bg-[linear-gradient(147deg,#4facfe,#00f2fe)] rounded-[10px]'>
                        <span className='text-white text-[28px] font-bold'>Students</span>
                        <span className='text-white text-[35px]'>28</span>
                        <span className='absolute left-[-35px] bottom-[-20px]'>
                            <PiStudent className='text-white opacity-50 text-[105px]' />
                        </span>
                    </li>
                    <li className='flex justify-between relative overflow-hidden w-full h-[150px] p-[20px] bg-[linear-gradient(147deg,#a18cd1,#a18cd1)] rounded-[10px]'>
                        <span className='text-white text-[28px] font-bold'>Groups</span>
                        <span className='text-white text-[35px]'>3</span>
                        <span className='absolute left-[-35px] bottom-[-20px]'>
                            <LiaLayerGroupSolid className='text-white opacity-50 text-[105px]' />
                        </span>
                    </li>
                    <li className='flex justify-between relative overflow-hidden w-full h-[150px] p-[20px] bg-[linear-gradient(147deg,#FFE53B_0%,#FF2525_74%)] rounded-[10px]'>
                        <span className='text-white text-[28px] font-bold'>Balance</span>
                        <span className='text-white'>15 000 000som</span>
                        <span className='absolute left-[-35px] bottom-[-20px]'>
                            <MdAttachMoney className='text-white opacity-50 text-[105px]' />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="col-span-4 row-span-4 col-start-2 row-start-2 border border-[#d9d9d9] rounded-[10px]"></div>
        </section>
    )
}

export default TeacherPage