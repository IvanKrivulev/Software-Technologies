function workingWithKeyValue(input) {
    let keyValuePairs = [];

    for (let i = 0; i < input.length - 1; i++){
        let data = input[i].split(' ');
        let key = data[0];
        let value = data[1];
        keyValuePairs[key] = value;
    }
    let lastKey = input[input.length - 1];
    console.log(keyValuePairs[lastKey] || 'None');
}