const arr = ["apple", "banana", "cherry"];
modified_arr=arr.reduce((result,word)=>{
     result.push(word.toUpperCase())
     return result
},[])
console.log(modified_arr)