
const btnEl=document.querySelector("#button"); 

// btnEl.addEventListener("mouseover", (e)=>{
//     const x=e.pageX - btnEl.offsetLeft;
//    const y= e.pageY - btnEl.offsetTop;

//    btnEl.style.setProperty("--PosX", x + "px");
//    btnEl.style.setProperty("--PosY", y + "px");
//    console.log(e.pageX);
//    console.log(e.pageY);
// })
document.body.addEventListener("mouseover",(e)=>{
    console.log(e.pageX);
})
