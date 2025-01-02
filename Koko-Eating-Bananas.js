// Koko Eating Bananas
// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
// Return the minimum integer k such that you can eat all the bananas within h hours.
// Example 1:
// Input: piles = [1,4,3,2], h = 9
// Output: 2
// Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.
// Example 2:
// Input: piles = [25,10,23,4], h = 4
// Output: 25

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

       let max = Math.max(...piles)
       let l=0, r=max-1, mid, rate= max

       while(l <= r) {

        mid = l+Math.floor((r-l)/2)
        if(this.bananaEatingTime(piles, mid) <= h) {
            rate = mid
            r = mid-1
        } else {
            l = mid+1
        }    
       }
       return mid
    }

    bananaEatingTime(piles, mid) {
        let total=0
        for(let i=0; i<piles.length; i++) {
            total+= Math.ceil(piles[i]/mid)
        }
        return total
    }

    createArray(n) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }

    minEatingSpeedCopied(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}

let inst = new Solution();
let piles = [3,6,7,11], h = 8
console.log(inst.minEatingSpeed(piles, h))