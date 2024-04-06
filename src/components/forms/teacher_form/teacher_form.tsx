import { Button, Input, Select, DatePicker } from "antd"

function TeacherForm() {
    return (
        <form className='flex flex-col gap-[20px]'>
            <Input placeholder='Ism' size='large' />
            <Input placeholder='Telfon raqami' size='large' />
            <Input placeholder='Login' size='large' />
            <DatePicker size='large' />
            <Select
                placeholder="Yonalish"
                size='large'
                options={[
                    { value: 'jack', label: 'Frontend' },
                    { value: 'lucy', label: 'Backend' }
                ]}
            />
            <Button size='large'>Yaratish</Button>
        </form>
    )
}

export default TeacherForm