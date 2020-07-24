<?

$name = $_POST['NAME'];
$phone = $_POST['PHONE'];
$tex = $_POST['TEXNIK'];
$sogl = $_POST['SOGL'];
$message = "";
$tex__res;

if(!empty($name) && !empty($phone) && !empty($sogl)) {
    if(!empty($_POST['MESSAGE'])) {
        $message = "Сообщение: " . $_POST['MESSAGE'];
    }

    if($tex == "on") {
        $tex__res = "Интересует техника для склада";
    } else {
        $tex__res = "Не интересует техника для склада";
    }

    $to = "skladregion@gmail.com";
    $subject = 'Заявка на обратный звонок с сайта "Склад Регион"';
    $charset = "utf-8";
    $headerss ="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "Имя: " .$name . "<br>" . "Телефон: " .$phone . "<br>" . $tex__res . "<br>" . $message;
    mail($to, $subject, $msg, $headerss);

}