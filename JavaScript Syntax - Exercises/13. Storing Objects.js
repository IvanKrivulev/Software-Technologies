function storingObjects(input) {

    for (i = 0; i < input.length; i++){
        let data = input[i].split(' -> ');
        let personObject = {Name: data[0],
            Age: data[1],
            Grade: data[2]
        }

        console.log(`Name: ${personObject.Name}`);
        console.log(`Age: ${personObject.Age}`);
        console.log(`Grade: ${personObject.Grade}`);
    }

}