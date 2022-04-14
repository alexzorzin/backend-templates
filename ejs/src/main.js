const express = require('express');
const Productos = require('../api/productos');

const app = express()
const importarProductos = new Productos
const productos = importarProductos.productos;

app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { productos })
})
app.get ('/productos', (req,res)=>{
    res.render('listado', {productos})
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