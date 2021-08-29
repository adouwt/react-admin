import React, { FC } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import '../App.css';

import { Layout } from 'antd';

import Routers from '../routers';

const { Header, Content, Footer } = Layout;


const NoMenuLayout = (props: any) => {
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center', fontWeight: 700, fontSize: 24 }} >
            美不止一刻
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

export default NoMenuLayout;