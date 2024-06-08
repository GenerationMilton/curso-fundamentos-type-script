(()=>{
  let productTitle= 'My amazing product';
  // productTitle=null;
  // productTitle= ()=>{};
  // productTitle=123;
  productTitle='My amazing product changed';
  console.log('productTitle', productTitle);

  //se permite usar en strings comilla doble
  const productDescription= "bla bla ba bla asassa";
  console.log('productDescription', productDescription);

  //backtics
  let productPrice=100;
  let isNew=false;

  const summary =`
    title:${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew:${isNew}
  `;

  console.log(summary);
  //tipado
  const myString: string='';
})();
