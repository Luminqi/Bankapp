import React from 'react';
import { Layout, Avatar } from 'antd';
import Menu from '../Menu/Menu.js';
import { view as Tabs } from '../Tabs/';
import Buttons from '../Buttons/Buttons.js';
import { view as Switch } from '../Switch/';
import './Layout.css'

const { Content, Footer, Sider, } = Layout;

export default () => {
    return (
        <Layout>
            <Sider
                className="sider"
                breakpoint="xs"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
                <div className="logo">
                <Avatar size="large" icon="user" />
                </div>
                <Menu />
            </Sider>
            <Layout>
                <Content className="content">
                    <Switch />
                    <Buttons />
                    <div>
                    <Tabs />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
