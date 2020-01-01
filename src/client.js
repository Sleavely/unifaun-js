
const {
  UNIFAUN_BASE_PATH = 'https://api.unifaun.com/rs-extapi/v1',
  UNIFAUN_USERNAME = '',
  UNIFAUN_PASSWORD = '',
} = process.env

const got = require('got')

const client = got.extend({
  prefixUrl: UNIFAUN_BASE_PATH,
  responseType: 'json',
  username: UNIFAUN_USERNAME,
  password: UNIFAUN_PASSWORD,
})

module.exports = exports = client
