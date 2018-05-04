const Koa = require('koa')
const koaLogger = require('koa-logger')
const koaBody = require('koa-body')
const config = require('config')
const route = require('./route')
const logger = require('./logger')

const app = new Koa()
const port = config.server.port || 3000

app.use(koaLogger())
app.use(koaBody())
app.use(route.allowedMethods())
app.use(route.routes())

logger.info(config)
app.listen(port, () => logger.info(`Listen on ${port}...`, {port}))

module.exports = app
