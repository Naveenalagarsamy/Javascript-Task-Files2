function performcalc(){
    let x = document.getElementById("firstnumber").value;
    let y = document.getElementById("secondnumber").value;
    let calc=Number(x) + Number(y);
    if(x==y){
        document.getElementById("display").innerHTML=calc*3
    }
    else{
        document.getElementById("display").innerHTML=calc;
    }
}