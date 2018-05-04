const moment = require('moment')

module.exports = class MyError {
  /**
   * 格式化指定时间，省略默认当前时间。格式 YYYY-MM-dd hh:mm:ss
   * @param data 时间戳
   * @returns {*}
   */
  static getFormatDate (date = Date.now(), format = 'YYYY-MM-DD HH:mm:ss') {
    return moment(date).format(format)
  }

  /**
   * 校验日期格式是否合法
   * @param date   校验日期
   * @param format 校验格式
   * @returns {boolean}
   */
  static checkDateFormat (date, format = 'YYYY-MM-DD') {
    try {
      if (!moment(date).isValid() || date.length !== format.length) return false
      return true
    } catch (err) {
      return false
    }
  }

  /**
   * 校验字符串是否完全匹配正则表达式
   * @param str    需校验的字符串
   * @param format 需匹配的正则
   * @param maxLen 字符串最大长度
   * @returns {boolean}
   */
  static checkStrFormat (str, format, maxLen) {
    try {
      if (!str) return false
      if (!format.test(str)) return false
      str = str.toString()
      if (str.length > maxLen) return false
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * 校验数组里是否有指定元素
   * @param str 需校验的字符串
   * @param arr 指定的数组元素
   * @returns {boolean}
   */
  static checkStrInArr (str, arr) {
    if (!str) return false
    if (arr.indexOf(str) === -1) return false
    return true
  }

  /**
   * 校验整数合法性
   * @param num        数字
   * @param isPositive 是否正数
   * @return {boolean} 校验结果
   */
  static checkNumberFormat (num, isPositive = true) {
    try {
      if (!num) return false
      let reg = /^-?[1-9]\d*$/
      if (isPositive) reg = /^[1-9]\d*$/
      if (!reg.test(num)) return false
      return true
    } catch (err) {
      return false
    }
  }

  /**
   * 生成get请求url
   * @param url
   * @param data
   * @returns {string}
   */
  static genGetUrl (url, data) {
    url += '?'
    for (let key in data) {
      let value = data[key]
      if (value) {
        url += `${key}=${value}&`
      }
    }
    return url
  }

  /**
   * 获取指定日期所在周的周一、周日日期
   * @param Object
   */
  static getWeekStartAndEndDay (date = new Date()) {
    let weekOfday = moment(date).format('E') // 计算今天是这周第几天
    let startDay = moment(date).subtract(weekOfday - 1, 'days').format('YYYY-MM-DD')
    var endDay = moment(date).subtract(weekOfday - 7, 'days').format('YYYY-MM-DD') // 周日日期
    return {startDay: startDay, endDay: endDay}
  }

  static createNonceStr (length, typeValue = '111') {
    if (typeof typeValue !== 'string') {
      typeValue = typeValue.toString()
    }
    var char = ''
    if (typeValue[0] === 1) {
      char += 'ABCDEFGHIJKLMNPQRSTUVWXYZ'
    }
    if (typeValue[1] === 1) {
      char += 'abcdefghjkmnpqrstuvwxyz'
    }
    if (typeValue[2] === 1) {
      char += '23456789'
    }
    var str = ''
    var startIndex = Math.floor(Math.random() * (char.length + 1))
    for (var i = 0; i < length; i++) {
      str += char.substr(startIndex, 1)
    }
    return str
  }
}
