let Mock = require("mockjs"); // 引入配置好的 mock规则js文件

let data=Mock.mock({
// name|规则:值
    'list|5':[
        {
            'id': '@increment',
            'name': '@cname',
            'phone': /^1[0-9]{10}$/,
            'email': '@email',
            'address': '@county(true)',
            'createTime': '@date("yyyy-MM-dd")'
        }
    ]
})
console.log(JSON.stringify(data))