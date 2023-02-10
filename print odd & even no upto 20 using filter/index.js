
 let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



    let evenNo=arr.filter((r)=>{
        return condition=(r%2==0)? r:0;
    });
    console.log(evenNo);

    
    let oddNo=arr.filter((r)=>{
        return condition=(r%2!=0)? r:0;
    });
    console.log(oddNo);