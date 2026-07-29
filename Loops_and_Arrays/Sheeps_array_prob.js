let arr = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

   let true_Count = 0
   let false_Count = 0

  arr.forEach((e)=>{
    if(e== true){
       true_Count++;
    }
    else{
        false_Count++
    }
  });


  console.log(true_Count)
  console.log(false_Count)