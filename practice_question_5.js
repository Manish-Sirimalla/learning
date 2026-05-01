
const arr = [1, 2, 3, 4];
modified_arr=arr.map((number)=>{
    if((number) % 2 ===0){
        return (number**2)
    }
    return number
    
})
console.log(modified_arr)