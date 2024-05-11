// selectors 

const inputEl=document.querySelector(".input"); 

const bodyEl=document.querySelector("body");

// checking the previous state of body when loaded
inputEl.checked= JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){

    if(inputEl.checked){
        bodyEl.style.backgroundColor="black";
        localStorage.setItem('theme','acitve');
    }else{
        bodyEl.style.backgroundColor="white";
        localStorage.removeItem('theme');
    }
}

function updateLocalStorage(){
    localStorage.setItem("mode", 
      JSON.stringify(inputEl.checked)
    );
   
   }

inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage();
})


