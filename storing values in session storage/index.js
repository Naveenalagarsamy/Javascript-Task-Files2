const store={
    name:"apple",
    price:150,
    color:"red"
}

window.sessionStorage.setItem("store",JSON.stringify(store));

console.log(window.sessionStorage.getItem("store"));