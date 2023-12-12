function showPasswor(iconElement) {

    var pswrd = document.getElementById("pass"); //the password
    if (pswrd.type === "password") {
        pswrd.type = "text";
        iconElement.style.opacity = "1";
        iconElement.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash"></i>';
    }
    else {
        pswrd.type = "password";
        iconElement.style.opacity = "0.5";
        iconElement.innerHTML = '<i class="fa-sharp fa-solid fa-eye"></i>';
    }
}
