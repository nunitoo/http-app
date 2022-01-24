const express = require("express");
const routes = express.Router();
const controllers = require("./controllers/controllers")




// GET
routes.get('/', controllers.users.index)
routes.get('/users', controllers.users.getAll)
routes.get('/users/:name', controllers.users.getOne)
routes.get('/photo', controllers.toolsFromOtherScopes.photo)
routes.get('/photo/:username', controllers.toolsFromOtherScopes.photo)
// POST
routes.post('/users', controllers.users.create)


// exception cases
routes.get('*', controllers.generalControllers.notFound)
routes.post('*', controllers.generalControllers.forbidden)



module.exports = routes;
