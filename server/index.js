const express = require('express')

const app = express()

// json 格式接收
app.use(express.json())

// 跨域
app.use(require('cors')())

// 引用数据库
require('./plugins/db')(app)

// 配置路由
require('./router')(app, express)


app.listen('3000', () => {
  console.log('http://localhost:3000');
})