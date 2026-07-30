let arr = [1,2,3,4,5]

let new_arr = arr.some(function(val){
    return val > 4;
})

let eve = arr.every(function(val){
    return val >1
})

console.log(new_arr)
console.log(eve)