
const app = require('express')();
const PORT = 8080;

app.listen( //fire up the server
    PORT, //port
    () => console.log(`Server listening on port ${PORT}`) //callback: to know when the server is up
)