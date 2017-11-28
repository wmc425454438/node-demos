# express-demo


现在demo文件下安装npm，会根据package.json的依赖进行安装
``` bash
$ npm install
$ node app.js
```

然后分别做四个步骤：
- 1.在浏览器打开`http://localhost:8080/home`
- 2.在浏览器打开`http://localhost:8080/home/李四`
- 3.给`http://localhost:8080/home`发送一个`POST`请求，数据体的编码方法设为`x-www-form-urlencoded`，里面设置一个`name`字段，值可以随便取，假定设为`Alice`。
- 4.把下面代码的注释取消掉，将上面一段注释起来。再打开`http://localhost:8080/home?name=Alice`
``` js
router.get('/', function (req, res) {
  var name = req.query.name;
  res.send('<h1>Hello ' + name + '</h1>');
});
```

>可以看到终端和页面的变化
