let a=prompt("enter value one");
let b=prompt("enter value two");
let c=prompt("enter value three");

let bigNumber=(a>b && a>c)? `greatest number is 'a' ${a}`: (b>a && b>c)? `greatest number is 'b' ${b}`:
              (c>a && c>b)? `greatest number is 'c' ${c}`:0;

console.log(bigNumber);