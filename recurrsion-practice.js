

class RecursionSolution {

    arraySum(Arr, index=0) {

        if(index >= Arr.length-1) return Arr[index]; 
        
        return Arr[index] + this.arraySum(Arr, index+1)
    }

    oneToNSum(n, sum=0) {
        if(n<0) return sum;
        return this.oneToNSum(n-1, sum+=n)
    }

    countDigits(str, count=0) {

        if(count >= str.length) return 0;

        return this.countDigits(str, count+1) + 1;
    }

    printElements(arr, index=0) {

        if(index==arr.length-1) return arr[index]

        return arr[index ] + '' +this.printElements(arr, index+1)

    }

    calculatePower(base, exponent) {
        if(exponent==0) return 1
        return 2 * this.calculatePower(base, exponent-1)
    }

    findMax(arr, index=0, max=Number.NEGATIVE_INFINITY) {

        if(index >= arr.length) return max

        if(max < arr[index]) {
            max = arr[index]
        }
        return this.findMax(arr, index+1, max)
    }
}


let inst = new RecursionSolution();

console.log('arraySum ', inst.arraySum([1,2,3,4,5], 0, 0))

console.log('oneToNSum ', inst.oneToNSum(5, 0))

console.log('countDigits ', inst.countDigits('12345'))

console.log('printElements ', inst.printElements(['a', 'b', 'c']))

console.log('calculatePower ', inst.calculatePower(2,3))

console.log('findMax ', inst.findMax([1, 4, 3, -5, 2]))

