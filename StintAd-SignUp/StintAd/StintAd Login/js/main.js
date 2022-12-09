let userName = document.getElementById('username');
let passWord = document.getElementById('password');
let errorMsg = document.getElementsByClassName('error');
let successIcon = document.getElementsByClassName('success-icon');
let failureIcon = document.getElementsByClassName('failure-icon');
let form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    engine(userName, 0, 'UserName Cannot Be Blank');
    engine(passWord, 1, 'Password Cannot Be Blank');
})

let engine = (id,serial,message) => {
    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }else{
        errorMsg[serial].innerHTML = '';
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}