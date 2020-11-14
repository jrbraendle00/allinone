var express = require('express');

const ejs = require('ejs');

var app = express();

const port = process.env.PORT || 3000

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.listen(port);


//get routes
app.get('/', function (req, res) {
    res.render('pages/index');
});