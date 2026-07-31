function array(){

    let arr = [1,2,3];
    let new_arr = arr.map(function(val, index){
        return  val + index  })
    console.log(arr)
    console.log(new_arr)
    
}

array()