const findLongestWord =(str)=>{
if(str.trim().length === 0){
    return false
}
words= str.split(" ")
console.log(words)
return words.reduce(
    (accum,currWord)=> (currWord.length > accum.length ? currWord:accum)
    
)
}
console.log(
    findLongestWord("Watch Thapa Technical Javascript Course On Youtube")
)