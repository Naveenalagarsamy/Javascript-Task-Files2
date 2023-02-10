// ADD TO CART SECTION 

document.getElementById("addcartiphone").addEventListener("click",()=>{
    
    alert(" selected iphone is added");
    document.getElementById("product1").style.display="block";
    document.getElementById("button1").style.display="block";
});

document.getElementById("addcartoppo").addEventListener("click",()=>{
    
    alert(" selected oppo is added");
    document.getElementById("product3").style.display="block";
    document.getElementById("button2").style.display="block";
});

document.getElementById("addcartsamsung").addEventListener("click",()=>{
    
    alert(" selected samsung is added");
    document.getElementById("product2").style.display="block";
    document.getElementById("button3").style.display="block";
});

// PRODUCT INCREMENT DECREMENT 


 let i = 1;
 document.getElementById("incrementvalue1").innerHTML=i;
 document.getElementById("increment1").addEventListener("click", ()=> {
    i++;    
    document.getElementById('incrementvalue1').innerHTML = i;
});
   
document.getElementById("decrement1").addEventListener("click", ()=> {
    i--;    
   (i>=1)? document.getElementById('incrementvalue1').innerHTML = i : 0;
});
 

document.getElementById("incrementvalue2").innerHTML=i;
document.getElementById("increment2").addEventListener("click", ()=> {
    i++;    
    document.getElementById('incrementvalue2').innerHTML = i;
});

document.getElementById("decrement2").addEventListener("click", ()=> {
    i--;    
   (i>=1)? document.getElementById('incrementvalue2').innerHTML = i :0;
});


document.getElementById("incrementvalue3").innerHTML=i;
document.getElementById("increment3").addEventListener("click", ()=> {
    i++;    
    
    document.getElementById('incrementvalue3').innerHTML = i;
});

document.getElementById("decrement3").addEventListener("click", ()=> {
    i--;    
  (i>=1)?  document.getElementById('incrementvalue3').innerHTML = i : 0;
});
