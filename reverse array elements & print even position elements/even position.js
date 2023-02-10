let arr=["apple","mango","jackfruit","papaya","orange","banana","pineapple"];

console.log(arr);


console.log("even position elements from array type--1");
for(let x in arr){
    if(x%2==0 && x!=0){
        console.log("#"+arr[x]);
    }
} 

console.log("even position elements from array type---2");

for(let x in arr){
    if(x%2!=0 && x!=0){
        console.log("#"+arr[x]);
    }
} 