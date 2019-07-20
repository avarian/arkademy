
const regexFirsNONspecial = /^(\b[a-zA-Z])/g;
const regexlowCase = /^(.*[a-z])/g;
const regexUpCase = /^(.*[A-Z])/g;
const regexNumber = /^(.*[0-9])/g;
const regexMustEq = /^(.*=+)/g;
const regexSpecial = /^(.*[^a-zA-Z0-9])/g;


function is_username_valid(username) {
    if (username.length >= 5 && username.length <= 9 && regexFirsNONspecial.test(username) && regexlowCase.test(username) && regexUpCase.test(username)) {
        return true;
    }else {
        return false;
    }
}


function is_password_valid(password) {
    if (password.length >= 8 && regexUpCase.test(password) && regexlowCase.test(password) && regexNumber.test(password) && regexMustEq.test(password) && regexSpecial.test(password)) {
        return true;
    }else {
        return false;
    }
}

console.log(is_username_valid('Xrutaf888'))

console.log( is_password_valid('passW0rd='))
