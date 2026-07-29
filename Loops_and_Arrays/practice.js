let arr = [1,2,3,4];

let total = arr.reduce((acc, cur)=> acc * cur,1)


arr.forEach((nums, index) =>{
    arr[index] = total / nums
});

console.log(arr)