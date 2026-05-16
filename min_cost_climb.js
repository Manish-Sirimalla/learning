function climbStairs(cost){
    const n=cost.length
    let prev1=cost[1]
    let prev2=cost[0]
    for(let i=2;i<n;i++)
    {
        const current=Math.min(prev1,prev2)+cost[i]
        prev2=prev1
        prev1=current
    }
    return Math.min(prev1,prev2)
}
console.log(climbStairs([1,2,3,4,5]))