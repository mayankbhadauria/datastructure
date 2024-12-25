
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


console.log(hasDuplicate([0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,0]));