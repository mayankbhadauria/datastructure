

let arr = [{temp:28, day:4}, {temp:20, day:5}]
let popedElem
arr.forEach((key, value) => {
    
    if(key.temp<25) popedElem = arr.pop()
})

console.log(arr)
console.log(popedElem)
