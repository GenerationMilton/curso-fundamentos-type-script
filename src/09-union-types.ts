(()=>{
  let userId: string|number;
  userId=1212;
  userId='asadad';

  //funciones
  function greeting(myText: string|number){
    //typeof o guardianes
    if(typeof myText==='string'){
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(1)}`);
    }

  }
  greeting('Milton');
  greeting(12.1212121212);
})();
