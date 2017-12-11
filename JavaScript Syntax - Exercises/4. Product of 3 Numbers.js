function productOfThreeNums(arr) {
    let numbers = arr.map(Number);
    let negativeNums = numbers.filter(x => x < 0);
    if(negativeNums.length % 2 === 0){
        return 'Positive';
    }
    else{
        return 'Negative';
    }
}

console.log(productOfThreeNums(['0', '5', '6']))