 //Validation for Inputs

 var email = document.forms['form']['email'];
 var password = document.forms['form']['password'];

 var email_error = document.getElementById('email_error');
 var pass_error = document.getElementById('pass_error');

 function email_Verify(){
    if(email.value.length >= 8){
        email.style.border ="1px solid silver";
        email_error.style.display="none";
        return true;
    }
}

function pass_Verify(){
    if(password.value.length >= 8){
        password.style.border ="1px solid silver";
        pass_error.style.display="none";
        return true;
    }
}
 email.addEventListener('textInput', email_Verify);
 password.addEventListener('textInput',email_Verify);

 function validated(){
    
    //for checking the email length and gives return error message
    if(email.value.length < 10){
        email.style.border ="1px solid red";
        email.error.style.display= "block";
        email.focus();
        return false;
    }

     //for checking the password length and gives return error message
    if(password.value.length < 6){
        password.style.border ="1px solid red";
        password.error.style.display= "block";
        password.focus();
        return false;
    }

   

   
 }