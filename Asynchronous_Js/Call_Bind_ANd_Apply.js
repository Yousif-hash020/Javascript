let obj = {
    Name : "Yousaf",
    Age : 26
}

function abcd(){
    console.log(this);
}

abcd.call(obj);

