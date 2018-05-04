const Router = require('koa-router')
const status = require('./status')

const router = new Router()

router.get('/status', status)

module.exports = router
