import {observable , action} from 'mobx'

import {login} from '../../service/user'
import { LoginForm} from '../../types/index'


class User {
    @observable public isLogin:boolean = false;

    @action public async  login(form: LoginForm): Promise<any>{
        const result: any = await login(form);
        
        return result.code;
}
}
export default User
