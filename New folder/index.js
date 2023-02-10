let arr1=[1,2,3,4,5,6];
console.log(arr1);

let arr2=arr1;

console.log(arr1);
console.log(arr2);
arr2.push(7);
console.log(arr2);
console.log(arr1);

console.log("yes if we change in arr2 it will also change the arr1");