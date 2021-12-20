<?php

include_once("conecta.php");

$escolha = $_GET['escolha'];

  $sql="INSERT INTO teste (Id_teste) VALUES ('$escolha')";
  
$salvar= mysqli_query($conexao,$sql);


$linhas = mysqli_affected_rows($conexao);

$_SESSION['logado'] = true;

header('Location: telas.php');
mysqli_close($conexao);

?>