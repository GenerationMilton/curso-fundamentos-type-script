(()=>{
  //alias para el tipado con type
  type UserID= string|number;
  let userId: UserID;

  //Literal types
  type Sizes = 'S'|'M'|'L'|'XL';
  let shirtSize:Sizes;
  shirtSize='M';
  shirtSize='L';
  shirtSize='XL';

  //con una funcion
  function greeting(userId: UserID,Size:Sizes){
    if(typeof userId==='string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting(1111,'L');
  greeting('1111','XL');
})();
