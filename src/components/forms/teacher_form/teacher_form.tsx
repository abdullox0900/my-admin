import { Button, DatePicker, Input, Radio, Select, message } from "antd"
import axios from 'axios'
import { useState } from 'react'

function TeacherForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const [genre, setGenre] = useState('')
    const [status, setStatus] = useState('')

    const [messageApi, contextHolder] = message.useMessage()

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Ma’lumot  jo‘natildi 😊',
        })
    }

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Xatolik yuz berdi! 😱',
        })
    }

    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'Ma’lumot toldiring 😕',
        })
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setBirthDate('')
        setGenre('')
        setPhone('')
        setStatus('')
    }

    const onSubmit = () => {
        if (firstName !== '' && lastName !== '' && birthDate !== '' && genre !== '' && status !== '' && phone !== '') {
            const data = {
                first_name: firstName,
                last_name: lastName,
                birth_date: birthDate,
                gender: genre,
                status: status,
                phone: phone,
            }

            try {
                axios.post('https://edu.backofficee.uz/api/v1/teachers/', data).then(res => {
                    if (res) {
                        clearInput()
                    }
                }).finally(() => {
                    success()
                }).catch(() => {
                    error()
                })
            } catch (err) {
                error()
            }
        } else {
            warning()

        }
    }

    return (
        <>
            {contextHolder}
            <form className='flex flex-col gap-[20px]'>
                <Input placeholder='Ism' value={firstName} size='large' onChange={(e) => setFirstName(e.target.value)} />
                <Input placeholder='Falimiya' value={lastName} size='large' onChange={(e) => setLastName(e.target.value)} />
                <Input placeholder='Telfon raqam' value={phone} size='large' onChange={(e) => setPhone(e.target.value)} />
                <DatePicker placeholder='Tugilgan kuni' size='large' onChange={(e) => setBirthDate(e.format().slice(0, 10))
                } />
                <Select
                    placeholder="Yonalish"
                    value={status}
                    size='large'
                    onChange={(value) => setStatus(value)}
                    options={[
                        { value: '1', label: 'Frontend' },
                        { value: '2', label: 'Backend' }
                    ]}
                />
                <Radio.Group value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <Radio value={'male'}>Male</Radio>
                    <Radio value={'female'}>Female</Radio>
                </Radio.Group>
                <Button size='large' onClick={onSubmit}>Yaratish</Button>
            </form>
        </>
    )
}

export default TeacherForm