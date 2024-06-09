import { Product } from './product.model';

const products: Product[]=[];

const createProduct =(data:Product)=>{
  products.push(data);
};

const calcStock = ():number =>
  products.reduce((acc, product) => acc + product.stock, 0);

  export { calcStock, createProduct, products };



