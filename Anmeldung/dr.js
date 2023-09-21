function validate()
 {
 var isUsernameValid = true;
 var isUserpasswordValid = true; 
 var isUserCPasswordValid= true; 
//var passPattern = /(?=.*?D)(?=.*[a-z])(?=.*A-Z]).{5,}/ ;


if(document.getElementById("Name").value == "")
{
isUsernameValid = false;
document.getElementById("spanIsUserNameValid").innerHTML="&#x2716;Please enter your name";
document.getElementById("spanIsUserNameValid").style.color="red";
}
else
{
isUsernameValid = true;
document.getElementById("spanIsUserNameValid").innerHTML="&#x2714;Valid";
document.getElementById("spanIsUserNameValid").style.color="green";
}
if(document.getElementById("pwdUser").value == "")
{
isUserpasswordValid = false;
document.getElementById("spnIsUserPasswordValid").innerHTML ="&#x2716;Please enter your password";
document.getElementById("spnIsUserPasswordValid").style.color="red";
}
else if (document.getElementById("pwdUser").value.length < 5){
	isUserpasswordValid = false;
document.getElementById("spnIsUserPasswordValid").innerHTML ="&#x2716;Password should contain at least five characters";
document.getElementById("spnIsUserPasswordValid").style.color="red";
} else if (!document.getElementById("pwdUser").value.match(/[a-z]/))
{
	isUserpasswordValid = false;
document.getElementById("spnIsUserPasswordValid").innerHTML ="&#x2716;your password must contain at least one lowercase";
document.getElementById("spnIsUserPasswordValid").style.color="red";
}else if (!document.getElementById("pwdUser").value.match(/[A-Z]/))
{
	isUserpasswordValid = false;
document.getElementById("spnIsUserPasswordValid").innerHTML ="&#x2716;your password must contain at least one uppercase";
document.getElementById("spnIsUserPasswordValid").style.color="red";
}
else if (!document.getElementById("pwdUser").value.match(/[0-9]/))
{
	isUserpasswordValid = false;
document.getElementById("spnIsUserPasswordValid").innerHTML ="&#x2716;your password must contain at least one digit";
document.getElementById("spnIsUserPasswordValid").style.color="red";
}else
{
isUserpasswordValid = true;
document.getElementById("spnIsUserPasswordValid").innerHTML ="&#x2714;Valid";
document.getElementById("spnIsUserPasswordValid").style.color="green";	
}
if(document.getElementById("cpwdUser").value == "")
{
	isUserCPasswordValid = false;
	document.getElementById("spanIsUserCPasswordValid").innerHTML ="&#x2716;Please re-enter your password";
	document.getElementById("spanIsUserCPasswordValid").style.color="red";
}
else if(document.getElementById("pwdUser").value != document.getElementById("cpwdUser").value)
{
	isUserCPasswordValid = false;
	document.getElementById("spanIsUserCPasswordValid").innerHTML ="&#x2716;Password and confirm password should be same ";
	document.getElementById("spanIsUserCPasswordValid").style.color="red";
}
else
{
	isUserCPasswordValid = true;
	document.getElementById("spanIsUserCPasswordValid").innerHTML ="&#x2714;Valid";
    document.getElementById("spanIsUserCPasswordValid").style.color="green";
}
if(isUsernameValid == false || isUserpasswordValid == false || isUserCPasswordValid == false )
{
return false;
}
else
{
return true;
}
function resetForm(){
	
	document.getElementById("spanIsUserNameValid").innerHTML="";
	document.getElementById("isUserpasswordValid").innerHTML="";
	document.getElementById("isUserCPasswordValid").innerHTML="";
 }
 }