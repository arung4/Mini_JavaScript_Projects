
// selectors 
const imageContainerEl=document.querySelector('.image-container');

const prevBtnEl=document.querySelector('.prev');

const nextBtnEl=document.querySelector('.next');


// taking all the image elements into account

const imageEls= document.querySelectorAll('img');

let timeout; 

let currentImg=1;

// handling the next button click
nextBtnEl.addEventListener("click", ()=>{
     currentImg++; 
     clearTimeout(timeout);
     updateImage(); 
})

// handling the prev button click
prevBtnEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImage();
});


// update the image after the click event
function updateImage(){
    if(currentImg > imageEls.length){
       currentImg = 1;
    } else if(currentImg < 1){
         currentImg= imageEls.length;
    }
    imageContainerEl.style.transform= `translateX(-${(currentImg -1)*500}px)`;
 timeout = setTimeout(()=>{
      currentImg++; 
      updateImage();
 },3000);

}

