const toogel_Switch = document.querySelector(".Main-container");
const toggle_switch2 = document.querySelector(".circle");
const image1 = document.getElementById("image-1");
const body = document.querySelector(".root");    
toogel_Switch.addEventListener("click" , () =>{
    toogel_Switch.classList.toggle("positioning");
    toggle_switch2.classList.toggle("container");
    image1.classList.toggle("image");
    body.classList.toggle("body");
})

