var signupName = document.querySelector('#signup-name')
var signupEmail = document.querySelector('#signup-email')
var signupPass = document.querySelector('#signup-pass')
var signupBtn= document.querySelector('#signupBtn')
var incorrectParaSignup=document.querySelector('#incorrectPara-signup')
var users=[];
if(localStorage.getItem('allUsers')){
    users=JSON.parse(localStorage.getItem('allUsers'))
    
}
signupBtn.addEventListener('click',function(){
    addUser()
})
function addUser(){
    if(checkInputs()){
        var user= {
            userName: signupName.value,
            userEmail: signupEmail.value,
            userPass: signupPass.value,
        }
        users.push(user)
        localStorage.setItem('allUsers',JSON.stringify(users))
        clearInputs()
        incorrectParaSignup.classList.replace('d-none','d-block') 

        incorrectParaSignup.innerHTML='Success'
        incorrectParaSignup.classList.replace('text-danger','text-success')
    }
    
    
    
}
function checkInputs(){
    if(signupEmail.value==""||signupPass.value==""){
        incorrectParaSignup.classList.replace('d-none','d-block') 
    }else if(checkEmailValidation()){
        incorrectParaSignup.classList.replace('d-none','d-block') 

        incorrectParaSignup.innerHTML='In Valid Email'

    }else if( checkPassValidation()){
        incorrectParaSignup.innerHTML='In Valid Pass ( at least 8 char)'
        incorrectParaSignup.classList.replace('d-none','d-block') 

     }else{
        incorrectParaSignup.classList.replace('d-block','d-none') 
        return true
    }
}

function checkEmailValidation(){
    if(!isValidEmail(signupEmail.value)){
        return true
    }else{
        

        return false
    }
}
function checkPassValidation(){
    if(!isValidPass(signupPass.value)){
        return true
    }else{
        
        return false
    }
}
function isValidEmail(value){
    var emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value)
}
function isValidPass(value){
    var passPattern =/^.{8,}$/;
    return passPattern.test(value)
}
function clearInputs(){
    signupName.value=null
    signupEmail.value=null
    signupPass.value=null
}