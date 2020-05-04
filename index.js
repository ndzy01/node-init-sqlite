const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./config')
const router = require('./src/router')

const utils = require('./src/utils')

const app = express()
app.set('port', process.env.PORT || config.port)
app.use('/', express.static('./public/'))

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
app.use(
  cors({
    origin: config.originUrl, //允许访问
    optionsSuccessStatus: 200,
  })
)

// ## 路由
// routerUtils
app.use('/', router.routerUtil)

// ## 监听端口
app.listen(app.get('port'), () => {
  console.log(`app listening on port ${app.get('port')}!`)
})
