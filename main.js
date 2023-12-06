class ProductManager {
    static ultId = 0;


//Array vacio.
    constructor() {
        this.products = [];
    }

//Métodos.
    addProduct(title, description, price, img, code, stock) {


//Validamos todos los campos.
        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios!!!");
            return;
        }

//Validamos que el código sea único.
        if (this.products.some(item => item.code == code)){
            console.log("El codigo debe ser unico en el mundo");
            return;
        }

//Creamos un nuevo objeto con todos estos datos.
         const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock,
         }

         this.products.push(newProduct);

    }

    getProducts () {
        console.log(this.products);
    }

    getProductsById(id) {
        const product = this.products.find(item => item.id ===id);

        if (!product) {
            console.log("El producto no se encuentra!");
        }
        else { 
            console.log("Producto encontrado!!!", product)
        }
        return product;
    }


}

//Testing.


//clase “ProductManager”.
const manager = new ProductManager();

//“getProducts”, debe devolver un arreglo vacío.
manager.getProducts();


//“addProduct” con los campos.
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// El objeto debe agregarse con un id generado automáticamente sin repetir.
manager.addProduct("Pelota de Basquet", "Este es un producto prueba", 200, "Sin imagen", "abc124", 50);

manager.addProduct("Pelota de Futbol", "Este es un producto prueba", 200, "Sin imagen", "abc125", 50);

//Se llamará el método “getProducts” nuevamente.
manager.getProducts();


//Metodo “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct("Pelota de Basquet", "Este es un producto prueba", 200, "Sin imagen", "abc124", 50);

//getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo.
manager.getProductsById(2);
manager.getProductsById(10);