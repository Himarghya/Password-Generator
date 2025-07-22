const toogel_Switch = document.querySelector(".Main-container");
const toggle_switch2 = document.querySelector(".circle");
const image1 = document.getElementById("image-1");
const navbar = document.querySelector("#navBar");
const footer = document.querySelector(".footer");
const Generator = document.querySelector(".Generator");
const Length = document.querySelector(".Length");
const checkbox = document.querySelector(".Checkboxs");
const githubProfile = document.querySelector(".github-Profile");
console.log(githubProfile);
const body = document.querySelector(".root");    
toogel_Switch.addEventListener("click" , () =>{
    toogel_Switch.classList.toggle("positioning");
    toggle_switch2.classList.toggle("container");
    image1.classList.toggle("image");
    body.classList.toggle("body");
    navbar.classList.toggle("navbar");
    footer.classList.toggle("Footer-2");
    Generator.classList.toggle("Generator-1");
    Length.classList.toggle("Length-1"); 
    checkbox.classList.toggle("checkbox-label");   
    githubProfile.classList.toggle("github-Profile1");
})

