let nav= document.querySelector("header nav");
window.addEventListener("scroll",function(){
    nav.classList.toggle("stickyHeader",window.scrollY>0);
});
console.log(nav);
let manualButton = document.querySelectorAll(".manual-btn");
console.log(manualButton);
let T = manualButton;
 manualButton.forEach((button)=>{
    
    button.addEventListener("click",function(){
        for(let i=0; i<manualButton.length;i++){
            manualButton[i].classList.remove("Na3lbook");
            console.log(manualButton[i]);
        };
        button.classList.toggle("Na3lbook");
        
    }); 
    
}); 
let dropDown = document.querySelector(".dropDown");
let dropBtn = document.querySelector(".dropBtn");
let spanList= document.querySelectorAll(".dropBtn span");
dropBtn.addEventListener("click",()=>{
    dropDown.style.display='flex';
    dropDown.classList.toggle("hide");
    dropBtn.classList.toggle('btnInv');
     spanList.forEach((span)=>{
        span.classList.toggle('spanInv');
    }); 

    console.log(spanList);
  });