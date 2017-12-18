import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default () => {
    return (
        <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1']}>
            <SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text">Minqi.Lu</span></span>}>
                <Menu.Item key="1" className="nav-text">Gender: male</Menu.Item>
                <Menu.Item key="2" className="nav-text">Age: 25</Menu.Item>
                <Menu.Item key="3" className="nav-text">Birth: 1993-3-2</Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
                <Icon type="mobile" />
                <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="qq" />
                <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="6">
                <Icon type="github" />
                <span className="nav-text">nav 4</span>
            </Menu.Item>
        </Menu>
    );
};
