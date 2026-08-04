let count = 0;
let bar = document.querySelector(".fill");
let percentText = document.querySelector("#percent");

let interval = setInterval(function(){
    if(count <= 99){
        count++;
        bar.style.width = `${count}%`
        percentText.textContent =  `${count}%`
    }

    else{
        clearInterval(interval)
    }

},3000 / 100)