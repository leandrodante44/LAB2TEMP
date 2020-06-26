<?php include 'menu.php'; ?>
<?php echo '<br><br><br><center><h2>Enviando Email...</h2><h4>Aguarde alguns instantes e será redirecionado!</h4></center>'; ?>
<div style="display: none;">
<?php
iconv_set_encoding("internal_encoding", "UTF-8");
$to      = $_GET['e'];
$subject = 'Convite para Registro no Lab2Temp!';
$message = '
<h2>Olá, Seja Bem Vindo ao Lab2Temp by Lab2Dev!</h2>
<p>
Você acaba de receber o convite de uma oportunidade impar, estar acompanhando e participando do beta test da nossa mais recente plataforma!</p>
<p>
<h3>Acesse e Descubra! - <a href="http://177.195.154.104/lab2temp/views/register.php">LAB2TEMP!</a></h3>';
$headers = 'From: portal2dev.lab2dev@gmail.com' . "\r\n" .
    'Reply-To: portal2dev.lab2dev@gmail.com' . "\r\n" .
    'Content-type: text/html; charset=iso-8859-1' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, utf8_decode($message), $headers)) {
    echo '<script>setTimeout(function(){window.location="profile.php"},500)</script>';
};
?> 
</div>
