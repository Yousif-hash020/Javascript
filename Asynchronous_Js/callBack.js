function callBack(fnc){
    setTimeout(function(){
        fnc();
    }, 2000)
}

function fncn(){
    console.log("callBack ")
}

callBack(fncn);
