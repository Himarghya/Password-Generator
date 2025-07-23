const toogel_Switch = document.querySelector(".Main-container");
const toggle_switch2 = document.querySelector(".circle");
const image1 = document.getElementById("image-1");
const navbar = document.querySelector("#navBar");
const footer = document.querySelector(".footer");
const Generator = document.querySelector(".Generator");
const Length = document.querySelector(".Length");
const LabelLength = document.querySelector("#length");
const checkbox = document.querySelector(".Checkboxs");
const githubProfile = document.querySelector(".github-Profile");
const body = document.querySelector(".root");    
const Password = document.querySelector("#Password");


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
const UpperCaseArry = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const LowerCaseArry = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const NumberArry = ["0","1","2","3","4","5","6","7","8","9"];
const SymbolArry = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":",";","<",">",",",".","?","/"];
const lengthUCA = UpperCaseArry.length;
const lengthLCA = LowerCaseArry.length;
const lengthNCA = NumberArry.length;
const lengthSCA = SymbolArry.length;

const UpperCase = document.querySelector("#uppercase");
const LowerCase = document.querySelector("#lowercase");
const Numbers = document.querySelector("#Numbers");
const Symbols = document.querySelector("#Symbols");

const GenerateButton = document.querySelector("#Generate");
LowerCase.addEventListener("click", () => {
    console.log(LowerCas e.checked);
    if(LowerCase.checked === true) {
        GenerateButton.addEventListener("click", ()=>{
        console.log("Hello world");});
    }
    else {
        console.log("Joker");
    }
});



