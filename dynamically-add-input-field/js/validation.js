var perchantage = 0;
function strengthCheck(pass, len) {
    if (len < 6) {
        perchantage = 0;
        $(".progress-bar").css("background", "#dd4b39");
        $("#strength-text").text('weak');
    } else if (len < 8) {
        perchantage = 20;
        $(".progress-bar").css("background", "#9c27b0");
        $("#strength-text").text('still weak');
    } else if (len < 10) {
        perchantage = 30;
        $(".progress-bar").css("background", "#008B8B");
        $("#strength-text").text('strong');
    } else {
        perchantage = 50;
        $(".progress-bar").css("background", "#006400");
    }
    // validation 
    if (pass.match(/[A-Z]/) != null) {
        perchantage += 10;
    }
    if (pass.match(/[a-z]/) != null) {
        perchantage += 10;
    }
    if (pass.match(/[0-9]/) != null) {
        perchantage += 10;
    }
    if ((pass.match(/\W/) != null) || (pass.match(/\D/) != null)) {
        perchantage += 10;
    }
    if (perchantage > 80) {
        $("#strength-text").text('very strong');
    }
    $(".progress-bar").css("width", perchantage + "%");
}
function removeSpaces() {
    var pass = $("#password").val();
    $("#password").val(pass.split(' ').join(''));
}
function emailValidation(email) {

}
$(document).ready(function () {
    $("#password").keyup(function () {
        let enteredPass = $(this).val();
        let passLength = enteredPass.length;
        strengthCheck(enteredPass, passLength);
    });
    $(".toggle-password").on('click', function () {
        var input = $("#password");
        input.attr('type') == 'password' ? input.attr('type', 'text') : input.attr('type', 'password');
    });
    $(".save").click(function () {
        var email = $("#email").val();
        if (email = '') {
            alert('Invalid Email!!!');
        }
        emailValidation(email);
    });
});

