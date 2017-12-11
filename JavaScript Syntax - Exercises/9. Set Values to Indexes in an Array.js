function setValuesToIndexes(input) {
    let arrLenght = Number(input[0]);
    let array  = [];

    for(let i = 0; i < arrLenght; i++){
        array.push(0);
    }

    for(let i = 1; i < input.length; i++){
        let data = input[i].split(' - ');
        let index = data[0];
        if(index in array){
            array[index] = data[1];
        }
    }

    for (let line of array) {
        console.log(line);
    }
}