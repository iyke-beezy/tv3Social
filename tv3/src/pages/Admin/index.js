import React, { useState, useEffect } from 'react'
import './styles.scss'
import { Layout, Breadcrumb, Button } from 'antd';
import {
    // DesktopOutlined,
    // FileOutlined,
    // TeamOutlined,
    // UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

//componennts
import DashboardMenu from './dashboardMenu'
import DashboardHome from './DashboardHome'
// import Settings from './Settings'
// import DashboardSettings from './DashboardSettings';

const { Header, Content, Footer, Sider } = Layout;

const Admin = props => {


    const [collapsed, setCollapsed] = useState(false)
    const [selectedKey, setSelectedKey] = useState("Home")
    const [info, setInfo] = useState({})

    useEffect(() => {
        switch (selectedKey) {
            case "Settings":
                setInfo({
                    title: 'Settings',
                    subTitle: '',
                    // component: <Settings />
                })
                break;
            default:
                setInfo({
                    title: 'Home',
                    subTitle: '',
                    component: <DashboardHome />
                })
                break;
        }
    }, [selectedKey])

    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        // setContentIndex(+key);
    };

    const onCollapse = () => {
        // console.log(collapsed);
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                {/* <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <Menu.Item key="1" icon={<DesktopOutlined />}>
                        Home
            </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />} />
                </Menu> */}
                <DashboardMenu
                    selectedKey={selectedKey}
                    changeSelectedKey={changeSelectedKey}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 10 }} >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: onCollapse,
                    })}
                    <div style={{float: 'right'}}>
                        <Button type="dashed">Create QRcode</Button>
                    </div>
                    
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>{info.title}</Breadcrumb.Item>
                        <Breadcrumb.Item>{info.subTitle}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: '100vh' }}>
                        {info.component}
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
            
        </Layout>
    )
}

export default Admin