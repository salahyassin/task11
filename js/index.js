let loginEmail=document.querySelector('#loginEmail');
let loginPass=document.querySelector('#loginPass');
let loginBtn= document.querySelector('#loginBtn');
let incorrectPara=document.querySelector('#incorrectPara')
var usersTest=[]
loginBtn.addEventListener('click',function(e){
    checkInputs()
    if(checkInputs()){
        isExist()
    }
})


function isExist() {
    
    const usersTest = JSON.parse(localStorage.getItem('allUsers'));
    
    
    if (!usersTest || usersTest.length === 0) {
        incorrectPara.classList.replace('d-none', 'd-block');
        incorrectPara.innerHTML = 'No users found in localStorage';
        return; 
    }
    
    
    for (let i = 0; i < usersTest.length; i++) {
        if (loginEmail.value === usersTest[i].userEmail && loginPass.value === usersTest[i].userPass) {
            
            window.location = './home.html';
            localStorage.setItem('userName', JSON.stringify(usersTest[i].userName));
            return; 
        }
    }
    
    
    incorrectPara.classList.replace('d-none', 'd-block');
    incorrectPara.innerHTML = 'User not found';
}

function checkInputs(){
    if(loginEmail.value==""||loginPass.value==""){
        incorrectPara.classList.replace('d-none','d-block') 
    }else if(checkEmailValidation()){
        incorrectPara.classList.replace('d-none','d-block') 

        incorrectPara.innerHTML='In Valid Email'

    }else if( checkPassValidation()){
        incorrectPara.innerHTML='In Valid Pass ( at least 8 char)'
        incorrectPara.classList.replace('d-none','d-block') 

    }else{
        incorrectPara.classList.replace('d-block','d-none') 
        return true
    }
}
function checkEmailValidation(){
    if(!isValidEmail(loginEmail.value)){
        return true
    }else{
        

        return false
    }
}
function checkPassValidation(){
    if(!isValidPass(loginPass.value)){
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



