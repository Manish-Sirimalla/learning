const arr = [5, 10, 15, 20];
 let totalCount= arr.reduce((count,number)=>{
    if(number>10){
        count++
    }
    return count
 },0)
 console.log(totalCount)