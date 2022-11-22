<?php
if(isset($_POST['submit']))
{
 
  $username=$_POST['username'];
  $email=$_POST['email'];
  $password=$_POST['password'];
  $CFpassword=$_POST['CFpassword'];

  $con=new mysqli('localhost','root','','logindb');
   $sql="insert into `user` (username,email,password,CFpassword)
   values('$username','$email','$password','$CFpassword')";


  $result=mysqli_query($con,$sql);
  if($result)
  {
    //echo "Data Added Successfully";
    header('location:login.html');
  }
  else
  {
    die(mysqli_error($con));
  }
}


if(!$con)
{
    die(mysqli_error($con));
}

?>



