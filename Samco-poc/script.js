const name = document.forms['form']['username'];
const password = document.forms['form']['password'];
const year = document.forms['form']['year'];

const name_error = document.getElementById('name_error');
const pass_error = document.getElementById('pass_error');
const year_error = document.getElementById('year_error');
const year_error1 = document.getElementById('year_error1');
const popup_error = document.getElementById('popup')

$ = function(id) {
    return document.getElementById(id);
}
  
var show = function(id) {
    $(id).style.display ='block';
}
var hide = function(id) {
    $(id).style.display ='none';
}

form.adddEventListener('submit', (e) => {
    e.preventDefault();
})

var eye_icon;
function pass() {
    if(eye_icon == 1) {
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').src='/img/pass-hide.png';
        eye_icon = 0;
    } else {
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src='/img/pass-show.png';
        eye_icon = 1;
    }
}

function validate() {
    if (name.value.length < 5 || name == "" || name == null) {
        name.style.border = "1px solid red";
        name_error.style.display = "block";
        name.focus();
        return false;
    } else {
        name_error.style.display = "none";
        name.style.border = "1px solid green";
    }
    if (password.value.length < 5) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    } else {
        pass_error.style.display = "none";
        password.style.border = "1px solid green";
    }
    if (year.value.length !== 4) {
        year.style.border = "1px solid red";
        year_error.style.display = "block"
        year_error1.style.display = "none"
        year.focus();
        return false;
    } else if (year.value < 1000) {
        year.style.border = "1px solid red";
        year_error.style.display = "none"
        year_error1.style.display = "block"
        year.focus();
        return false;
    } else if (year.value > 2023) {
        year.style.border = "1px solid red";
        year_error.style.display = "none"
        year_error1.style.display = "block"
        year.focus();
        return false;
    } else {
        year_error.style.display = "none"
        // popup_error.style.display = "none"
        year.style.border = "1px solid green"
        return true;
    }
}

