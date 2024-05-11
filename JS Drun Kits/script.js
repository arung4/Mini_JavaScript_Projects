
const kits= ["snare", "kick", "tom", "crash"];

const containerEl=document.querySelector(".container");



kits.forEach(kit =>{
    const btnEl= document.createElement("button"); 
    btnEl.classList.add("btn");
    containerEl.appendChild(btnEl);
    btnEl.innerText= kit;
    btnEl.style.backgroundImage= "url(images/"+ kit+ ".png)";
    const audioEl= document.createElement("audio");
    containerEl.appendChild(audioEl);
    audioEl.src= "audios/"+ kit+ ".mp3";

    btnEl.addEventListener("click", ()=>{
    audioEl.play();
    });


    window.addEventListener("keydown", (event)=>{
      
        if(event.key === kit.slice(0,1)){
           audioEl.play();
           btnEl.style.transform= "scale(0.9)";
        }
        setTimeout(()=>{
            btnEl.style.transform= "scale(1)";
        }, 200);
    });
});