class ProductManager{
    constructor(){
        this.products = [];
    }

    //Obtener todos los productos
    getProducts = () => {
        return this.products;
    }

    //Agregar un producto
    addProducts = (title, description, price, thumbnail, code, stock) =>{
        const product = {title,description,price,thumbnail,code,stock};

        //Generar un id autoincrementable
        if (this.products.length === 0){
            product.id = 1;
        } else{
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
    }

    //Método para obtener un producto por su id
    getProductById = (categoryId) => {
        const product = this.products.find((product) => product.id === categoryId);
        if (product){
            return product;
        } else{
            console.log('Not Found');
        }
    }
}

const createProducts = new ProductManager();

//Agregar productos con addProducts
createProducts.addProducts(
    "Brasil Crucera",
    "Bolsa de café 250gr.",
    550,
    "bolsa-brasil.jpg",
    5,
    50
);
createProducts.addProducts(
    "Etiopía Najá",
    "Bolsa de café 250gr.",
    550,
    "bolsa-etiopia.jpg",
    10,
    40
);
createProducts.addProducts(
    "Guatemala GTA",
    "Bolsa de café 250gr.",
    700,
    "bolsa-guate.jpg",
    15,
    30
);

//Obtener todos los productos
console.log(createProducts.getProducts());

//Obtener productos por su id
createProducts.getProductById(1);
createProducts.getProductById(2);
createProducts.getProductById(3);