const axios = require('axios')
const querystring = require('querystring')

module.exports = class MyHttp {
  /**
   * 发送http请求
   * @param options 请求配置
   * @param isFormUrlencoded content-type 是否是 application/x-www-form-urlencoded
   * @return Object HTTP 返回结果
   */
  static request (options, isFormUrlencoded = false) {
    if (!options.url) return false
    if (!options.url.match(/(http:|https:)/ig)) {
      options.url = 'http:' + options.url
    }
    if (isFormUrlencoded) {
      return axios.post(options.url, querystring.stringify(options.data))
    } else {
      return axios(options)
    }
  }
}
