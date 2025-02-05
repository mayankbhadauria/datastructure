class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    linkList(nums) {

        this.head = null

        this.head = new Node(nums.shift());

        let cur = this.head

        while(nums.length) {
            
           let node = new Node(nums.shift())
            cur.next = node
            cur = cur.next
        }

        return this.head

    }
}

class Node {
    constructor(val) {
        this.val=val
        this.next=null
    }
}


let inst = new Solution();

console.log(inst.linkList([]))