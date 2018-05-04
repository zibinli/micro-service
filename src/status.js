/**
 * Created by zibin.li on 2018/5/4.
 */
async function status (ctx, next) {
  ctx.body = Object.assign(ctx.query, {
    status: 'ok'
  })
}

module.exports = status
