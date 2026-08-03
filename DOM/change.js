let sel = document.querySelector("select");
let h1 = document.querySelector("h1");

sel.addEventListener("change", function(e){
    h1.textContent = `${e.target.value} car is selcted`

});