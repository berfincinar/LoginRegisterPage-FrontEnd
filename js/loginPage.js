
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

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

function checkPassword(input1, input2) {
    if(input1.value !== input2.value) {
        error(input2, 'Parolalar birbiriyle eşleşmiyor!');
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([email,password]);
    checkEmail(email);  
    checkLength(password, 7, 12);
   
});