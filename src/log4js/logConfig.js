/**
 * Created by zibin.li on 2018/5/4.
 */
const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const NODE_LOG_DIR = rootDir + '/logs'
exports.config = {
  logDir: NODE_LOG_DIR,
  log4Config: {
    'appenders': {
      // 定义一个日志记录器
      logInfo: {
        'type': 'file', // 日志文件类型，可以使用日期作为文件名的占位符
        'filename': NODE_LOG_DIR + 'info.log', // 日志文件名，可以设置相对路径或绝对路径
        'maxLogSize': 10485760,
        'backups': 5,
        'compress': true
      },
      logErr: {
        'type': 'dateFile', // 日志文件类型，可以使用日期作为文件名的占位符
        'filename': NODE_LOG_DIR, // 日志文件名，可以设置相对路径或绝对路径
        'pattern': 'error/yyyyMMddhh.log', // 占位符，紧跟在filename后面
        'absolute': true, // filename是否绝对路径
        'alwaysIncludePattern': true, // 文件名是否始终包含占位符
        'category': 'logErr' // 记录器名
      },
      operationInfo: {
        'type': 'dateFile', // 日志文件类型，可以使用日期作为文件名的占位符
        'filename': NODE_LOG_DIR, // 日志文件名，可以设置相对路径或绝对路径
        'pattern': 'operation/yyyyMMddhh.log', // 占位符，紧跟在filename后面
        'absolute': true, // filename是否绝对路径
        'alwaysIncludePattern': true, // 文件名是否始终包含占位符
        'category': 'operationInfo' // 记录器名
      },
      APIReturnInfo: {
        'type': 'dateFile', // 日志文件类型，可以使用日期作为文件名的占位符
        'filename': NODE_LOG_DIR, // 日志文件名，可以设置相对路径或绝对路径
        'pattern': 'API_Return/yyyyMMddhh.log', // 占位符，紧跟在filename后面
        'absolute': true, // filename是否绝对路径
        'alwaysIncludePattern': true, // 文件名是否始终包含占位符
        'category': 'APIReturnInfo' // 记录器名
      }
    },
    categories: {
      logInfo: {
        appenders: ['logInfo'], level: 'DEBUG'
      },
      logErr: {
        appenders: ['logErr'], level: 'ERROR'
      },
      operationInfo: {
        appenders: ['operationInfo'], level: 'INFO'
      },
      APIReturnInfo: {
        appenders: ['APIReturnInfo'], level: 'INFO'
      },
      default: { appenders: ['logInfo'], level: 'INFO' }
    }
    // "levels":{ "logInfo": "DEBUG", "logErr": "ERROR", "operationInfo": "INFO"}        // 设置记录器的默认显示级别，低于这个级别的日志，不会输出
  }
}
