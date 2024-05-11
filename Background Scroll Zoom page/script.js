// selectors 
const bgimgEl=document.querySelector('#bg-image');
console.log(bgimgEl);

// Event

window.addEventListener("scroll", ()=>{
    updateImage(); 
})

// function
function updateImage() {
 bgimgEl.style.opacity= 1 - window.pageYOffset /900;

 bgimgEl.style.backgroundSize= 100- window.pageYOffset/12 + "%";

}