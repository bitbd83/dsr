import * as controller from '../controller/deposit.controller';

export default function(app) {

  app.get('/api/deposits', controller.depositAll);
  app.post('/api/deposit', controller.add);
  app.get('/api/stalked-dsr/:uid', controller.stalkedDsr);

}