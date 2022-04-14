class Productos {
    constructor() {
        this.productos = [
                {
                    title: 'Six-Pack Quilmes',
                    price: 1100,
                    thumbnail: 'https://superlago.com.ar/wp-content/uploads/2022/02/004-003-016_cerveza-quilmes-x-473-cm3-pack-6-latas1-9d71ecbcaa3e4d8fe315901031574166-640-0.jpg',
                    // id: 1
                },
                {
                    title: 'Don Satur salados',
                    price: 570,
                    thumbnail: 'https://www.deliargentina.com/image/cache/catalog/product/alimentacion/bizcochitos-salados-de-grasa-don-satur-argentinos/bizcochitos-salados-de-grasa-don-satur-argentinos-1000x1000.png',
                    // id: 2
                },
                {
                    title: 'Agua Villavicencio',
                    price: 105,
                    thumbnail: 'https://jumboargentina.vtexassets.com/arquivos/ids/556225/Villavicencio-Pet-Sin-Gas-15-L-2-239949.jpg?v=637105938782970000',
                    // id: 3
                }
          ];
        this.id = 0;
    }

    save({ title, price, thumbnail }) {
        try {
            let productos = this.getAll();
            
            let id = 1;
            if (productos.length > 0) {
                console.log("Has elegido el producto nro " + productos.length);
                id = productos[productos.length - 1].id + 1;
                console.log(id);
                
            }

            productos.push({  title, price, thumbnail, id:id });
            console.log(`El producto nro ${id} se ha agregado`);
            return id;
        } catch (error) {
            console.log(`ERROR: ${error}`);
        }
    }
    getById(id){         
        const productos = this.getAll()
        console.log(id)
        const index = productos.findIndex(p => p.id == id)
        console.log(index)
        if (index == -1) {
            const errorNotFound = {error:'No se ha encontrado el producto'}
            return errorNotFound;
        }
    
        return this.productos[index]
    }
    getAll() {
        try {
            let getProductos = this.productos;

            return getProductos;
        } catch (err) {
            console.log(`No se han podido obtener los productos. ERROR: ${err}`);
            return [];
        }
    }

    updateById(id,productoNuevo){
        const productos = this.getAll()
        const index = productos.findIndex(p => p.id == id)
        if (index == -1) {
            throw new Error(`No se ha encontrado el producto con el id ${id}`)
        }
        this.productos[index] = {...productoNuevo, id: productos[index].id}
    }


    deleteById(id){
        const productos = this.getAll()
        const index = productos.findIndex(p => p.id == id)
        if (index == -1) {
            throw new Error(`No se ha encontrado el producto con el id ${id}`)
        }

        this.productos.splice(index, 1)
        
    }
        
}

module.exports = Productos;