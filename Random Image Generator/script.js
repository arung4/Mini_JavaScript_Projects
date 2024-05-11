const imageContainerEl=document.querySelector('.image-container');

const btnEl=document.querySelector("#btn"); 


btnEl.addEventListener("click", ()=>{
    imageNum=10;
    addNewImage();
})

function addNewImage() {

    for (let index = 0; index< imageNum; index++) {
        const imageEl=document.createElement("img"); 
 imageEl.src= `https://picsum.photos/300?random=${Math.floor(Math.random()*3000)}`;
 imageContainerEl.appendChild(imageEl);
        
    }

}