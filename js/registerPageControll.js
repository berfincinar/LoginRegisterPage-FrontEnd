const form = document.getElementById('form');
const isim = document.getElementById('isim');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        success(input);
    }
    else{
        error(input,'Mail adresini doğru formatta girin!');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if (input.value === '') {
            error(input, `${input.id} bilgisi gerekli!`);
        } else {
            success(input);
        }
    });

}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        error(input, `${input.id} en az ${min} karakterli olmalıdır!`);
    }
    else if(input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakterli olmalıdır!`);
    }
    else{
        success(input);
    }
}

function checkPassword() { 
    var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;

    // If password not entered 
    if (password == '') 
        alert ("Lütfen şifre giriniz"); 
          
    // If confirm password not entered 
    else if (repassword == '') 
        alert ("Lütfen parolayı onaylayın"); 
          
    // If Not same return False.     
    else if (password != repassword) { 
        alert ("\nParola eşleşmedi: Lütfen tekrar deneyin...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        alert("Şifre Eşleştirme: Hoş Geldiniz!!") 
        return true; 
    } 
} 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([isim,email,password,repassword]);
    checkEmail(email);
    checkLength(isim,3, 15);    
    checkLength(password, 7, 12);
    checkPassword(password, repassword);

});
