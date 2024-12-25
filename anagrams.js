/**
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
**/

function isAnagram(s, t) {

    var hashMap_s = {}
    var sum = 0

    for(let i=0; i<s.length; i++) {
        if(hashMap_s[s[i]]==undefined)
            hashMap_s[s[i]]=1
        else
            hashMap_s[s[i]]=hashMap_s[s[i]]+1

        sum++;    
    }

    for(let i=0; i<t.length; i++) {
        if(hashMap_s[t[i]]==undefined)
            return false // Not anagram
        else {
            hashMap_s[t[i]]=hashMap_s[t[i]]-1;
            if(hashMap_s[t[i]]>=0) sum--;
            else return false
        }
    }

    return !sum

    //Instead of counting separately we can use sum

    // return Object.keys(hashMap_s).every((key) => {

    //     if(hashMap_s[key]){
    //         if(hashMap_s[key]>0) { 
    //             return false; 
    //         }
    //     }
    //     return true
    // });

}

var s = "bbcc"
var t = "ccbc"

console.log(isAnagram(s, t));

