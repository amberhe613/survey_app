const express = require("express");
const app     = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(8080, (req, res) => {
    console.log("Serves started!");
});