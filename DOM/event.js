let inp = document.querySelector("input");
inp.addEventListener("input", function(e){
    if(e.data !== null){ 
        console.log(e.data);
    }
});