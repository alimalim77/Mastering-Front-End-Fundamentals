 
function validateform(){  
var name=document.form.name.value;  
var email=document.form.email.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}

else if(email==null){  
  alert("email not entered");  
  return false;  
  }  
}  
  