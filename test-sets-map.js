

class Solution {

    constructor() {
        this.keyStore = new Map();
    }
    
    set(key, val, time) {

        if(this.keyStore.has(key)) {
            let sub = this.keyStore.get(key)
            this.keyStore.set(time, val)
        }
        else {
            let subMap = new Map()
            subMap.set(time, val)
            this.keyStore.set(key, subMap)
        }
        
        return this.keyStore
    }

    get(key, time) {

        let found=null, key

        if(this.keyStore.has(key)) {
            
            let sub = this.keyStore.get(key)

            if(sub.has(key)) {
                found = sub.get(time)
                return found
            }
            else {
                let allKeys = Array.from(this.keyStore.get('alice').keys())
                key = this.searchBST(allKeys, target)
                found = sub.get(key)
            }
        }

        return found || null

    }

    searchBST(nums, target) {

        let l = 0, r = nums.length-1, m, last = nums.length-1

        if(nums[last] < target) return last
        if(nums[0] > target) return 0

        while(l <= r) {

            m = l + Math.floor((r-l)/2)

            if(t > nums[m]) {
                val = nums[m]
                l = m + 1
            }
            else {
                r = m - 1
            }
        }

        return val
    }

    createMap(data=[]) {

        let map = new Map()

        data.forEach(element => {
            map = this.set(element[0], element[1], element[2], map)
        });

        return map
    }

}


let arr = [["alice", "happy", 1], ["alice", "sad", 2], ["alice", "anger", 3], ["polaa", "khola", 1]]
let instance = new Solution()
let bst = instance.createMap(arr)

let closest = instance.findClosest([2,3,5,7,9], 3)

console.log(closest)

