(()=>{
  //let myNumber: number =undefined;
  //let myString: string= null;

  //Definir el tipo de dato
  let myNull: null= null;
  let myUndefined: undefined= undefined;

  //o con union types
  let myNumber:number | null= null;//
  myNumber =12;

  let myString: string | undefined = undefined;
  myString='ass';

  //usar funcion con union types en caso de definir un null
  function hi(name: string | null){
    let hello ='hola ';
    if(name){
      hello +=name;
    }else{
      hello += 'nobody';
    }
    console.log(hello);
  }
  hi('Milton');
  hi(null);

  //alternativa con null y ternario ?
  function hiV2(name:string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hiV2('Jhon');
  hiV2(null);

})();
