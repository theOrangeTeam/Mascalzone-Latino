<?php $name = $_POST['name'];
$lastname = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="Da: $name $lastname \n Messagio: $message";
$recipient = "postiglionedavide@gmail.com";
$subject = "Contact Form";
$mailheader = "Da: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Errore!");
echo "Grazie ! Ti risponderemo al più presto !";
?>