function symmetricNumbers(num) {
    let n = Number(num[0]);
    let result = '';
    for (let i = 1; i <= n; i++){
        if(isSymmetric(i.toString())){
            result += i + ' ';
        }
    }
    console.log(result);

    function isSymmetric(str) {
        for (let i = 0; i < str.length / 2; i++){
            if(str[i] != str[str.length - i - 1]){
                return false;
            }
            return true

        }
    }
}

symmetricNumbers(['750']);
