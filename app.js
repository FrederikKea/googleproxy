const express = require('express')
const app = express()

const fetch = require("node-fetch");

app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
        .then(res => res.textConverted())
        .then(body => res.send(body));
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});