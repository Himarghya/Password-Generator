const toogel_Switch = document.querySelector(".Main-container");
const toggle_switch2 = document.querySelector(".circle");
const image1 = document.getElementById("image-1");
const navbar = document.querySelector("#navBar");
const footer = document.querySelector(".footer");
const Generator = document.querySelector(".Generator");
const Length = document.querySelector(".Length");
const checkbox = document.querySelector(".Checkboxs");
const githubProfile = document.querySelector(".github-Profile");
const body = document.querySelector(".root");    
const Password = document.querySelector("#Password");
const GenerateButton = document.querySelector("#Generate");

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

const UpperCase = document.querySelector("#UpperCase");
const LowerCase = document.querySelector("#LowerCase");
const Numbers = document.querySelector("#Numbers");
const Symbols = document.querySelector("#Symbols");


GenerateButton.addEventListener("click", () => {
   generatePassword(change());
});
change();
 
function change(){
    Length.addEventListener("change", (event) => {
         let TrueValue = event.target.value;
         Length.innerHTML = `Password-Length: <input type='range' id='length' min='4' max='20' value='${event.target.value}'>` + event.target.value;
         }); 
         return TrueValue;
}

function generatePassword(Value) {
    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            if(event.target.id === "uppercase") {
                let password = "";
                for(var i = 0 ; i < Value; i++) {
                    password += UpperCaseArry[Math.floor(Math.random() * lengthUCA)];
                }
                console.log(password);
                Password.value = password;
                
            } else if(event.target.id === "lowercase") {
                let password = "";
                for(var i = 0 ; i < Value; i++) {
                    password += LowerCaseArry[Math.floor(Math.random() * lengthLCA)];
                }
                console.log(password);
                Password.value = password;
                
            } else if(event.target.id === "numbers") {
                let password = "";
                for(var i = 0 ; i < Value; i++) {
                    password += NumberArry[Math.floor(Math.random() * lengthNCA)];
                }
                console.log(password);
                Password.value = password;
                
            } else if(event.target.id === "symbols") {
                let password = "";
                for(var i = 0 ; i < Value; i++) {
                    password += SymbolArry[Math.floor(Math.random() * lengthSCA)];
                }
                console.log(password);
                Password.value = password;
            }
        }
        else{
            alert("Please Select a value");
        }
    });

}

