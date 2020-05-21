import * as controller from '../controller/ticker.controller';

export default function(app) {

  app.get('/api/tickers', controller.tickerAll);

}