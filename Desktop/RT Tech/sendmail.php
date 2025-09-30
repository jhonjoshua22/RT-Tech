<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "sjosh2503@gmail.com";
    $subject = "New Message from RT Tech Website";
    $body = "Name: $name\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: no-reply@rttechshop.com\r\n" .
               "Reply-To: $to\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
