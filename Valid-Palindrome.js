// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:
// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let i =0 , j=s.length-1, palindrome=false
        
        s = s.toLowerCase();

        while(i<j) {

            if(this.isAlphanumeric(s[i]) && this.isAlphanumeric(s[j])) {

                console.log('Alphanumeric ', s[i], s[j])

                if (s[i] == s[j]) {
                    palindrome=true
                    i++
                    j--
                }
                else return false
            }

            if(!this.isAlphanumeric(s[i])) {
                console.log('Not Alphanumeric ', s[i])
                i++
            } 

            if(!this.isAlphanumeric(s[j])) {
                console.log('Not Alphanumeric ', s[j])
                j--
            } 

        }

        return palindrome

    }

    isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    isPalindromeCopiedCode(s) {
        // Convert to lowercase and remove non-alphanumeric chars
        s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // replacing non alpha characters is key 
        
        // Compare start and end chars moving inward
        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}


let inst = new Solution();
let s = " "

console.log(inst.isPalindrome(s))

console.log(inst.isPalindromeCopiedCode(s))