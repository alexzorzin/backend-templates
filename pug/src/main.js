const express = require('express');
const productos = require('../api/productos');

const app = express()

app.use(express.urlencoded({ extended: true }));

app.set('views', '../views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { productos })
})
app.get ('/productos', (req,res)=>{
    res.render('listProductos', {productos})
})
app.post('/productos', (req, res) => {
    productos.push(req.body);
    res.redirect('/')
})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`SERVIDOR ABIERTO EN EL PUERTO ${server.address().port}`);
})

server.on('error', error => console.log(`Error en el servidor ${error}`))