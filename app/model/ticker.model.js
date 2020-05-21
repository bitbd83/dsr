export default (sequelize, Sequelize) => {
  const Ticker = sequelize.define('tickers', {
    title: { type: Sequelize.STRING },
    buy: { type: Sequelize.STRING },
    sell: { type: Sequelize.STRING },
    low: { type: Sequelize.STRING },
    high: { type: Sequelize.STRING },
    open: { type: Sequelize.STRING },
    last: { type: Sequelize.STRING },
    volume: { type: Sequelize.STRING },
    avg_price: { type: Sequelize.STRING },
    price_change_percent: { type: Sequelize.STRING },
    quote_volumn: { type: Sequelize.STRING },
  })
  return Ticker;
}