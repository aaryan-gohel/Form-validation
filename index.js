// document.getElementById("hi").innerHTML="hello"
let uNameError = "Invalid Firstname"
let lNameError = "Invalid last name"
let passError = "Invalid Password"
let confirmPassError = "Password dosent match"
let fName = document.getElementById("f-Name").value;
let lName = document.getElementById("l-Name").value;
let password = document.getElementById("pass").value;
let confirmPassword = document.getElementById("confirm-pass").value;
let fNameArray = fName.split("");
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let nameError = 1;
let lastNameError = 1;
let emailError = 1;
let passwordError = 1;
let confirmPasswordError = 1;
let numberError = 1;
let genderError = 1;


function firstName() {
    let fName = document.getElementById("f-Name").value;
    if (fName == "" || fName.length > 50 || fName.length <= 2) {
        document.getElementById("f-namee-msg").innerHTML = "Name field must contain characters between 3 to 50";
        nameError = 1;
    }
    else {
        document.getElementById("f-namee-msg").innerHTML = "";
        for (let i = 0; i < fName.length; i++) {
            if (fName.charAt(i) >= "a" && fName.charAt(i) <= "z" || fName.charAt(i) >= "A" && fName.charAt(i) <= "Z") {
                document.getElementById("f-namee-msg").innerHTML = "";
                nameError = 0
            }
            else {
                document.getElementById("f-namee-msg").innerHTML = "First name must contain only Alpahbets";
                nameError = 1;
                break
            }
        }
    }
}
function lastName() {
    let lName = document.getElementById("l-Name").value;
    if (lName == "" || lName.length > 50 || lName.length <= 2) {
        document.getElementById("lastNameMsg").innerHTML = "LastName field must contain characters between 3 to 50";
        lastNameError = 1;
    }
    else {
        document.getElementById("lastNameMsg").innerHTML = "";
        lastNameError = 0;
        for (let i = 0; i < lName.length; i++) {
            if (lName.charAt(i) >= "a" && lName.charAt(i) <= "z" || lName.charAt(i) >= "A" && lName.charAt(i) <= "Z") {
                document.getElementById("lastNameMsg").innerHTML = "";
                lastNameError = 0;
            }
            else {
                document.getElementById("lastNameMsg").innerHTML = "First name must contain only Alpahbets";
                lastNameError = 1;
                break
            }
        }
    }
}
function emailValid() {
    let email = document.getElementById("email").value;
    let atCount = 0;
    let atLocation = email.indexOf("@");
    let dotCount = 0;
    let dotLocation = email.lastIndexOf(".")
    let lastCharAtError=0;
    console.log(dotLocation);

    if (email == "") {
        document.getElementById("email-msg").innerHTML = "E-mail field must not be empty";
        emailError = 1;
    }

    else {
        if (email.charAt(0) >= "a" && email.charAt(0) <= "z" && email.charAt(0) != " ") {
            if (email.length > 3 && email.length <= 320) {
                console.log(email);
                for (let i = 0; i < email.length; i++) {
                    if (email.charAt(i) == "@") {
                        atCount = atCount + 1;
                        // document.getElementById("email-msg").innerHTML = "";
                        // emailError = 0
                        break
                    }
                    else {
                        // document.getElementById("email-msg").innerHTML = "";
                        // emailError = 0;

                    }
                }
                if(atCount!=0){
                    for (let i = atLocation; i < email.length; i++) {
                        if (email.charAt(i + 1) == ".") {
                            dotCount += 1;
                        }
                        if (atLocation == email.length - 1) {
                            lastCharAtError=1;
                            // document.getElementById("email-msg").innerHTML = "missing '.'  after '@' ";
                        }
                        // if (dotCount != 1) {
                        //     document.getElementById("email-msg").innerHTML = "Invalid Email";
                        //     emailError = 1;
                        // }
                        else {
                            document.getElementById("email-msg").innerHTML = "";
                            emailError = 0;
                        }
                    }
                }
                if (atCount != 1 || email.charAt(atLocation + 1) == "." || email.charAt(atLocation + 2) == "." || atLocation == email.length - 2 || dotLocation == email.length - 2 || dotLocation == email.length - 1) {
                    if (atCount == 1) {
                    }
                    if (email.charAt(atLocation + 1) == "." || email.charAt(atLocation + 2) == "." || atLocation == email.length - 2) {
                        // document.getElementById("email-msg").innerHTML = "Must Enter 2 character after '@' ";
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        emailError = 1;
                    }

                    if (dotLocation == email.length - 2 || dotLocation == email.length - 1) {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        emailError = 1;
                        // document.getElementById("email-msg").innerHTML = "Must Enter 2 character after last '.' ";
                        console.log("error");
                    }
                    else {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        emailError = 1;
                        // document.getElementById("email-msg").innerHTML = "Must Enter 2 character after '@' ";
                    }

                }
                else {
                    if (document.getElementById("email-msg").innerHTML == "Enter valid Email Formate") {
                        document.getElementById("email-msg").innerHTML = "";
                        emailError = 0;
                    }
                }
            }
            else {
                document.getElementById("email-msg").innerHTML = "Email must have minimun length of 4 and max-length of 320";
                emailError = 1;
            }
        }
        else {
            document.getElementById("email-msg").innerHTML = "E-mail should be start with alphabets";
            emailError = 1;
        }
    }

}
function passwordValid() {
    let pass = document.getElementById("pass").value;
    let capitalCount = 0;
    let smallCount = 0;
    let numCount = 0;
    let specialCount = 0;

    if (pass == "") {
        document.getElementById("pass-msg").innerHTML = "Password field must not be empty";
        passwordError = 1;
    }
    else {
        document.getElementById("pass-msg").innerHTML = "";
        passwordError = 0;
        if (pass.length >= 8) {
            document.getElementById("pass-msg").innerHTML = "";
            passwordError = 0;

            for (i = 0; i < pass.length; i++) {
                if (pass.charAt(i) >= "A" && pass.charAt(i) <= "Z") {
                    // document.getElementById("pass-msg").innerHTML = "";
                    // passwordError = 0;
                    capitalCount += 1;
                    break
                }
                else {
                    if (capitalCount == 0) {
                        // document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                        // passwordError = 1;
                    }
                }
            }
            for (j = 0; j < pass.length; j++) {
                if (pass.charAt(j) >= "a" && pass.charAt(j) <= "z") {
                    // document.getElementById("pass-msg").innerHTML = "";
                    // passwordError = 0;
                    smallCount += 1;
                    break
                }
                else {
                    if (smallCount == 0) {
                        // document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                        // passwordError = 1;
                    }

                }
            }

            for (k = 0; k < pass.length; k++) {
                for (let l = 0; l < numArray.length; l++) {
                    if (pass.charAt(k) == numArray[l]) {
                        // document.getElementById("pass-msg").innerHTML = "";
                        // passwordError = 0;
                        numCount += 1;
                        break
                    }
                    else {
                        if (numCount == 0) {
                            // document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                            // passwordError = 1;
                        }
                    }
                }
                if (numCount == 1) {
                    break;
                }
            }

            for (let m = 0; m < pass.length; m++) {
                for (let n = 0; n < numArray.length; n++) {
                    if (pass.charAt(m) == numArray[n] || pass.charAt(m) >= "A" && pass.charAt(i) <= "Z" || pass.charAt(i) >= "a" && pass.charAt(i) <= "z") {
                        specialCount += 0;

                    }
                    else {
                        if (isNaN(pass.charAt(m))) {
                            let wantedChar = pass.charAt(m)
                            specialCount += 1;
                            console.log(wantedChar);
                        }
                        break;
                    }
                }
                if (specialCount == 1) {
                    break;
                }
            }
        }
        else {
            document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor";
            passwordError = 1;
        }

    }

    if (capitalCount == 0 || smallCount == 0 || numCount == 0 || specialCount == 0) {
        passwordError = 1;
        if (document.getElementById("pass-msg").innerHTML == "") {
            if (capitalCount == 0) {
                document.getElementById("pass-msg").innerHTML = "At least one capital needed";
            }
            else if (smallCount == 0) {
                document.getElementById("pass-msg").innerHTML = "At least one small needed";
            }
            else if (numCount == 0) {
                document.getElementById("pass-msg").innerHTML = "At least one number needed";
            }
            else if (specialCount == 0) {
                document.getElementById("pass-msg").innerHTML = "At least one special-char needed";
            }
            else {
                document.getElementById("pass-msg").innerHTML = " invalid email";
            }
        }
    }
    else {
        passwordError = 0;
        document.getElementById("pass-msg").innerHTML = "";
    }
}
function confirmPass() {
    let confirmPassword = document.getElementById("confirm-pass").value;
    let pass = document.getElementById("pass").value;
    if (confirmPassword == "") {
        document.getElementById("confirm-pass-msg").innerHTML = "password dosen't match";
        confirmPasswordError = 1;
    }
    else {
        document.getElementById("confirm-pass-msg").innerHTML = "";
        confirmPasswordError = 0;
        if (confirmPassword != pass) {
            document.getElementById("confirm-pass-msg").innerHTML = "Password dosen't match";
            confirmPasswordError = 1;
        }

    }
}
function genderValid() {

    let gender = document.getElementsByName("gender");
    if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
        document.getElementById("gender-msg").innerHTML = "Enter gender";
    }
    else {
        document.getElementById("gender-msg").innerHTML = "";
    }
}
function phoneNuberValid() {
    // console.log("funtion running");
    let number = document.getElementById("number").value;
    if (number == "") {
        document.getElementById("number-msg").innerHTML = "Phone number field must not be empty";
        numberError = 1;
    }
    else {
        if (number.length == 10) {
            document.getElementById("number-msg").innerHTML = "";
            numberError = 0;
            for (let i = 0; i < number.length; i++) {
                if (isNaN(number.charAt(i)) || number.charAt(i) == "" || number.charAt(i) == " ") {
                    document.getElementById("number-msg").innerHTML = "Enter Valid phone number";
                    numberError = 1;
                    break
                }
                else {
                    document.getElementById("number-msg").innerHTML = "";
                    numberError = 0;
                }
            }
        }
        else {
            document.getElementById("number-msg").innerHTML = "Enter Valid phone number";
            numberError = 1;
        }
    }
}

function validate() {

    // For First name 
    // for (let index = 0; index < fNameArray.length; index++) {
    //     for (let i = 0; i < numArray.length; i++) {
    //         if (fNameArray[index] == numArray[i] || fName == "") {
    //             document.getElementById("f-namee-msg").innerHTML = uNameError;
    //         }
    //     }
    // }
    // For password
    // for (let index = 0; index < password.length; index++) {
    //     if (password.length < 8) {
    //         document.getElementById("pass-msg").innerHTML = passError;
    //     }
    // }

    // For confirm password
    // if (confirmPassword != password || confirmPassword == "") {
    //     document.getElementById("confirm-pass-msg").innerHTML = confirmPassError;
    // }

    // For radio gender

    let gender = document.getElementsByName("gender");
    if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
        document.getElementById("gender-msg").innerHTML = "Enter gender";
        genderError = 1;
    }
    else {
        document.getElementById("gender-msg").innerHTML = "";
        genderError = 0;
    }

    // For number

    // let checkNameField=document.getElementById("f-namee-msg").value 
    // let checkLastName=document.getElementById("lastNameMsg").value
    // let checkEmailFiled=document.getElementById("email-msg").value
    // let checkNumberFiled=document.getElementById("number-msg").value
    // let checkPasswordFiled=document.getElementById("pass-msg").value
    // let checkConfirmPasswordFiled=document.getElementById("confirm-pass-msg").value
    // let checkGenderFiled=document.getElementById("gender-msg").value

    if (nameError != 0 || lastNameError != 0 || emailError != 0 || passwordError != 0 || confirmPasswordError != 0 || numberError != 0 || genderError != 0) {
        alert("Enter valid details")
    }
    // if(checkNameField != "" || checkLastName != ""|| checkConfirmPasswordFiled != ""|| checkEmailFiled != ""|| checkNumberFiled != "" || checkPasswordFiled != "" || checkGenderFiled != ""){

    //     console.log(checkLastName);


    //     alert("Enter valid fields")
    // }
    else {
        alert("form submited successfully")
    }

}

