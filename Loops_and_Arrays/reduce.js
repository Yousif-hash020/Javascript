let arr = [1,2,3,4,5]

let new_arr = arr.reduce(function(acc, cur){
    return acc + cur;
},0);

console.log(new_arr)
console.log(arr)