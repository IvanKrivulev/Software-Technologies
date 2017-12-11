function printLines(input) {

    for (let line of input) {
        if (line === 'Stop')
            return;
        else
            console.log(line);
    }
}
printLines(['Line 1', 'Line 2', 'Stop']);