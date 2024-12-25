
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Case 1
// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]

// Case 2
// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]

// case 3
// Input: []
// Output: []

function encode(strs) {
    if(strs.length==0) return [];
    let encoded = '';
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        encoded += str.length + '#' + str;
    }
    return encoded;
}

function decode(str) {

   if(str.length<2) return []

   let subLen=0, decodeStr=[]
   
    for(let i=0; i<str.length; i++) {

        if(str[i]>0 && str[i+1]=='#') {
            
            subLen=parseInt(str[i])
            let start = i+2
            const subStr = str.substring(start, start+subLen);
            decodeStr.push(subStr)
            i=start+subLen-1;
        }
    }
    return decodeStr;
}


console.log(encode(["neet","code","love","you"]));
console.log(decode('4#neet4#code4#love3#you'));


//**
// My Mistakes
//
// 1) wasn't using parseInt() , and str+number doesnt give number
// 2) I wasn't using substring() but creating own function to subtract str 
// 3) (i=start+subLen-1)   loop already add ++i so i should have subtract -1. 
//  
//**//
