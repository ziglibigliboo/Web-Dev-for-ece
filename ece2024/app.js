const express = require("express");
const app = express();

const port = 5000;

app.get('/', function (req, res, next) {
    res.send("Hii skjdclkzxmckmxz,ncm,xc cnkjn,zn,x,");
})

app.get('/temp', function (req, res) {
    res.send("Temp hii");
})

app.listen(port, () => {
    console.log('Listing on port - ' + port);
});

