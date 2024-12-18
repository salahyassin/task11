var userHeading = document.querySelector('#username')


function logout(){
    window.location='./index.js'
}
userHeading.innerHTML=`Welcome ${JSON.parse(localStorage.getItem('userName'))}`
