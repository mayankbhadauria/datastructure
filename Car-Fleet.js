
// There are n cars traveling to the same destination on a one-lane highway.

// You are given two arrays of integers position and speed, both of length n.

// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.

// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

// Return the number of different car fleets that will arrive at the destination.

// Example 1:

// Input: target = 10, position = [1,4], speed = [3,2]

// Output: 1
// Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

// Example 2:

// Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

// Output: 3
// Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let positionWithSpeed = new Array(target).fill(0)
        let tempArr = []

        for(let i=0; i<position.length; i++) {
            positionWithSpeed[position[i]] = speed[i]
        }

        for(let i=0; i<target; i++) {

            if(positionWithSpeed[i]>0) {

                let time = (((target-1) - i)/positionWithSpeed[i])

                time = parseFloat(time.toFixed(2))

                tempArr.push(time)
            }
        }
        
        console.log(tempArr)

        tempArr.reverse()
        let count=0

        for(let i=0; i < tempArr.length; i++) {
            if(tempArr[i] !== Number.NEGATIVE_INFINITY) {
                let poped = tempArr[i]
                tempArr[i] = Number.NEGATIVE_INFINITY
                let j = i+1

                while(j<tempArr.length && tempArr[j] != Number.NEGATIVE_INFINITY && (poped == tempArr[j] || poped > tempArr[j])) {
                    tempArr[j] = Number.NEGATIVE_INFINITY
                    j++
                }
                count+=1
            }
        }

        return count
    }
}


let inst = new Solution();

// let target = 10, position = [4,1,0,7], speed = [2,2,1,1]

let target = 10, position = [1,4], speed = [3,2]

// let
// target=12,
// position=[10,8,0,5,3],
// speed=[2,4,1,1,3]

// let
// target=10
// position=[8,3,7,4,6,5]
// speed=[4,4,4,4,4,4]

console.log(inst.carFleet(target, position, speed));