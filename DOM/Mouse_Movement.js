let div = document.querySelector("div")

window.addEventListener("mousemove", function(e){
    div.style.top = (e.clientY- 50) + "px";
    div.style.left = (e.clientX-50) + "px";
})