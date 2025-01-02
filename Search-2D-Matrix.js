
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

        let row = matrix.length-1
        let col = matrix[0].length-1
    
        let top=0, bottom=row, mid // top, bottom : 0, 2    
       
        while(top <= bottom) {

            mid = top + Math.floor((bottom-top)/2)

            if(matrix[mid][col] < target) {
                top = mid + 1
            }
            else if(matrix[mid][0] > target) {
                bottom = mid - 1
            }
            else if(matrix[mid][col] == target || matrix[mid][0]== target) {
                return true
            }
            else {
                break
            }
        }

        if(top > bottom) return false

        let l = 0, r = col

        let ROW = mid

        while(l <= r) {

            let rowMid = l + Math.floor((r-l)/2)

            if(matrix[ROW][rowMid] < target) l=rowMid+1

            else if(matrix[ROW][rowMid] > target) r=rowMid-1

            else if(matrix[ROW][rowMid] == target) return true
            
            else return false       
        }

        return false

    }
    // This solution search matrix in one pass as matrix is already sorted, binary search between first [0][0] and last [m][n]
    searchMatrixOnePass(matrix, target) {
        let ROWS = matrix.length, COLS = matrix[0].length;

        let l = 0, r = ROWS * COLS - 1;
        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            let row = Math.floor(m / COLS), col = m % COLS;
            if (target > matrix[row][col]) {
                l = m + 1;
            } else if (target < matrix[row][col]) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}


let inst = new Solution()
console.log(inst.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40], [50,53,56,60], [61,63,65,70]], 53))
