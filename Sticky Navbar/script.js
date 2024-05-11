const navbarEl=document.querySelector('.navbar');
 
const bottomEl=document.querySelector(".bottom-container"); 

window.addEventListener("scroll", ()=>{
    
    if(window.scrollY > 
        bottomEl.offsetTop - navbarEl.offsetHeight - 50
        ){
            navbarEl.classList.add("active")
        } else{
            navbarEl.classList.remove("active");
        }
})

