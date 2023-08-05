var emailInputLog = document.getElementById("logEmail");
var passwordInputLog = document.getElementById("logPassword");
var userNameInput = document.getElementById('userName');
var emailRegs = document.getElementById('userEmail');
var passRegs = document.getElementById('userPassword');
var collect;

var regexName=/^[a-z]\w{2,20}$/;
var regexEmail=/^[a-z]{3,15}@\w{3,10}(\.[a-z]{2,7})$/;
var regexPassword=/^.+$/;
if(localStorage.getItem("ourStorage") !== null){
    collect =JSON.parse(localStorage.getItem("ourStorage"))
}
else{
    collect=[];
}
function signUp(){
    // console.log(validationName() + validationEmail() + validationPassword());
    if(validation(regexName,userNameInput.value)==true && validation(regexEmail,emailRegs.value)==true && validation(regexPassword,passRegs)==true){
        let user ={
            uName: userNameInput.value,
            uEmail: emailRegs.value,
            uPassword: passRegs.value
        }
        collect.push(user);
        localStorage.setItem("ourStorage", JSON.stringify(collect))}
    else{
        alert("wrong validation")
    }
}
function login(){
    if(validation(regexEmail,emailInputLog.value)==true && validation(regexPassword,passwordInputLog.value)==true ){
    //    if(emailInputLog == "" || passwordInputLog == ""){
    //     document.getElementById("message").innerHTML=`<p class="text-center">All inputs are required <p>`
    //    }
    //    else{
    //     checkInputs()
    //    }
    checkInputs()
    }
    else{
        alert("wrong validation")
    }
}
function checkInputs(){
    for (let i = 0; i < collect.length; i++) {
    if(emailInputLog.value == collect[i].uEmail && passwordInputLog.value == collect[i].uPassword){
        let y = collect[i].uName;
        localStorage.setItem("userName", JSON.stringify(y))
        location.href ="../name.html";
        break; 
    }
    }
}
document.getElementById("usName").innerHTML= JSON.parse(localStorage.getItem("userName"));

function logOut(){
    localStorage.removeItem("userName")
}



// function validationEmail(){
//     [a-z]\w{3,15}@\w{3,10}(\.[a-z]{2,7}){1,3}$
//     var regexEmail = /^[a-z]\w{3,15}@\w{3,10}(\.[a-z]{2,7}){1,3}$/;
//     let regexEmail = / ^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     console.log(regexEmail.test(emailRegs.value));
//     return regexEmail.test(emailRegs.value)
// }
// function validationPassword(){
//     var regexPass = / .+ /;
//     let regexPass = / ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     console.log(regexPass.test(passRegs.value));

//     return regexPass.test(passRegs.value)
// }
// function validationName(){
//     let regexName = / ^[A-Za-z\s'-]+$/;
//     return regexName.test(userNameInput.value);
// }
function validation(regex,input){
    console.log(regex.test(input));
    return regex.test(input)
}
