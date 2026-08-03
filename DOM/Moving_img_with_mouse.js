let circle = document.querySelector("#circle");
let h1 = document.querySelector("h1");

h1.addEventListener("mousemove", function(e){
    circle.style.opacity = 1
    
    circle.style.left = (e.clientX - 100) + "px"
    circle.style.top = (e.clientY - 100 ) + "px"
})

h1.addEventListener("mouseout",function(e){
    circle.style.opacity = 0
    
} )