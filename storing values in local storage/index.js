const Car =[ {
    brand:"Suzuki",
    color:"white",
    price:10000
  },
  {
    brand:"tata",
    color:"black",
    price:300000
  },

    {
        brand:"tesla",
        color:"silver",
        price:500000
      }

];
  
  window.localStorage.setItem('car', JSON.stringify(Car));

  
  function tata(){
   let result= JSON.parse(window.localStorage.getItem('car'));

   console.log(typeof(result));
   const filtered = result.filter((res,index)=>{
    return index==1?res:"";
   })
   console.log(filtered)

  }
  tata();