
/* Given an integer array nums, return true if any value appears more than once in the array, 
otherwise return false. */

function hasDuplicate(nums) {
    
    let hashMap = {};
    for(var i=0; i<nums.length; i++) {

        if(hashMap[nums[i]] == undefined && hashMap[nums[i]] == null) {
            hashMap[nums[i]] = nums[i];
        }
        else return true; // nums has duplicates

        console.log(hashMap);
    }
    return false; // nums has no duplicates
}