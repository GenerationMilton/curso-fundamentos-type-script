import { calcStock, createProduct, products } from './product.service';

createProduct({
  name:'product 1',
  createdAt:new Date(2024,4,1),
  stock: 32,
  size: 'S'
});
createProduct({
  name:'product 2',
  createdAt:new Date(2024,4,1),
  stock: 32,
  size: 'M'
});
console.log(products);

const total =calcStock();
console.log(total);
