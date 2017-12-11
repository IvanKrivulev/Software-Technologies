function multiplyOrDivide([a, b]) {
    let num1 = Number(a);
    let num2 = Number(b);

    if(num2 >= num1){
        return num1 * num2;
    }
    else{
        return num1 / num2;
    }
}