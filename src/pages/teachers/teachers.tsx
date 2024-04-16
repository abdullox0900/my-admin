import { useQuery } from '@tanstack/react-query'
import { Empty, Input, Select, Spin } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import Modal from 'react-responsive-modal'
import TeacherForm from '../../components/forms/teacher_form/teacher_form'
import Main from '../../components/main/main'
import useTitle from '../../hooks/useTitle'

interface DataType {
    id: number
    first_name: string
    last_name: string
    age: number
    status: number
    birth_date: string
    updated_at: string
    created_at: string
    deleted_at: string
    gender: string
    phone: string
}

export default function Teachers() {

    const { setTitle } = useTitle()
    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    useEffect(() => {
        setTitle('Teachers list')
    }, [])

    // https://edu.backofficee.uz/api/v1/teachers/

    const teachersData = async () => {
        const response = await axios.get('https://edu.backofficee.uz/api/v1/teachers/')
        return response.data
    }

    const { isLoading, isError, data } = useQuery({
        queryKey: ['teacher'],
        queryFn: teachersData
    })

    // ======= // Is Error // ======= //
    if (isError) {
        return <h1>Malumot olishda xatoli yuzberdi</h1>
    }

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
            <div className="max-h-[73vh] sticky overflow-y-auto">
                <div className='flex sticky top-0 justify-between w-[100%] p-[18px] bg-white mb-[5px]'>
                    <span className='w-[50px] font-semibold text-[#4D525B] text-[14px]'>Rs</span>
                    <span className='w-[200px] font-semibold text-[#4D525B] text-[14px]'>F.I.O</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Yonalish</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Guruhlari</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px]'>Telfon raqam</span>
                    <span className='w-[150px] font-semibold text-[#4D525B] text-[14px] text-right'>Amallar</span>
                </div>
                {
                    data?.length == 0 ? (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    ) : (
                        <ul className='flex flex-col gap-[15px]'>
                            {
                                isLoading ? (
                                    <Spin />
                                ) : (
                                    data?.slice(0, 8)?.map((item: DataType) => {
                                        return (
                                            <li className='flex items-center justify-between w-[100%] px-[18px] py-[15px] bg-white border border-gray-200  rounded-[8px] cursor-pointer transition-all ease hover:bg-gray-200' key={item.id}>
                                                <div className='w-[50px] h-[31px]'>
                                                    <span className=' flex justify-center items-center w-[30px] h-[30px] bg-orange-400 rounded-full text-white'>{item.first_name.charAt(0)}</span>
                                                </div>
                                                <span className='w-[200px] text-[16px] text-slate-500 font-semibold'>{`${item.first_name} ${item.last_name}`}</span>
                                                <span className='w-[150px] text-[16px] text-slate-500'>{item.status}</span>
                                                <span className='w-[150px] text-[16px] text-slate-500'>0</span>
                                                <span className='w-[150px] text-[16px] text-slate-500'>{item.phone}</span>
                                                <span className='w-[150px] text-[14px] text-slate-400 text-right'></span>
                                            </li>
                                        )
                                    })
                                )
                            }
                        </ul>
                    )
                }
            </div>

            <Modal open={open} onClose={onCloseModal} center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}>
                <h2 className='text-center mb-[25px] text-[22px] text-gray-600 font-medium'>Teacher qo‘shish</h2>
                <TeacherForm />
            </Modal>
        </Main >
    )
}