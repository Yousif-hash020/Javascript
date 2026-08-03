let div = document.querySelector("div")

window.addEventListener("mousemove", function(e){
    div.style.top = e.clientY + "px";
    div.style.left = e.clientX + "px";
})