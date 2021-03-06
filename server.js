const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jean',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.get('/requisitos', (req, res) => {

    res.render('requisitos', {
        anio: new Date().getFullYear()
    });

});
app.get('/cuentas', (req, res) => {

    res.render('cuentas', {
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port}`);
});