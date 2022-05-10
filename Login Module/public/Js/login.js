function loginValidation(x){
    var id = document.getElementById(x).value;
    console.log(id);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(id))
    {
        document.getElementById("message").innerHTML = "";
        return (true)
    }
        document.getElementById("message").innerHTML = "You have entered an invalid email address!";
        return (false)
}

function OTPNumberFillOnlyNumber(){
    var a =  document.getElementById("otp").value;
    
    if(isNaN(a))
    {
        document.getElementById("OTPmessage").innerHTML = "Enter Only Numeric value";
    }
    else
    {
        document.getElementById("OTPmessage").innerHTML = "";
        return true;
    }
}