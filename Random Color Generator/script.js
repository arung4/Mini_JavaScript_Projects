const containerEl= document.querySelector(".container"); 

for (let index = 0; index < 32; index++) {
    const colorContainerEl= document.createElement("div"); 
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls=document.querySelectorAll(".color-container");

function GenerateColor(){
 colorContainerEls.forEach((colorContainerEl) =>{
    const newColor= randomColor();
   colorContainerEl.style.backgroundColor= "#" + newColor;
   colorContainerEl.innerHTML="#"+newColor;
 })

}

GenerateColor();

// Random Color Generate Function 
function randomColor(){

const chars ="0123456789abcdef";
const colorCodeLength=6;
let colorCode="";

for (let index = 0; index < colorCodeLength; index++) {
    const randomNum= Math.floor(Math.random()*chars.length);
    colorCode+= chars.substring(randomNum, randomNum +1);
    console.log(colorCode, randomNum);
}
return colorCode;
}
