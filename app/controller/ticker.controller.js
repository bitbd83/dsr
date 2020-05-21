import db from '../config/db.js';

const Ticker = db.ticker;

export const tickerAll = (req, res) => {
  Ticker.findAll({
    attributes:['title','buy','sell','low','high','open','last', 'volume', 'avg_price','price_change_percent', 'quote_volumn']
  }).then(ticker => {
    res.status(200).json({
      "success": true,
      "data": ticker
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Can not access Investor Page",
      "error": err
    });
  })
}