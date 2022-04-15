const express = require('express');
const { engine } = require("express-handlebars");
const productos = require('../api/productos');


const app = express();

app.engine( "hbs", engine({ extname: "hbs", defaultLayout: 'index.hbs', layoutsDir: "views/layouts/", partialsDir:'/views/partials' }) );

// app.engine(
//     'hbs',
//     handlebars({
//         extname: '.hbs',
//         defaultLayout: 'index.hbs',
//         layoutsDir: __dirname + '/views/layouts',
//         partialsDir: __dirname + '/views/partials'
//     })
// )

app.set("view engine", "hbs");
app.set('views', './views');

app.get ('/productos', (req,res)=>{
    res.render('listProductos', {productos})
})
app.post('/productos', (req, res) => {
    productos.push(req.body);
    res.redirect('/')
})


app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`SERVIDOR ABIERTO EN EL PUERTO ${server.address().port}`);
})

server.on('error', error => console.log(`Error en el servidor ${error}`))