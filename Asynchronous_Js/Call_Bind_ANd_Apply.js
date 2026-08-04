let obj = {
    Name : "Yousaf",
    Age : 26
}

function abcd(a,b,c){
    console.log(this,a,b,c);
}

abcd.call(obj,1,2,3);


abcd.apply(obj, [3,2,1]);

let fn = abcd.bind(obj,4,5,6);
fn();
