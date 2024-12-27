<?php 
$hostname='localhost';
$username='root';
$password='65770310';
$dbname='shop';
$conn=new mysqli($hostname, $username, $password, $dbname);
if($conn->connect_error){
    die("Connection failed". $conn->connect_error);
}
 ?>