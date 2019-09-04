import { observable, action } from 'mobx'

import { login } from '../../service/user'
import { LoginForm, HttpType, HttpInfo } from '../../types/index'
import { setToken, removeToken } from '@/utils/index'
let account = {}
if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account')+'')
}
class User {

    @observable public isLogin: boolean = false;
    @observable public account: any = account
    @action public  async  login(form: any): Promise<any> {
        const result: any = await login(form);
        console.log("result-------", result)
        if (result.code === 1) {
            // 1.判断是否记住用户名和密码
            if (form.remember) {
                window.localStorage.setItem('account', JSON.stringify(form));
            } else {
                window.localStorage.removeItem('account');
            }
            
            // 2.判断是否七天免登录
            if (form.autoLogin){
                setToken(result.token);
            }

            return result.code;

        }
    }
}
export default User
