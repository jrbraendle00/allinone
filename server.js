var express = require('express');

const ejs = require('ejs');

var app = express();

const port = process.env.PORT || 3000

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.listen(port);

//get routes

//main pages------------------------------
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.get('/allgames', function (req, res) {
    res.render('pages/allgames');
});

app.get('/leader', function (req, res) {
    res.render('pages/leader');
});

app.get('/multiplayer', function (req, res) {
    res.render('pages/multi');
});

app.get('/singleplayer', function (req, res) {
    res.render('pages/single');
});

//games------------------------------------------------

//hangman
app.get('/hangman', function (req, res) {
    res.render('pages/hangman/hangman');
});

//simon
app.get('/simon', function (req, res) {
    res.render('pages/simon/simon');
});

//snake
app.get('/snake', function (req, res) {
    res.render('pages/snake/snake');
});

//tetris
app.get('/tetris', function (req, res) {
    res.render('pages/tetris/tetris');
});

//tictactoe
app.get('/tictactoe', function (req, res) {
    res.render('pages/tictactoe/tictactoe');
});

//connect-4
app.get('/connect4', function (req, res) {
    res.render('pages/connect4/connectFour');
});

//minesweeper
app.get('/minesweeper', function (req, res) {
    res.render('pages/minesweeper/minesweeper');
});

//ping pong
app.get('/pingpong', function (req, res) {
    res.render('pages/ping-pong/pong');
});

app.get('/checkers', function (req, res) {
    res.render('pages/checkers/index');
});
