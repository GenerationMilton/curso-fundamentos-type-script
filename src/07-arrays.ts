(()=>{
  let prices=[1,2,2,1,1,212,'hola', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  //agregar numbers al array de datos
  prices.push(121212);

  let products=['hola', true];
  products.push(false);

  //tipado para objetos number string boolean en el array
  let mixed: (number|string|boolean|Object)[]=['hola',true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  //map con arrays tipo numerico
  let numbers= [1,2,2,1,1,212];
  numbers.map(item=> item*2);
  console.log('numbers',numbers);

})();
