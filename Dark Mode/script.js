// selectors 
const buttonEl=document.querySelector(".theme-toggle"); 

// state 
const theme= localStorage.getItem('theme'); 


// on mount 
theme && document.body.classList.add(theme);

// handlers 

const buttonHandle= () =>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem('theme', 'dark-mode'); 
    }else{
        localStorage.removeItem('theme'); 
    }
};

// events 
buttonEl.addEventListener("click", buttonHandle);





