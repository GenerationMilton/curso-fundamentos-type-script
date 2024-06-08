(()=>{
  let productPrice=100;
  productPrice=12;
  console.log('product price', productPrice);

  //inferir tipo directamente
  let customerAge: number = 28;
  //customerAge= customerAge+ '1';// 281 en JS enTS es error por string
  customerAge=customerAge + 1; //281
  console.log('customer age', customerAge);

  //inicializando variables sin valor se deben tipar --alertas de ts
  let productInStock: number;
  console.log('product in stock', productInStock); //se debe inicializar o ts alerta del error

  if(productInStock>10){
    console.log('is greater');
  }

  //parsear un valor de in a string
  let discount = parseInt('100');
  console.log('discount', discount);

  if(discount<=200){
    console.log('apply');
  }else{
    console.log('not apply');
  }

  //number hexadecimals
  let hex =0xfff;
  console.log('hex',hex);
  //number binarios
  let bin=0b1010;//10
  console.log('bin',bin);

  //tipar en Ts con number no con Number
  const myNumber: number=10;
})();
