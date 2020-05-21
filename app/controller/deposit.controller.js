import db from '../config/db.js';
import sequelize from 'sequelize';

const Deposit = db.deposit;
const Op = sequelize.Op;

export const depositAll = (req, res) => {
  Deposit.findAll().then(deposit => {
    res.status(200).json({
      "success": true,
      "data": deposit
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Can not access Deposit Page",
      "error": err
    });
  })
}

export const add = (req, res) => {
  
  // if(!req.body.password_digest){
  //   res.status(400).send({ "success": false, "message": "Password is empty!" });
  //   return false
  // }
  console.log('OOOOOOOOOOOO', req.body)

  Deposit
    .create({
      uid: req.body.uid,
      currency: req.body.currency,
      amount: req.body.amount,
      address: req.body.address,
      txid: req.body.txid,
      block_number: req.body.block_number,
      address: req.body.address,
      created_at: new Date(),
      updated_at: new Date()
    })
    .then(function (deposit) {
      res.status(200).send({ "success": true, "message": "Deposit passed successfully!", "deposit": deposit });
    })
    .catch(function (err) {
      res.status(400).send({ "success": false, "message": err.message });
    })
}

export const stalkedDsr = (req, res) => {
  Deposit.findAll({
    where: {
      completed_at: {
        [Op.ne]: null
      },
      uid: req.params.uid
    },
    attributes: [
      [sequelize.fn('sum', sequelize.col('amount')), 'uid'],
    ],
  }).then(deposit => {
    res.status(200).json({
      "success": true,
      "data": deposit
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Can not access Deposit Page",
      "error": err
    });
  })
}