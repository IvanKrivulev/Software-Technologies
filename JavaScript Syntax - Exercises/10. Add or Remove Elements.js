function addOrRemove(input) {
    let finalArray = [];

    for (let line of input) {
        let data = line.split(' ');
        if(data[0] === 'add'){
            finalArray.push(data[1]);
        }
        else if(data[0] === 'remove') {
            if(!data[1] in finalArray){
                return;
            }
            finalArray.splice(data[1], 1);
        }
    }

    for (let num of finalArray) {
        console.log(num);
    }
}