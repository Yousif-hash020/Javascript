let arr = [1,2,3,4,5,6,7,8,9,10]

let new_arr = arr.filter(function(val){

    if (val % 2 === 0) return true;
})

console.log(arr)
console.log(new_arr)