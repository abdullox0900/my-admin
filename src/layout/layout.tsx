import { useState } from 'react'
import { Outlet } from "react-router-dom"

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons'

import { PiChalkboardTeacherThin, PiStudent } from "react-icons/pi"
import { TiGroupOutline } from "react-icons/ti"

import { Button, Layout, Menu, theme } from 'antd'

const { Header, Sider, Content } = Layout


export default function LayoutComponent() {

    const [collapsed, setCollapsed] = useState(false)

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout className='bg-transparent'>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, background: 'transparent' }}>
                <div className="demo-logo-vertical bg-transparent" />
                <Menu
                    theme="dark"
                    mode="inline"
                    className='p-[20px] bg-transparent'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <PiChalkboardTeacherThin />,
                            label: 'Teacher',
                        },
                        {
                            key: '3',
                            icon: <PiStudent />,
                            label: 'Students',
                        },
                        {
                            key: '4',
                            icon: <TiGroupOutline />,
                            label: 'Groups',
                        },
                    ]}
                />
            </Sider>
            <Layout style={collapsed ? { marginLeft: 80 } : { marginLeft: 200 }} className='bg-transparent'>
                <Header style={{ padding: 0, background: 'transparent' }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined className='text-[#fff]' /> : <MenuFoldOutlined className='text-[#fff]' />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '100vh',
                        background: 'linear-gradient(rgba(6, 11, 40, 0.938),rgba(10, 14, 35, 0.71))',
                        borderRadius: 24,
                        border: '1px solid rgba(255, 255, 255, 0.4)'
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}