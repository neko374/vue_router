import Mock from "mockjs"
let newsinfo = Mock.mock({
    "data|40": [
        {
            "id|+1": 1,
            "name": "@cname",
            "descp": "@cname",
            "time": "@date",
            "price|10-50": 30,
            "author": "@cname"
        }
    ]
})
console.log(newsinfo);
//查
Mock.mock("/news/list", newsinfo.data)
//增
Mock.mock("/news/add", "post", (option) => {
    const obj = JSON.parse(option.body)
    obj.id = newsinfo.data[newsinfo.data.length - 1].id + 1
    newsinfo.data.push(obj)
    return {
        msg: "添加成功",
        state: 200
    }
})
//改
Mock.mock("/news/upd", "put", (option) => {
    const obj = JSON.parse(option.body);
    for (let i = 0; i < newsinfo.data.length; i++) {
        if (obj.id == newsinfo.data[i].id) {
            newsinfo.data[i] = obj;
            break;
        }
    }
    return {
        msg: "更新成功",
        state: "200"
    }
})
//删
Mock.mock(RegExp("/news/del" + "/*"), "delete", (option) => {
    const id = option.url.split("?")[1].split("=")[1];
    //id判断
    for (let i = 0; i < newsinfo.data.length; i++) {
        if (newsinfo.data[i].id == id) {
            //删除一条
            newsinfo.data.splice(i, 1)
        }
    }
    return {
        msg: "删除成功",
        state: "200"
    }
})