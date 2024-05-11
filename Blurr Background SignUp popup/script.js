
// selectors 
const clickEl=document.querySelector("#join");

const joinPageEl=document.querySelector(".join-page"); 

const closeEl=document.querySelector("#close-button"); 

const mainpageEl=document.querySelector(".main-page");

// Event handler for click to join button
clickEl.addEventListener("click", ()=>{
  joinPageEl.classList.remove("active2");
  mainpageEl.classList.add("active");
  joinPageEl.style.animation=" ";

})

// Event handler for close button
closeEl.addEventListener("click", ()=>{
    joinPageEl.classList.add("active2");
    mainpageEl.classList.remove("active");
})