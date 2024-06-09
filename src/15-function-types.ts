(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';
  type Product ={
    title: string,
    createdAt:Date,
    stock: number,
    size?:Sizes
  };
   const products: Product [] = [];

   const addProduct =(data:Product)=>{
    products.push(data);
   }

   addProduct({
    title:'producto1',
    createdAt: new Date(2024,12,1),
    stock:14
   });

   console.log(products);
})();
