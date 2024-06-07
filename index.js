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
let userData = {
    fName: "",
    lName: "",
    eMail: "",
    number: "",
    password: "",
    gender: ""
}


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
    let lastCharAtError = 0;
    let atLeastTwoCharError = 0;
    let lestTwoCharAfterDot = 0;
    let emptyEmailError = 1;
    let emailStartError = 0;
    let emailLengthError = 0;
    let specialCharBefore = 0;
    // console.log(dotLocation);

    if (email == "") {
        emptyEmailError = 1;
    }

    else {
        emptyEmailError = 0;
        if (email.charAt(0) >= "a" && email.charAt(0) <= "z" && email.charAt(0) != " ") {
            if (email.length > 3 && email.length <= 320) {
                // console.log(email);
                for (let i = 0; i < email.length; i++) {
                    if (email.charAt(i) == "@") {
                        atCount += 1;
                        // console.log(atCount);
                    }
                    else {
                    }
                }
                if (atCount != 0) {
                    for (let i = atLocation; i < email.length; i++) {
                        if (email.charAt(i + 1) == ".") {
                            dotCount += 1;
                        }
                        if (atLocation == email.length - 1) {
                            lastCharAtError = 1;
                        }

                        else {
                        }
                    }
                }
                if (atCount != 1 || email.charAt(atLocation + 1) == "." || email.charAt(atLocation + 2) == "." || atLocation == email.length - 2 || dotLocation == email.length - 2 || dotLocation == email.length - 1) {
                    if (atCount == 1) {
                    }
                    if (email.charAt(atLocation + 1) == "." || email.charAt(atLocation + 2) == "." || atLocation == email.length - 2 || atLocation == email.length - 1) {
                        atLeastTwoCharError = 1;
                    }

                    if (dotLocation == email.length - 2 || dotLocation == email.length - 1) {
                        lestTwoCharAfterDot = 1;
                    }
                    else {

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
                emailLengthError = 1;
            }
        }
        else {
            emailStartError = 1;
        }
    }
    for (let i = 0; i < email.length; i++) {
        for (let j = 0; j < numArray.length; j++) {
            if (email.charAt(i) == numArray[j] || email.charAt(i) >= "A" && email.charAt(i) <= "Z" || email.charAt(i) >= "a" && email.charAt(i) <= "z" || email.charAt(i) == "@" || email.charAt(i) == ".") {

                // console.log(email.charAt(i));

            }
            else {
                if (isNaN(email.charAt(i))) {
                    specialCharBefore = 1;
                }
            }
        }
        if (specialCharBefore == 1) {
            break;
        }
    }


    if (lestTwoCharAfterDot != 0 || atLeastTwoCharError != 0 || lastCharAtError != 0 || atCount != 1 || dotCount == 0 || dotCount >= 3 || emptyEmailError != 0 || emailStartError != 0 || emailLengthError != 0 || specialCharBefore != 0) {
        emailError = 1;
        if (emptyEmailError != 0) {
            document.getElementById("email-msg").innerHTML = "Email Field should not be empty";
        }
        else if (specialCharBefore != 0) {
            document.getElementById("email-msg").innerHTML = "only '@' and ' . ' are allowed in special char ";
        }
        else if (emailStartError != 0) {
            document.getElementById("email-msg").innerHTML = "Email should Start with Charactor";
        }
        else if (emailLengthError != 0) {
            document.getElementById("email-msg").innerHTML = "E-mail must contain min-4 and max-320 char ";
        }
        else if (atCount == 0) {
            document.getElementById("email-msg").innerHTML = "Please Enter one '@' in E-mail ";
        }
        else if (atCount >= 2) {
            document.getElementById("email-msg").innerHTML = "Only one '@' in E-mail is allowed ";
        }
        else if (lastCharAtError != 0) {
            document.getElementById("email-msg").innerHTML = "Last char should not be '@' ";
        }
        else if (atLeastTwoCharError != 0) {
            document.getElementById("email-msg").innerHTML = "At Least Two Charactor After '@' Required ";
        }
        else if (dotCount == 0) {
            document.getElementById("email-msg").innerHTML = " at least one '.' Required after '@' ";
        }
        else if (dotCount >= 3) {
            document.getElementById("email-msg").innerHTML = " at least one or at most two '.' allowed in E-mail after '@' ";
        }
        else if (lestTwoCharAfterDot != 0) {
            document.getElementById("email-msg").innerHTML = "At Least Two Charactor After '.' Required ";
        }

        else {

        }
    }
    else {
        emailError = 0
        document.getElementById("email-msg").innerHTML = "";
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
                    if (pass.charAt(m) == numArray[n] || pass.charAt(m) >= "A" && pass.charAt(m) <= "Z" || pass.charAt(m) >= "a" && pass.charAt(m) <= "z") {
                        specialCount += 0;

                    }
                    else {
                        if (isNaN(pass.charAt(m))) {
                            let wantedChar = pass.charAt(m)
                            specialCount += 1;
                            // console.log(wantedChar);
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
    let lessNumberError = 0;
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
            document.getElementById("number-msg").innerHTML = "Enter 10 numbers in number field";
            numberError = 1;
        }
    }
    if (parseInt(number.charAt(0)) <= 5) {
        lessNumberError = 1;
    }
    if (lessNumberError != 0) {
        numberError = 1;
        document.getElementById("number-msg").innerHTML = "number must be start with 6 or greater series";
    }
    else {
    }
}

function validate() {


    // For radio gender

    let genderVal = document.getElementsByName("gender");
    let gender=document.getElementsByName("gender");
    if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
        document.getElementById("gender-msg").innerHTML = "Enter gender";
        genderError = 1;
    }
    else {
        document.getElementById("gender-msg").innerHTML = "";
        genderError = 0;
    }
    if (nameError != 0 || lastNameError != 0 || emailError != 0 || passwordError != 0 || confirmPasswordError != 0 || numberError != 0 || genderError != 0) {
        alert("Enter valid details")
    }
    else {
        alert("form submited successfully")
        if (gender[0].checked == true) {
            genderVal = "male";
        }
        if (gender[1].checked == true) {
            genderVal = "female";
        }
        if (gender[2].checked == true) {
            genderVal = "other";
        }

        userData = {
            fName: document.getElementById("f-Name").value,
            lName: document.getElementById("l-Name").value,
            eMail: document.getElementById("email").value,
            number: document.getElementById("number").value,
            password: document.getElementById("pass").value,
            gender: genderVal
        }
        console.log(userData);
        document.getElementById("f-Name").value = "",
            document.getElementById("l-Name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("number").value = "",
            document.getElementById("pass").value = ""
            if (document.getElementById("confirm-pass").value != "") {
                document.getElementById("confirm-pass").value = ""
            }
            document.getElementsByName("gender").value = ""
    }

}

function hideShowPassword() {
    let passType = document.getElementById("pass")
    let confirmpassType = document.getElementById("confirm-pass")
    if (passType.type == "password" || confirmpassType.type == "password") {
        passType.type = "text"
        confirmpassType.type = "text"
    }
    else {
        passType.type = "password"
        confirmpassType.type = "password"

    }
}
function onReset() {

    if (document.getElementById("f-Name").value != "") {
        document.getElementById("f-Name").value = ""
    }
    if (document.getElementById("l-Name").value != "") {
        document.getElementById("l-Name").value = ""
    }
    if (document.getElementById("email").value != "") {
        document.getElementById("email").value = ""
    }
    if (document.getElementById("number").value != "") {
        document.getElementById("number").value = ""
    }
    if (document.getElementById("pass").value != "") {
        document.getElementById("pass").value = ""
    }
    if (document.getElementById("confirm-pass").value != "") {
        document.getElementById("confirm-pass").value = ""
    }
    let selectedGenderRemove = document.getElementsByName("gender");
    for (let i = 0; i < selectedGenderRemove.length; i++)
        selectedGenderRemove[i].checked = false;


}

