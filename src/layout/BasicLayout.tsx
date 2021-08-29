import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import '../App.css';

import { Menu, Layout } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

import Routers from '../routers';
const { Header, Content, Footer, Sider } = Layout;


const BasicLayout: FC = (props: any) => {
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider >
                <div className="logo" >Hair Cut</div>
                <Menu
                    defaultSelectedKeys={[window.location.pathname]}
                    theme="dark"
                  >
                    <Menu.Item key="/home" icon={<PieChartOutlined />}>
                      <Link to="/home">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/statistics" icon={<DesktopOutlined />}>
                      <Link to="/statistics">Statistics</Link>
                    </Menu.Item>
                    <Menu.Item key="/users" icon={<ContainerOutlined />}>
                      <Link to="/users">users</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center', fontWeight: 700, fontSize: 24 }} >
              高光时刻，从头做起
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360, marginTop: 15 }}>
                <div>
                  <Routers />
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>website  ©2021 Created by erlinger</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default BasicLayout;