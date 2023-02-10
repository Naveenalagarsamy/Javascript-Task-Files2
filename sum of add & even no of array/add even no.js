let arr=[12,13,55,66,40,33,11,10];


let evenNo=arr.filter(x=>{return(x%2==0)?` ${x}`:0}) ; 
let evenSum=evenNo.reduce((y,z)=> total=z+y)
console.log("even numbers from array "+" "+evenNo);

console.log("The sum of even numbers in array ="+" "+evenSum);




let oddNo=arr.filter(x=>(x%2!=0)?x:0);
let oddSum=oddNo.reduce((y,z)=>total=z+y);

console.log("odd numbers from array"+" "+oddNo);
console.log("The sum of odd numbers in array ="+" "+oddSum);