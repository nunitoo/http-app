const express = require("express");
const server = express();
const routes = require("./routes");


server.use(express.json())
server.use(express.urlencoded({
    extended:false
}))

server.use(routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT} . . . `));
