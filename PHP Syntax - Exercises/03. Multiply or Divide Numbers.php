<?php
if(isset($_GET['num1']) && isset($_GET['num2'])){
    $num1 = intval($_GET['num1']);
    $num2 = intval($_GET['num2']);
    if($num1 > $num2){
        $result = $num1 / $num2;
    }else if(num1 <= num2){
        $result = $num1 * $num2;
    }else if(num1===0 && num2===0){
        $result = "";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num1" />
		M: <input type="text" name="num2" />
        <input type="submit" />
    </form>
	<?= $result ?>
</body>
</html>