let pr = new Promise(function(resolve, reject){
    let rn = Math.floor(Math.random()*10);

    if (rn> 5 ) resolve("resolve with number " + rn);
    else reject("rejected with number " + rn );
})


async function asaw(){
     
     try {
        let val = await pr;
        console.log(val)
     } catch (error) {
        console.log(error)
     }
}

asaw();