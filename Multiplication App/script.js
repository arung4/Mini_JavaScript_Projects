let num1=document.querySelector("#num1"); 

let num2=document.querySelector("#num2"); 

let inputEl=document.querySelector("#input");

// Generating random numbers 
let random1= Math.floor(Math.random()*10);
let random2= Math.floor(Math.random()*10);

console.log(random1);

let submitbutton=document.querySelector("button");

num1.innerHTML=random1;
num2.innerHTML=random2;

const correctAns = random1*random2;

// Score variable 
let score= JSON.parse(localStorage.getItem("score"));

// score element
let scoreEl=document.querySelector("#score");
// Handling the submit button 
const formEl=document.querySelector("#form");



formEl.addEventListener("submit",(e) => {
const userAns= +inputEl.value;
console.log(userAns);
// comparing the userans with the correct ans 
if(userAns===correctAns){
    score++;
    updateLocalStorage();
}else{
    score--;
    updateLocalStorage();
}
scoreEl.innerHTML= score;
// e.preventDefault();
});


function updateLocalStorage(){
   localStorage.setItem("score",JSON.stringify(score));
}