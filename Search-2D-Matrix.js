
// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m * n)) time?

// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

// Output: true

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // This solution first finds potential ROW using binary search and than again find element in ROW using BST 
    searchMatrix(matrix, target) {

        let R = matrix.length-1 // ROW
        let C = matrix[0].length-1 //Column

        let top = 0, bot = R

        if(target < matrix[0][0] || target > matrix[R][C]) return false

        while(top<=bot) {

            let mid = top + Math.floor((bot-top)/2)

            if(target <= matrix[mid][C] && target >= matrix[mid][0]) {
                return this.bstSearch(matrix[mid], 0, C, target, mid)
            }
            else if(target < matrix[mid][0]) {
                bot = mid-1
            }
            else {
                top = mid+1 
            }
              
        }
    }

    bstSearch(M, l, r, t, R) {

        if(l > r) return false

        let mid = l + Math.floor((r-l)/2)

        if(t == M[mid]) return [R, mid]

        if(t < M[mid]) return this.bstSearch(M, l, mid-1, t, R)
        
        else return this.bstSearch(M, mid+1, r, t, R)
        
    }
}


let inst = new Solution()
console.log(inst.searchMatrix([[]], 0))

//console.log(inst.bstSearch([[50,53,56,60]], 0, 3, 60))


