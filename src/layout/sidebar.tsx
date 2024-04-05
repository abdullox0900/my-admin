import { NavLink } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/navigation'
import Logo from '../assets/svg/logo'
import { ReactNode } from 'react'
import useSidebarToggle from '../hooks/useToggle'


type ItemObj = {
    path: string
    name: string
    icon?: string | ReactNode
    modifier?: boolean
}

type NavType = {
    key: number
    item: ItemObj
}

function Sidebar() {

    const { modifier } = useSidebarToggle()


    console.log(modifier)

    return (
        <nav className={`w-[250px] h-lvh py-[25px] px-[10px] ${modifier ? 'w-[50px] pr-0' : ''}`}>
            <div className='flex items-center gap-[10px] justify-center w-[100%] h-[60px] rounded-[10px] bg-[#fff] mb-[20px] shadow-md' >
                <Logo />
                <div className={`${modifier ? 'hidden' : ''}`}>
                    Murabba
                </div>
            </div>
            <ul className='flex flex-col gap-[15px]'>
                {DASHBOARD_SIDEBAR_LINKS.map((content, index) => (
                    <SidebarLink key={index} item={content} />
                ))}
            </ul>
        </nav>
    )
}

function SidebarLink(props: NavType) {

    const { modifier } = useSidebarToggle()

    return (
        <NavLink to={props.item.path}>
            <li className={`flex gap-[5px] items-center py-[8px] px-[10px] text-[#67748e] font-medium hover:bg-[#fff] hover:text-[#252f40] rounded-[10px] active:bg-slate-300 duration-100 ease-in cursor-pointer ${modifier ? 'bg-[#fff]' : ''}`}>
                <div className={`flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#fff] shadow-md ${modifier ? 'w-[50px] h-[50px] shadow-none' : ''}`}>
                    {props.item.icon}
                </div>
                <div className={`${modifier ? 'hidden' : ''}`}>
                    {props.item.name}
                </div>
            </li>
        </NavLink>
    )
}
export default Sidebar