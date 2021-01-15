const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

//Heroku settings
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'jordan torres'
    });
})

app.get('/about', function(req, res) {
    res.render('about');
})


app.listen(port, () => {
    console.log(`Escuchando el pureto ${port}`);
});