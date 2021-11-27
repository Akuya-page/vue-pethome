module.exports = {
    devServer : {
        proxy : {
            "/api" : {
                // 项目中 需要的请求路径是https://www.bilibili.com/index/data.json  实际写法 用 api/index/data.json  代理对象会自动替换成https://www.bilibili.com/index/data.json
                target : "http://localhost:8080", // 目标路径 实际的请求路径 下面的  api  用来代替https://www.bilibili.com/
                changeOrigin : true, // 是否跨域
                pathRewrite : { // 代替的路径
                    "^/api" : ''
                }
            }
        }
    }
}