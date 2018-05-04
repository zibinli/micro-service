const config = require('config')
const Sequelize = require('sequelize')
exports.mysqlConnection = function mysqlConnection () {
  let mysqlConfig = config.mysql
  let connectParams = {
    dialect: 'mysql',
    operatorsAliases: false,
    timezone: '+00:00',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
  return {
    dbAgent: new Sequelize(mysqlConfig.db, connectParams)
  }
}
