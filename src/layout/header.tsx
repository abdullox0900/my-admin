import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

// import useHeaderTitle from '../../hooks/useHeaderTitle'
import useTitle from '../hooks/useTitle'

function Header() {
    const { title } = useTitle()
    return (
        <>
            <header className='flex justify-between items-center mb-[20px]'>
                <div>
                    <Breadcrumb
                        items={[
                            {
                                href: '/',
                                title: <HomeOutlined />,
                            },
                        ]}
                    />

                    <span className='mt-[5px] font-bold text-[34px] text-[#2b3674]'>
                        {title == undefined ? '' : title}
                    </span>
                </div>
                {/* <div className="absolute right-[25px] w-[350px] h-[50px] bg-[#fff] shadow-md rounded-[30px]"></div> */}
            </header>
        </>
    )
}
export default Header