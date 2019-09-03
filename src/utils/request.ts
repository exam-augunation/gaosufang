import axios from 'axios';
import {AxiosResponse} from 'axios/index';


const instance = axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 请求拦截器
instance.interceptors.request.use( (config: any) =>{
    // Do something before request is sent
    return config;
  }, (error: any)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
    // Do something with response data
    return response.data;
  },  (error: any) =>{
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;