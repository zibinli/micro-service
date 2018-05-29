/**
 * Created by zibin.li on 2018/5/4.
 */
async function status (ctx, next) {
  ctx.body = Object.assign(ctx.query, {
    status: 'ok',
    owner: '覃小娜',
    msg: '李西早和覃木子的妈妈'
  })
}

module.exports = status
