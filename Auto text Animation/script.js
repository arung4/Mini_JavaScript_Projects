
const headEl=document.querySelector("h1");

const career= ["Web Developer", "Student", "Coder", "Instructor"];


let careerIndex=0;

let characterIndex=0;

updateHeading();

function updateHeading(){
    characterIndex++;
    headEl.innerHTML= `I am 
    
    ${career[careerIndex].slice(0,1)=== 'I' ? "an" : "a"}
    
    ${career[careerIndex].slice(0,characterIndex)}`;

    if(characterIndex === career[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }

    if(careerIndex === career.length){
        careerIndex = 0;
    }
    setTimeout(updateHeading, 400);
}




