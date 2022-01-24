const data = require("../data/users")

const controllers = {
    users: {

        index(request, response) {
            response.status(200).send("HII")
        },

        getAll(request, response) {
            response.status(200).send(data.users)
        },

        getOne(request, response) {
            const { name } = request.params
            const user = data.users.find((users) => users.name === name)

            if(user) response.status(200).send(user)
            else controllers.generalControllers.notFound()
        },

        create(request, response) {
            const { name } = request.query
            const user = data.users.find((users) => users.name === name)

            if(user) {
                response.status(409).send("This user already exist")
            }else{
                data.users.unshift({Id: null, name: name})
                response.status(201).send("Created")
            }

            

        }

    },


    toolsFromOtherScopes: {
        photo(request, response) {
            const { username } = request.params
            if(!username) response.send("Cannot be null")
            else response.redirect(`https://github.com/${username}.png`)
        }



    },


    generalControllers: {
        forbidden(request, response) {
            response.status(403).send("Forbidden")
        },
    
        notFound(request, response) {
            response.status(404).send("Not found")
        }



    }
}



module.exports = controllers

