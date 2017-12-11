function turnIntoJSON(input) {
    let object = {};
    object.name = input[0].split(' -> ')[1];
    object.surname = input[1].split(' -> ')[1];
    object.age = Number(input[2].split(' -> ')[1]);
    object.grade = Number(input[3].split(' -> ')[1]);
    object.date = input[4].split(' -> ')[1];
    object.town = input[5].split(' -> ')[1];

    console.log(JSON.stringify(object));
}