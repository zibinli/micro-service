/**
 * Created by zibin.li on 2018/5/4.
 */
const supertest = require('supertest')
const status = require('./status')
const app = require('./server')

test('echo', async () => {
  const query = {msg: 'hi'}
  const ctx = {query}

  await status(ctx, () => {})
  expect(ctx.body).toMatchObject(query)
})

test('echo route', async () => {
  const response = await supertest(app.callback()).get('/status')
  expect(response.status).toBe(200)
  expect(response.body).toEqual({status: 'ok'})
})
