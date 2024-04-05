import { Input } from 'antd'

function TopFilter() {
    return (
        <section className='grid gap-4 grid-cols-3 p-[10px] mb-[20px] w-[100%] h-[60px] bg-[#fff] rounded-[10px] border border-slate-200'>
            <Input className='w-[60%]' size='large' placeholder="Search teacher..." />
        </section>
    )
}

export default TopFilter