const countCharacter= (word,char) => {
 word=word.toLowerCase()
 char=char.toLowerCase()
 totalCount=word.split("").reduce((accum,currchar)=>{
    if(currchar===char){
        accum++
    }
    return accum
 },0);
 return totalCount

}
console.log(
    countCharacter("fyriowdngdhnfbgbvdedgehvdvdefdevcsvgfe","F")
)