function printNums(arr) {
    let reversedNums = arr.map(Number).reverse();
    for (let num of reversedNums) {
        console.log(num);
    }
}