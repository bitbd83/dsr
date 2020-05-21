import db from '../config/db.js';

const Coin = db.coin;

export const coinAll = (req, res) => {
  Coin.findAll().then(coin => {
    res.status(200).json({
      "success": true,
      "data": coin
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Can not access Coin Page",
      "error": err
    });
  })
}

export const coinById = (req, res) => {
  Coin.findByPk(req.params.coinId).then(coin => {
    res.send({
      success: true,
      data: coin
    });
  })
};

export const add = (req, res) => {
  Coin.create({
    project_name: req.body.project_name,
    coin_name: req.body.coin_name,
    coin_abbr: req.body.coin_abbr,
    coin_name: req.body.coin_name,
    erc_addr: req.body.erc_addr,
    erc_decimal: req.body.erc_decimal,
    coin_api: req.body.coin_api,
    project_desc: req.body.project_desc,
    wp_link: req.body.wp_link,
    logo_link: req.body.logo_link,
    project_leagal: req.body.project_leagal,
    ceo_con: req.body.ceo_con,
    no_member: req.body.no_member,
    total_coin: req.body.total_coin,
    total_circ: req.body.total_circ,
    dist_plan: req.body.dist_plan,
    list_date_exp: req.body.list_date_exp,
    ieo_list_date: req.body.ieo_list_date,
    ieo_price: req.body.ieo_price,
    twitter: req.body.twitter,
    fb_link: req.body.fb_link,
    telegram: req.body.telegram,
    web_addr: req.body.web_addr,
    category: req.body.category
  })
    .then(function (coin) {
      res.status(200).send({ "success": true, "message": "New Coin added successfully!", "coin": Coin });
    })
    .catch(function (err) {
      res.status(400).send({ "success": false, "message": err.message.replace('Validation error: ', '') });
    })
}