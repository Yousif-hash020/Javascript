function factorial(n){
    fac = 1
    for(let i = n; i>=1; i--){
       fac = fac * i; 
    }
    console.log(fac)
}

factorial(4)