
const express = require("express");
const { send } = require("express/lib/response");
const routes = express.Router();

const users = {
    data: [
        {Id: 0, name: "Mateus"},
        {Id: 1, name: "Gabriela"},
        {Id: 2, name: "Pedro"},
        {Id: 3, name: "Thais"},
    ],
    controllers: {
        index(request, response){
            response.status(200).send("Hii")
        },

        seeAll(request, response) {response.status(200).send(users.data)},

        seeUser(request, response) {
            const { name } = request.params;
            const user = users.data.find((users) => {
                return users.name === name;
            })
        
            if(user) response.status(200).send(user)
            else response.status(404).send("Not found")
        },

        create(request, response) {
            const { name } = request.query; 
        
            if(users.data.find((users) => users.name === name)) response.send("This user already exist")
            else {
                users.data.unshift({Id: null, name: name})
                response.status(201).send('Created')
            }
        },
        photo(request, response) {
            const { name } = request.params;
            response.redirect(`https://github.com/${name}.png`)
        },




    }
}


routes.get('/', users.controllers.index)
routes.get('/users', users.controllers.seeAll)
routes.get('/users/:name', users.controllers.seeUser)
routes.post('/create', users.controllers.create)
routes.get('/photo/:name', users.controllers.photo)
routes.get('/*', (request, response) => response.status(404).send("Not found"))
routes.post('/*', (request, response) => response.status(403).send("Forbidden"))


module.exports = routes;
