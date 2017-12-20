
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        X: <input type="text" name="num1" />
		Y: <input type="text" name="num2" />
        Z: <input type="text" name="num3" />
		<input type="submit" />
    </form>
    <?php
    if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])){
        $arr = [intval($_GET['num1']), intval($_GET['num2']), intval($_GET['num3'])];
        if(count_negatives($arr) % 2 != 0){
            echo "Negative";
        }else if($arr[0] == 0 || $arr[1] == 0 || $arr[2] == 0){
            echo "Positive";
        }else{
            echo "Positive";
        }
    }
    function count_negatives(array $array) {
        $i = 0;
        foreach ($array as $x)
            if ($x < 0) $i++;
        return $i;
    }
    ?>
</body>
</html>