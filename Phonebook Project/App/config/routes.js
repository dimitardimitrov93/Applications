const controller = require('../controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', controller.getIndex);
  app.get('/create', controller.getCreate);
  app.post('/create', controller.postCreate);
  app.get('/edit/:id', controller.getEdit);
  app.post('/edit/:id', controller.postEdit);
  app.get('/delete/:id', controller.getDelete);
  app.post('/delete/:id', controller.postDelete);
  app.post('/search', controller.searchEntries);
};