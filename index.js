const fetch = require('node-fetch');
const express = require('express');
const path = require('path');
const PUERTO = process.env.PORT || 3000;
const app = express();
const exphbs = require('express-handlebars');
const hbs = exphbs.create();

app.use(express.static(path.join(__dirname, '/src')));

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home', {
        layout: 'boiler',
        data: {
            titulo: 'Arbolito Argentino',
            subTitulo: 'Nuestras Cotizaciones'
        }
    })
}) 

app.listen(PUERTO, () => {

})