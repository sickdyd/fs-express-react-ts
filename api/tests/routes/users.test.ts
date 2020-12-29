import request from 'supertest'
import app from '@src/app'

describe('/users', () => {
  it('should return the list of users', async () => {
    const res = await request(app).get('/users')

    expect(res.status).toEqual(200)
    expect(res.text).toEqual('users list')
  })
})
