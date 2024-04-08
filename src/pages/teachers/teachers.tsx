import { Input, Select } from 'antd'
import { useEffect, useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import Modal from 'react-responsive-modal'
import TeacherForm from '../../components/forms/teacher_form/teacher_form'
import Main from '../../components/main/main'
import useTitle from '../../hooks/useTitle'

export default function Teachers() {

    const { setTitle } = useTitle()
    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    useEffect(() => {
        setTitle('Teachers list')

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
                </div>
                <button className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400' onClick={onOpenModal}>
                    <IoIosAdd className='text-[#ffff]' />
                </button>
            </div>
            <div className="max-h-[73vh] sticky overflow-y-auto rounded-[10px] border border-[rgba(0,0,0,0.16)_0px_1px_4px]">
                <div className='flex sticky top-0 justify-between w-[100%] p-[18px] bg-white mb-[25px] border-b border-[rgba(0,0,0,0.16)_0px_1px_4px]'>
                    <span className='w-[50px] font-semibold text-[#4D525B] text-[14px]'>Rs</span>
                    <span className='w-[200px] font-semibold text-[#4D525B] text-[14px]'>F.I.O</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Yonalish</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Guruhlari</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Telfon raqam</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px] text-right'>Amallar</span>
                </div>
                <ul className='flex flex-col '>
                    {
                        arr.map((item) => {
                            return (
                                <li className='flex items-center justify-between w-[100%] px-[18px] py-[20px] border-b border-[rgba(0,0,0,0.16)_0px_1px_4px] hover:shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] cursor-pointer transition-all ease' key={item}>
                                    <div className='w-[50px] h-[31px]'>
                                        <span className='w-[30px] h-[30px] bg-slate-400 rounded-full'></span>
                                    </div>
                                    <span className='w-[200px] text-[14px] text-slate-400'>Abdulloh Abdusalomov</span>
                                    <span className='w-[150px] text-[14px] text-slate-400'>Frontend</span>
                                    <span className='w-[150px] text-[14px] text-slate-400'>4</span>
                                    <span className='w-[150px] text-[14px] text-slate-400'>90-043-11-10</span>
                                    <span className='w-[150px] text-[14px] text-slate-400 text-right'></span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            <Modal open={open} onClose={onCloseModal} center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}>
                <h2 className='text-center mb-[25px] text-[22px] text-gray-600 font-medium'>Teacher qo‘shish</h2>
                <TeacherForm />
            </Modal>
        </Main>
    )
}