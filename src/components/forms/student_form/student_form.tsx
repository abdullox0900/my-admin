import { Button, Input, Select, DatePicker } from "antd"

function StudentForm() {
    return (
        <form className='flex flex-col gap-[20px]'>
            <Input placeholder='Ism' size='large' />
            <Input placeholder='Telfon raqami' size='large' />
            <Input placeholder='Telfon Ota-Onasi' size='large' />
            <DatePicker size='large' />
            <Select
                placeholder="Yonalish"
                size='large'
                options={[
                    { value: 'jack', label: 'Frontend' },
                    { value: 'lucy', label: 'Backend' }
                ]}
            />
            <Select
                placeholder="Guruhga qo‘shish"
                size='large'
                options={[
                    { value: 'jack', label: 'Frontend' },
                    { value: 'lucy', label: 'Backend' }
                ]}
            />
            <Input placeholder='Manzil' size='large' />
            <Button size='large'>Yaratish</Button>
        </form>
    )
}

export default StudentForm