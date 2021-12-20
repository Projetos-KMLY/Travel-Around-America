<?php

include_once("conecta.php");

$rnome = $_GET['email'];
$rsenha  = $_GET['senha'];
$rconfsenha = $_GET['confsenha'];

$sql="INSERT INTO usuario(Nome,E_mail,Senha) VALUES ('$rnome','$remail','$rsenha')";

$salvar= mysqli_query($conexao,$sql);


$linhas = mysqli_affected_rows($conexao);

$_SESSION['logado'] = true;
header('Location: principal.php');
mysqli_close($conexao);

?>