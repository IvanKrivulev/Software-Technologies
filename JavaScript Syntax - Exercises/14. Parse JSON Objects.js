function parseJSON(input) {
    let firstPerson = JSON.parse(input[0]);
    let secondPerson = JSON.parse(input[1]);

    console.log(`Name: ${firstPerson.name}`);
    console.log(`Age: ${firstPerson.age}`);
    console.log(`Date: ${firstPerson.date}`);
    console.log(`Name: ${secondPerson.name}`);
    console.log(`Age: ${secondPerson.age}`);
    console.log(`Date: ${secondPerson.date}`);
}

//SECOND SOLUTION
//function parseJSON2(input) {
//    let objects = input.map(JSON.parse);
//
//    for (let object of objects) {
//        console.log(`Name: ${object.name}`);
//        console.log(`Age: ${object.age}`);
//        console.log(`Date: ${object.date}`);
//    }
//}