import { useEffect, useState } from 'react'
import Main from '../../components/main/main'
import useTitle from '../../hooks/useTitle'
import { Input, Select } from 'antd'
import { IoIosAdd } from "react-icons/io"

import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import StudentForm from '../../components/forms/student_form/student_form'

export default function Students() {

    const { setTitle } = useTitle()
    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    useEffect(() => {
        setTitle('Students List')
    }, [])

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <Main>
            <div className='flex justify-between items-center mb-[25px]'>
                <div className='grid grid-cols-5 items-center gap-[20px] w-[95%]'>
                    <Input placeholder="Izlash..." />
                    <Select
                        placeholder="Barchasi"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' }
                        ]}
                    />
                    <Select
                        placeholder="Kurslar bo’yicha"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' }
                        ]}
                    />
                    <Select
                        placeholder="Status bo’yicha"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' }
                        ]}
                    />
                    <Select
                        placeholder="Moliyaviy holat bo’yicha"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' }
                        ]}
                    />
                </div>
                <button className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400' onClick={onOpenModal}>
                    <IoIosAdd className='text-[#ffff]' />
                </button>
            </div>
            <div className='flex justify-between w-[100%] rounded-[10px] p-[18px] shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mb-[25px]'>
                <span className='w-[100px] font-semibold text-[#4D525B] text-[14px]'>ID</span>
                <span className='w-[200px] font-semibold text-[#4D525B] text-[14px]'>F.I.O</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Guruh</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>O'qituvchi</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Mashg'ulot</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Ota-Ona</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Balans</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Status</span>
                <span className='w-[150px] font-semibold text-[#4D525B] text-[14px] text-right'>Amallar</span>
            </div>
            <ul className='flex flex-col gap-[15px]'>
                {
                    arr.map((item) => {
                        return (
                            <li className='flex justify-between w-[100%] rounded-[10px] px-[18px] p-[15px] shadow-[rgba(0,0,0,0.16)_0px_1px_4px] hover:shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] cursor-pointer transition-all ease' key={item}>
                                <span className='w-[100px] text-[14px] text-slate-400'>#122</span>
                                <span className='w-[200px] text-[14px] text-slate-400'>Abdulloh Abdusalomov</span>
                                <span className='w-[150px] text-[14px] text-slate-400'>F4</span>
                                <span className='w-[150px] text-[14px] text-slate-400'>Rozivoy</span>
                                <span className='w-[150px] text-[14px] text-slate-400'>Foundation (F22-254)</span>
                                <span className='w-[150px] text-[14px] text-slate-400'>90-400-10-10</span>
                                <span className='w-[150px] text-[14px] text-slate-400'>200.000 so’m</span>
                                <span className='w-[150px] text-[14px] text-slate-400'>O’qiyabdi</span>
                                <span className='w-[150px] text-[14px] text-slate-400 text-right'>---</span>
                            </li>
                        )
                    })
                }

            </ul>
            <Modal open={open} onClose={onCloseModal} center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}>
                <h2 className='text-center mb-[25px] text-[22px] text-gray-600 font-medium'>Student qo‘shish</h2>
                <StudentForm />
            </Modal>
        </Main>
    )
}