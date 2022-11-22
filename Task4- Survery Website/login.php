<?php

$uname=$_POST['username'];
$pwd=$_POST['password'];

if($uname && $pwd)
$con=mysqli_connect("localhost","root","","survey") or die("data base error");

$query="select * from user where username='$uname' and password='$pwd' ";

$result=mysqli_query($con,$query);
$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
$count=mysqli_num_rows($result);

if($count==1)
{
    header('location:welcome.html');
}
else{
    // header('location:login.html');
    echo " Invaild Username or Password!";
}

?>