import { Button, Input, Select, DatePicker } from "antd"
import { useFormik } from 'formik'

function StudentForm() {

    const formik = useFormik({
        initialValues: {
            first_name: 'Hello',
            last_name: '',
            phone: '',
            parents_phone: '',
            data_picker: '',
            courses: '',
            comment: '',
        },
        validate: () => { },
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className='flex flex-col gap-[20px]' onSubmit={formik.handleSubmit}>
            <Input
                placeholder='Ism'
                size='large'
                name='first_name'
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <Input
                placeholder='Falimiya'
                size='large'
                name='last_name'
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <Input
                placeholder='Telfon raqami'
                size='large'
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <Input
                placeholder='Telfon Ota-Onasi'
                size='large'
                name='parents_phone'
                value={formik.values.parents_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <DatePicker
                size='large'
                name='data_picker'
                value={formik.values.data_picker}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <Select
                placeholder='Yonalish'
                size='large'
                value={formik.values.courses}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                options={[
                    { value: 'jack', label: 'Frontend' },
                    { value: 'lucy', label: 'Backend' }
                ]}
            />
            {/* <Select
                placeholder="Guruhga qo‘shish"
                size='large'
                options={[
                    { value: 'jack', label: 'Frontend' },
                    { value: 'lucy', label: 'Backend' }
                ]}
            /> */}
            <Input
                placeholder='Manzil'
                size='large'
                name='comment'
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <Button size='large'>Yaratish</Button>
        </form>
    )
}

export default StudentForm