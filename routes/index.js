const app = require('../app');

const customerController = require('../controllers').customer;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Customers'
  }))
}
app.post('/api/customer', customerController);