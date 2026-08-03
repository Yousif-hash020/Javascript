let fileinp = document.querySelector("#fileInput");
let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    fileinp.click();
})

fileinp.addEventListener("change", function(e){
    h1.textContent = e.target.files[0].name;
})