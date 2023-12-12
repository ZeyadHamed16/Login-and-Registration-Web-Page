// Variables are used to ensure that all data is written in the form
// false ==> No data entered
var isValidUsername = false;
var isValidMail = false;
var isValidPassword = false;
var isValidPasswordConfirm = false;
var isValidCheckBox = false;

// ------------------------------------------------------------------------
// ------------------------------------ check the username 
// ------------------------------------------------------------------------

var patternUsername = new RegExp(/^[\w]{7,29}$/);

function checkUsername(usernameElement) {

	var username = usernameElement.value;
	if (username != "") {

		if (patternUsername.test(username)) {
			changeStyle(usernameElement, "green");
			isValidUsername = true;
		}
		else {
			changeStyle(usernameElement, "red");
			isValidUsername = false;
		}
	}
	else if (username == "") {
		changeStyle(usernameElement, "black");
		isValidUsername = false;
	}
}

// ------------------------------------------------------------------------
// ------------------------------------ check the mail 
// ------------------------------------------------------------------------

var patternMail = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);

function checkMail(mailElement) {

	var mail = mailElement.value;
	if (mail != "") {
		if (patternMail.test(mail)) {
			changeStyle(mailElement, "green")
			isValidMail = true;
		}
		else {
			changeStyle(mailElement, "red")
			isValidMail = false;
		}
	}
	else if (mail == "") {
		changeStyle(mailElement, "black")
		isValidMail = false;
	}
}

// ------------------------------------------------------------------------
// ------------------------------------ check the strength of the password 
// ------------------------------------------------------------------------

var patternPasswordStrong = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
var patternPasswordMedium = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)

function checkPassword(passwordElement) {

	var password = passwordElement.value;

	if (password != "") {
		if (patternPasswordStrong.test(password)) {
			changeStyle(passwordElement, "green");
			isValidPassword = true;
		}
		else if (patternPasswordMedium.test(password)) {
			changeStyle(passwordElement, "orange");
			isValidPassword = true;
		}
		else {
			changeStyle(passwordElement, "red");
			isValidPassword = false;
		}
	}
	else if (password == "") {
		changeStyle(passwordElement, "black",);
		isValidPassword = false;
	}
}

// ------------------ function that show the password 

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

// ------------------------------------------------------------------------
// ------------------------------------ check if two passwords are the same 
// ------------------------------------------------------------------------

function checkPasswordConfirm(PasswordConfirmElement) {

	var realPassword = document.getElementById("pass").value; // the real password
	var PasswordConfirm = PasswordConfirmElement.value; // the confirmed password

	if (PasswordConfirm != "") {
		if (realPassword == PasswordConfirm) {
			changeStyle(PasswordConfirmElement, "green");
			isValidPasswordConfirm = true;
		}
		else {
			changeStyle(PasswordConfirmElement, "red");
			isValidPasswordConfirm = false;
		}
	}
	else if (PasswordConfirm == "") {
		changeStyle(PasswordConfirmElement, "black");
		isValidPasswordConfirm = false;
	}
}

// ------------------------------------------------------------------------
// ------------------------------------ checkBox is checked or not 
// ------------------------------------------------------------------------

function checkBoxValidate() {
	var checkBox = document.getElementById("checkboxTerms");
	if (checkBox.checked) {
		isValidCheckBox = true;
	}
}

// ------------------------------------------------------------------------
// ------------------------------------ validate of the form
// ------------------------------------------------------------------------

function CheckForm() {
	// debugger;
	// console.log("username: " + isValidUsername);
	// console.log("mail: " + isValidMail);
	// console.log("password: " + isValidPassword);
	// console.log("password confirm: " + isValidPasswordConfirm);
	// console.log("checkBox: " + isValidCheckBox);

	if (isValidUsername == false ||
		isValidMail == false ||
		isValidPassword == false ||
		isValidPasswordConfirm == false ||
		isValidCheckBox == false) {

		return false;
	}
	else {
		return true;
	}
}
// 


/* 
---------------------------------------------------------------------------------------------
assist functions
---------------------------------------------------------------------------------------------
*/


// function to set style of the elements
function changeStyle(element, color) {
	element.style.outline = "none";
	element.style.borderBottom = "3px solid " + color;
}


// --------------------------------------------------------------------------------------------------------------






/*
1- fixe password confirm bug.
If any character in the real password is removed,
the confirm password will remain green.

2- Create a function for the checkBox.	-		-		-		-		-		-		-		-	 	-		-		-		passed

3- Try to any way to make the codes easier.

4- Check if my code is complex for backend engineer or not.
*/