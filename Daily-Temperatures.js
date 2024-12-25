// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

// Example 1:

// Input: temperatures = [30,38,30,36,35,40,28]

// Output: [1,4,1,2,1,0,0]
// Example 2:

// Input: temperatures = [22,21,20]

// Output: [0,0,0]

// YOU DID NOT RIGHT THIS CODE ON YOUR OWN

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    dailyTemperatures(temperatures) {
        
        let temp = temperatures
        this.tempStack=[]
        let warmer = new Array(temp.length).fill(0)

        for(let i=0; i<temp.length; i++) {

            if(this.tempStack[this.tempStack.length-1]) {
                while(this.tempStack.length>0 && temp[i] > this.tempStack[this.tempStack.length-1][0] ) {
                    const [temp, day] = this.tempStack.pop()
                    warmer[day] = i - day
                }
            }
            this.tempStack.push([temp[i], i])
        }
        return warmer;
    }
}

let inst = new Solution();
console.log(inst.dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))