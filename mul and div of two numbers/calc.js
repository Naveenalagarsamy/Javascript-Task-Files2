document.getElementById("loader").style.display = "none";


function multiplication(){
    document.getElementById("loader").style.display = "block";
    let x=document.getElementById("firstnumber").value;    //first number value
    let y=document.getElementById("secondnumber").value;   //second number value

    if(x && y){
    
    setTimeout(()=> {
         final=x*y;   
         document.getElementById("muldisplay").innerHTML=final;
        },2000);
    }
    else{
        setTimeout(()=> document.getElementById("muldisplay").innerHTML="please enter number",2000);
    }
    
}

function division(){
    document.getElementById("loader").style.display = "block";
    let x=document.getElementById("firstnumber").value;    //first number value
    let y=document.getElementById("secondnumber").value;   //second number value

    if(x && y){
    
    setTimeout(()=> {
         final=x/y;   
         document.getElementById("muldisplay").innerHTML=final;
        },2000);
    }
    else{
        setTimeout(()=> document.getElementById("muldisplay").innerHTML="please enter number",2000);
    }
    
}

