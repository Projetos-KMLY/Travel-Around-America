<?php
 $hostname="localhost";
 $user ="root";
$password="";
$database="america";


$conexao=mysqli_connect($hostname,$user,$password,$database);

if(!$conexao){
    print "ERROOOORRR";
}
?>