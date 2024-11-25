// let decrement =document.querySelector("#decrement-btn");
// let increment =document.querySelector("#increment-btn");
let value =0;
 value =document.querySelector(".value").innerText;

function increment(){
    value=value+1;
    document.querySelector("#value").innerText=value;
}

function decrement(){
    if(value>=1){
    value=value-1;
    document.querySelector("#value").innerText=value;
}
    else{
        value=0;
    document.querySelector("#value").innerText=value;

    }
}