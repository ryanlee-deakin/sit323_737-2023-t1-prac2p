var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('<h1 style="text-align: center; padding-top: 200px;">Hello from Lee Ryan.</h1>')
})

let log = function (msg) {
    let d = new Date()
    let out = "[" + d.toTimeString().slice(0, 8) + "] [webserver]: " + msg;
    console.log(out)
}

app.listen(3000)
log("app started.")