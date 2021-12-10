<?php

include_once("conecta.php");

$rnome = $_GET['nome'];
$remail = $_GET['email'];
$rsenha  = $_GET['senha'];
$rconfsenha = $_GET['confsenha'];
/*$rresultado = $_GET['resultado'];
$ridcategoria = $_GET['idcategoria'];*/

$sql="INSERT INTO usuario(Nome,E_mail,Senha) VALUES ('$rnome','$remail','$rsenha')";
$salvar= mysqli_query($conexao,$sql);

$linhas = mysqli_affected_rows($conexao);

header('Location: principal.php');
mysqli_close($conexao);

?>