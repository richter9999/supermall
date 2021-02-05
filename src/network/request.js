import axios from "axios"

export const request = (config) =>{
    const req = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    })

    //请求拦截器
    req.interceptors.request.use(config => {
        //1. 修改 Config 里面的 内容

        //2. 添加网络请求的 动画

        //3. 登陆 必须携带信息

        return config
    }, error => {

        return error
    })

    //响应拦截器
    req.interceptors.response.use(response => {

        return response.data
    }, error => {

        return error
    })

    //axios 返回 一个 Promise 对象
    return req(config)
}