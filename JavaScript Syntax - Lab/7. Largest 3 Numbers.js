function largestThree (input){
    let nums = input.map(Number);
    let numsSorted = nums.sort((a, b) => b - a);
    let count = Math.min(3, input.length);
    for (let i = 0; i < count; i++){
        console.log(numsSorted[i]);
    }
}

largestThree(['10', '30', '15', '20', '50', '5']);