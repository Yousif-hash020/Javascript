let count = 10;

let interval = setInterval(function(){
    if(count>=1){
        console.log(count);
        count--;
    }
    else{
        clearInterval(interval);
    }

}, 1000)