(()=>{
  //funcion con un objeto
  const login= (data:{email:string, password:number})=>{
    console.log(data.email, data.password);
  }
  //llamar la funcion
  login({
    email:'livemilton@gmail.com',
    password:1234567
  });

  //funcion con atributos y parametros
  type Sizes = 'S'| 'M'|'L'|'XL';

  const products: any[] = [];
  //funcion addProduct
  const addProduct=(data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  })=>{
    products.push(data);
  }

  //llamar la funcion
  addProduct({
    title:'product 1',
    createdAt:new Date(2024,4,1),
    stock: 32,
    size: 'S'
  });
  addProduct({
    title:'product 2',
    createdAt:new Date(2024,4,1),
    stock: 32,
    size: 'M'
  });
  console.log(products);
})();

