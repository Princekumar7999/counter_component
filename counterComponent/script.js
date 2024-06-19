let Increment=document.querySelector(".Increment-btn");
let Decrement=document.querySelector(".Decrement-btn");
var countElement=document.querySelector("h2");
var count=0;
Increment-Btn.addEventListener("click",function(){
    console.log("Btn clicked");
    count++;
    countElement.innerText= "count : "+count;
})

Decrement-Btn.addEventListener("click".function(){
    console.log("Btn clicked");
    count--;
    countElement.innerText="count : "+count;
})