<?php

 $hostname="localhost";
 $user ="root";
$password="";
$database="america";


$conexao=mysqli_connect($hostname,$user,$password,$database) or die(mysqli_error());

if(!$conexao){
    print "ERROOOORRR";
}
?>