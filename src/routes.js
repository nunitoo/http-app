
const express = require("express")
const routes = express.Router()



const users = [
    {name: 'Anson', age: 22},
    {name: 'Kelvin', age: 21},
    {name: 'Michelle', age: 22}
]

const posts = [
    {title: "My favorite food"},
    {title: "My favorite game"}
]






routes.get('/', (req, res) => {
    res.send({
        "msg": "Hello!",
        "user": { }
    })
});


routes.post('/', (req, res) => {
    const user = req.body
    console.log(user)
    users.unshift(user)
    res.status(201).send('Created user')
})



routes.get('/users', (req, res) => {
    res.status(200).send(users)
});


routes.get('/users/:name', (req, res) => {
    const { name } = req.params
    const user = users.find((user) => user.name === name)

    if(user) res.status(200).send(user)
    else res.status(404).send('Not found.')

});




routes.get('/posts', (req, res) => {
    const { title } = req.query;

    if(title){
        const post = posts.find((post) => post.title === title);
        if(post) res.status(200).send(post)
        else res.status(404).send('Not found.')
    }else res.status(404).send('Not found.')
});

routes.post('/posts', (req, res) => {
    const { authorization } = req.headers;
    if(authorization && authorization === '123'){
        const post = req.body;
        console.log(post)
        posts.unshift(post)
        res.status(201).send(post)
    }else{
        res.status(403).send('Forbidden')
    }
})


module.exports = routes;
