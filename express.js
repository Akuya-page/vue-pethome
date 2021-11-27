const express = require("express"); // 引入服务器框架express  使用之前需要 下载安装express框架 npm install express
const app = express(); // 创建服务器对象
app.get("/demo",function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*") // 设置跨域
    response.setHeader("Access-Control-Allow-Headers","*") // 设置请求头类型 可以不写
    response.send("hello world")
}) // 和后端一样 指定请求方式 get  请求路径  请求  响应
app.post("/",(request,response)=>{
    // response.send("你好")
    response.send(request)
}) // post 请求
app.all("/user",(request,response)=>{
    let UserS = [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        },
        {
            date: '2016-05-02',
            name: '张三',
            address: '上海市普陀区金沙江路 1518 弄'
        },
        {
            date: '2016-05-02',
            name: '李四',
            address: '上海市普陀区金沙江路 1518 弄'
        },{
            date: '2016-05-02',
            name: '王五',
            address: '上海市普陀区金沙江路 1518 弄'
        },{
            date: '2016-05-02',
            name: '照六',
            address: '上海市普陀区金沙江路 1518 弄'
        },
    ]
    response.send(UserS)
}) // 全部类型请求
app.listen(8081,function () {
    console.log("服务器启动，监听8080端口")
}) // 监听8080端口 可以写一个回调函数 查看服务器启动状态

// 使用方式 用node 运行自己写好的 express.js