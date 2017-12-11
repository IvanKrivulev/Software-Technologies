function multipleValues(input) {

    let values = [];
    let lastKey = input[input.length - 1];

    for(let i = 0; i < input.length - 1; i++){
        let data = input[i].split(' ');
        if(lastKey === data[0])
            values.push(data[1]);

    }

    if(values.length > 0){
        for (let value of values) {
            console.log(value);
        }
    }
    else{
        console.log('None');
    }
}
