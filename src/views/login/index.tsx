import {Button, Checkbox,Form, Icon, Input  } from 'antd';

import {WrappedFormUtils} from 'antd/lib/form/Form'
import * as React from 'react';
import './sass/style.css'
import {inject, observer} from 'mobx-react'

interface Props {
  form: WrappedFormUtils,
  user: any,
  abc?: string,
  history:any
}
@inject('user')
@observer

class Login extends React.Component<Props, any> {
  public handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields(async(err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const result = await this.props.user.login(values);
        console.log(result)
        console.log('result...', result);
        if (result === 1){
          console.log(this.props)
          this.props.history.push('/home')
        }else{
          console.log(1)
        }
      }
    });
  };
    public render() {
      const { getFieldDecorator } = this.props.form
      
      return (
        <div className='form-box'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
          {getFieldDecorator('user_name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            
            />,
          )}
          
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('user_pwd', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
           
          )}
          
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            initialValue: true,
            valuePropName: 'checked'
            
          })( <Checkbox>记住密码</Checkbox>)}
         
          <a className="login-form-forgot" href="">
           忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
        
        </Form.Item>
      </Form>
        </div>
       
      );
    }
  }
export default Form.create()(Login)
