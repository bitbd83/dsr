
import Sequelize from 'sequelize';
import model_user from '../model/user.model.js'
import model_ticker from '../model/ticker.model.js'
import model_coin from '../model/coin.model.js'
import model_deposit from '../model/deposit.model.js'

import * as ENV from './env'

const sequelize = new Sequelize(ENV.DATABASE, ENV.USERNAME, ENV.PASSWORD, {
  host:             ENV.HOST,
  dialect:          ENV.DIALECT,
  operatorsAliases: false,
  pool:             ENV.POOL
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = model_user(sequelize, Sequelize);
db.ticker = model_ticker(sequelize, Sequelize);
db.coin = model_coin(sequelize, Sequelize);
db.deposit = model_deposit(sequelize, Sequelize);

module.exports = db;