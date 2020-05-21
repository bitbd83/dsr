export default (sequelize, Sequelize) => {
  const Deposit = sequelize.define('deposits', {
    uid: { type: Sequelize.STRING },
    currency: { type: Sequelize.STRING },
    amount: { type: Sequelize.DECIMAL(32,16) },
    address: { type: Sequelize.STRING },
    txid: { type: Sequelize.STRING },
    block_number: { type: Sequelize.NUMBER },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
    completed_at: { type: Sequelize.DATE },
  },{
    timestamps: false
  })
  return Deposit;
}