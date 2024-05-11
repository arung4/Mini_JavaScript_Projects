const textareaEl=document.getElementById("textarea"); 

const totalCountEl=document.getElementById("total-count");

const totalRemainingEl=document.getElementById("remaining-count");


textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
    
})

updateCounter();

function updateCounter(){
   totalCountEl.innerText= textareaEl.value.length;
   totalRemainingEl.innerText=textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}


 

