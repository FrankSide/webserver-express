const express = require('express');
const app = express();
var hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

// Express HBS Engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Frank',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})

/* ==> aSI ES COMO LA WEB
app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }

    res.send(salida);
});*/

/*app.get('/data', (req, res) => {
    res.send('Hola Data');
});*/