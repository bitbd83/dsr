import db from '../config/db.js';
import bcrypt from 'bcryptjs';
import { InitialDB } from '../config/initial-db'

const User = db.user;
const TICKER = db.ticker;

export const init = async(req, res) => {

  /////////////////////////////////////////////// User and Profile init ///////////////////////////////////////////////////
  // await InitialDB.AUTH.map((item) => User.create({
  //   username: item.username,
  //   email: item.email,
  //   password: bcrypt.hashSync(item.password, 8),
  //   rule: item.rule
  // }).then(() => {
  //   // return res.status(200).send({ "success": true, "message": "DB INFO Created!" });
  // })
  // )

  await InitialDB.TICKERS.map((item) => TICKER.create({
    title: item.title,
    buy: item.buy,
    sell: item.sell,
    low: item.low,
    high: item.high,
    open: item.open,
    last: item.last,
    volume: item.volume,
    avg_price: item.avg_price,
    price_change_percent: item.price_change_percent,
    quote_volumn: item.quote_volumn,
  }).then(() => {
    // return res.status(200).send({ "success": true, "message": "DB INFO Created!" });
  })
  )
  return res.status(200).send({ "success": true, "message": "DB INFO Created!" });
  /////////////////////////////////////////////// General init ///////////////////////////////////////////////////


}

