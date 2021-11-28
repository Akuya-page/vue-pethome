// let Mock = require("mockjs"); // 引入配置好的 mock规则js文件

//引入mockjs
let Mock=require('mockjs')
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

// console.log(JSON.stringify(data))
let dataList = []
for (let  i = 0; i < 53; i++) {
    let mock = Mock.mock({
        'id': '@increment',
        'name': '@cname',
        'phone': /^1[0-9]{10}$/,
        'email': '@email',
        'address': '@county(true)',
        'createTime': '@date("yyyy-MM-dd")'
    });
    dataList.push(mock)
}

function pagination(currentPage, pageSize, list) {
    console.log(list);
    console.log(currentPage, pageSize);//1 5
    //js的slice(开始索引，结束下标)是数组的截取方法，相当于字符串的substring，也是左闭右开的
    //例子：[1,2,3,4].slice(1,3) => [2,3]
    //假如集合有53条数据，当前页currentPage为1，每页pageSize5条，那么就是list.slice(0,5) - 就是前5条[第一条数据，第6条数据)
    //假如集合有53条数据，当前页currentPage为2，每页pageSize5条，那么就是list.slice(5,10) - 就是5-10条，就是第二页
    return list.slice((currentPage-1)*pageSize, currentPage*pageSize)
}
// 获取当前页的分页数据
//参数1：发送的请求地址  参数2：发送的请求方式   参数3中opts接收调用时传递的参数
//参数3即为.vue中调用是传递的参数：{"currentPage":1,"pageSize":5}
//返回值为totals【总数量】和 data【当前页的分页数据】
Mock.mock(new RegExp('/user/list'), 'post', (opts) => {
    let list =dataList;
    console.log("=======================user.js=====================");
    console.log(opts);//Object { url: "/user/list", type: "POST", body: "{\"currentPage\":1,\"pageSize\":5}" }
    console.log(opts.body);//{"currentPage":1,"pageSize":5} - json格式的字符串
    let currentPage = JSON.parse(opts.body).currentPage;
    let pageSize = JSON.parse(opts.body).pageSize;
    let totals = list.length;
    list = pagination(currentPage, pageSize, list)
    return {
        'totals': totals,
        'data': list
    }
})