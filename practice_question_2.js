const generateHash=(str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false
    }
words=str.split(" ")

words=words.map((word) => word.replace(word[0],word[0].toUpperCase()))
str=`#${words.join("")}`
return str

}
console.log(
    generateHash("eshwar pedha puli ludo king")
)