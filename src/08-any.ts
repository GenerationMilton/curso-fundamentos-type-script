(()=>{
  let myDinamicVar: any;
  myDinamicVar=100;
  myDinamicVar=null;
  myDinamicVar={};
  myDinamicVar='';
//casteo para datos con any
  myDinamicVar='Hola';
  const rta=(myDinamicVar as string).toLowerCase();
  console.log(rta);
//casteo para datos con any
  myDinamicVar=1212;
  const rta2=(<number>myDinamicVar).toFixed();
  console.log(rta2);
})();
