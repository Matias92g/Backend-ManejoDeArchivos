import Product from "./classes/product.js";
import ProductManager from "./classes/productManager.js";

const productManager = new ProductManager();

const producto1 = new Product(
  "Camiseta Boca Juniors", 
  "Titular Temporada 23", 
  40500, 
  "imagen ilustrativa", 
  "CBJT23", 
  15, 
  []
);
const producto2 = new Product(
  "Camiseta River Plate", 
  "Titular Temporada 23", 
  35599, 
  "imagen ilustrativa", 
  "CRPT23", 
  24, 
  []
);
const producto3 = new Product(
  "Camiseta Racing Club", 
  "Titular Temporada 23", 
  24500, 
  "imagen ilustrativa", 
  "CRCT23", 
  10, 
  []
);
const producto4 = new Product(
  "Camiseta Independiente", 
  "Titular Temporada 23", 
  30500, 
  "imagen ilustrativa", 
  "CIT23", 
  12, 
  []
);

await productManager.initialize();

// addProduct
await productManager.addProduct(producto1);
await productManager.addProduct(producto2);
await productManager.addProduct(producto3);
await productManager.addProduct(producto4);

// Borrar
await productManager.deleteProd(2);

// Get
await productManager.getProducts();

// Update
await productManager.updateProd(3, {
  title: "Camiseta Racing Club",
  description: "Suplente Temporada 2023",
  price: 15500,
  thumbnail: "Imagen ilustrativa",
  code: "CRCS23",
  stock: 5,
});

setTimeout(async () => {
  await productManager.getProducts();
}, 5000);

await productManager.getProdById(2);
await productManager.getProdById(3);