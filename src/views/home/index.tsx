
const {Content ,Footer, Header,  Sider } = Layout;
const { SubMenu } = Menu;
import * as React from 'react';
import './sass/style.css'

import {Breadcrumb, Icon ,Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

class Home extends React.Component{    
      public onCollapse = (collapsed:any) => {
        // console.log(collapsed);
        this.setState({ collapsed });
      };

      public  render() {
        return (
          <div className='box'>
            <div className="ant-layout-header">
            <div className="top">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
             
            </div>
            <div className="right">
                11  
              </div>
            </div>
          <Layout >
            
            <Sider>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>试题管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">添加试题</Menu.Item>
                  <Menu.Item key="4">试题分类</Menu.Item>
                  <Menu.Item key="5">查看试题</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>用户管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">添加用户</Menu.Item>
                  <Menu.Item key="7">用户展示</Menu.Item>
                 
                </SubMenu>

                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>考试管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">添加考试</Menu.Item>
                  <Menu.Item key="10">试卷管理 </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>班级管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="11">班级管理</Menu.Item>
                  <Menu.Item key="12">教师管理</Menu.Item>
                  <Menu.Item key="13">学生管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="file" />
                      <span>阅卷管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="14">待批班级</Menu.Item>
                 
                </SubMenu>
              
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
          </div>
        );
      }


}
export default Home


