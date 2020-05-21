import * as controller from '../controller/coin.controller';

export default function(app) {

  app.get('/api/coins', controller.coinAll);
  app.get('/api/coins/:coinId', controller.coinById);
  app.post('/api/coin', controller.add);

}