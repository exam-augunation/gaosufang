import request from '../utils/request';

// 登陆
export let login = (params: object)=>{
    return request.post('/user/login', params);
} 