import React, { useState } from 'react'
import { Menu } from 'antd';
import {
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
    LogoutOutlined,
    DesktopOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const DashboardMenu = ({ Groups, Users, selectedKey, changeSelectedKey }) => {


    return (
        <Menu mode="inline" selectedKeys={[selectedKey]} defaultSelectedKeys={['Home']} onClick={changeSelectedKey}>
            <Menu.Item key="Home" icon={<DesktopOutlined />}>
                Home
            </Menu.Item>
            {Array.isArray(Groups) && Groups.length > 0 && (
                Groups.map(item => (
                    <SubMenu key="Groups" icon={<TeamOutlined />} title="Groups">
                        <Menu.Item key={item.id}>{item.name}</Menu.Item>
                    </SubMenu>
                ))
            )}

            {Array.isArray(Users) && Users.length > 0 && (
                Users.map(user => (
                    <SubMenu key="Users" icon={<UserOutlined />} title="User">
                        <Menu.Item key={user.id}>{user.name}</Menu.Item>
                    </SubMenu>)
                )
            )}

            <Menu.Item key="Settings" icon={<SettingOutlined />}> Settings </Menu.Item>
            <Menu.Item key="Logout" icon={<LogoutOutlined />}> Logout </Menu.Item>
        </Menu>
    )
}

export default DashboardMenu