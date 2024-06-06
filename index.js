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

function validate() {
   

    // For First name 
    // for (let index = 0; index < fNameArray.length; index++) {
    //     for (let i = 0; i < numArray.length; i++) {
    //         if (fNameArray[index] == numArray[i] || fName == "") {
    //             document.getElementById("f-name-msg").innerHTML = uNameError;
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
    }
    else {
        document.getElementById("gender-msg").innerHTML = "";
    }

    // For number


    if(document.getElementById("f-name-msg").innerHTML != "" || document.getElementById("l-name-msg").innerHTML != ""|| document.getElementById("email-msg").innerHTML != ""|| document.getElementById("pass-msg").innerHTML != ""|| document.getElementById("confirm-pass-msg").innerHTML != "" || document.getElementById("gender-msg").innerHTML != "" || document.getElementById("number-msg").innerHTML != ""){
        alert("Enter valid fields")
    }
    else{
        alert("form submited successfully")
    }

}
function firstName() {
    let fName = document.getElementById("f-Name").value;
    if (fName == "" || fName.length>50) {
        document.getElementById("f-name-msg").innerHTML = uNameError;
    }
    else {
        document.getElementById("f-name-msg").innerHTML = "";
        for (let i = 0; i < fName.length; i++) {
            if (fName.charAt(i) >= "a" && fName.charAt(i) <= "z" || fName.charAt(i) >= "A" && fName.charAt(i) <= "Z") {
                document.getElementById("f-name-msg").innerHTML = "";
            }
            else {
                document.getElementById("f-name-msg").innerHTML = uNameError;
                break
            }
        }
    }
}
function lastName() {
    let lName = document.getElementById("l-Name").value;
    if (lName == "" || lName.length>50) {
        document.getElementById("l-name-msg").innerHTML = lNameError;
    }
    else {
        document.getElementById("l-name-msg").innerHTML = "";
        for (let i = 0; i < lName.length; i++) {
            if (lName.charAt(i) >= "a" && lName.charAt(i) <= "z" || lName.charAt(i) >= "A" && lName.charAt(i) <= "Z") {
                document.getElementById("l-name-msg").innerHTML = "";
            }
            else {
                document.getElementById("l-name-msg").innerHTML = lNameError;
                break
            }
        }
    }
}
function emailValid() {
    let email = document.getElementById("email").value;
    let atLocation = email.indexOf("@");
    let atCount = 0;
    let dotCount = 0;
    let dotLocation = email.lastIndexOf(".")
    console.log(dotLocation);

    if (email == "") {
        document.getElementById("email-msg").innerHTML = "E-mail field must not be empty";
    }

    else {
        if (email.charAt(0) >= "a" && email.charAt(0) <= "z" && email.charAt(0) != " ") {
            if (email.length > 3 && email.length <= 320) {
                console.log(email);
                for (let i = 0; i < email.length; i++) {
                    if (email.charAt(i) == "@") {
                        atCount = atCount + 1;
                        // console.log(atCount);
                        document.getElementById("email-msg").innerHTML = "";
                    }
                    if (atCount != 1) {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        // document.getElementById("email-msg").innerHTML = "E-mail field must contain @ or only one @";
                        console.log(" @ ni error 0 or one time ");
                    }
                    else {
                        document.getElementById("email-msg").innerHTML = "";

                    }
                }
                for (let i = atLocation; i < email.length; i++) {
                    if (email.charAt(i + 1) == ".") {
                        dotCount += 1;
                        console.log(dotCount);
                    }
                    if (atLocation == email.length - 1) {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        // document.getElementById("email-msg").innerHTML = "missing '.'  after '@' ";
                    }
                    if (dotCount != 1) {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        // document.getElementById("email-msg").innerHTML = "only one '.' required after '@' ";
                        console.log("multiple dot or no dot error");
                    }
                    else {
                        document.getElementById("email-msg").innerHTML = " ";
                    }
                }
                if (atCount != 1 || email.charAt(atLocation + 1) == "." || email.charAt(atLocation + 2) == "." || atLocation == email.length - 2 || dotLocation == email.length - 2 || dotLocation == email.length - 1) {
                    if (atCount == 1) {
                    }
                    if (email.charAt(atLocation + 1) == "." || email.charAt(atLocation + 2) == "." || atLocation == email.length - 2) {
                        // document.getElementById("email-msg").innerHTML = "Must Enter 2 character after '@' ";
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                    }

                    if (dotLocation == email.length - 2 || dotLocation == email.length - 1) {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        // document.getElementById("email-msg").innerHTML = "Must Enter 2 character after last '.' ";
                        console.log("error");
                    }
                    else {
                        document.getElementById("email-msg").innerHTML = "Invalid Email";
                        // document.getElementById("email-msg").innerHTML = "Must Enter 2 character after '@' ";
                    }

                }
                else {
                    if (document.getElementById("email-msg").innerHTML == "Enter valid Email Formate") {
                        document.getElementById("email-msg").innerHTML = "";
                    }
                }
            }
            else {
                document.getElementById("email-msg").innerHTML = "Email must have minimun length of 4 and max-length of 320";
            }
        }
        else {
            document.getElementById("email-msg").innerHTML = "E-mail should be start with alphabets";
        }
    }

}
function passwordValid() {
    let pass = document.getElementById("pass").value;
    let numCount = 0;
    let specialCount = 0;

    if (pass == "") {
        document.getElementById("pass-msg").innerHTML = "Password field must not be empty";
    }
    else {
        document.getElementById("pass-msg").innerHTML = "";
        if (pass.length >= 8) {
            document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital letter ";
            for (i = 0; i < pass.length; i++) {
                if (pass.charAt(i) >= "A" && pass.charAt(i) <= "Z") {
                    document.getElementById("pass-msg").innerHTML = "";
                    for (j = 0; j < pass.length; j++) {
                        if (pass.charAt(j) >= "a" && pass.charAt(j) <= "a") {
                            document.getElementById("pass-msg").innerHTML = "";
                            for (k = 0; k < pass.length; k++) {
                                for (let l = 0; l < numArray.length; l++) {
                                    if (pass.charAt(k) == numArray[l]) {
                                        console.log("number detected");
                                        document.getElementById("pass-msg").innerHTML = "";
                                        numCount += 1;
                                        break
                                    }
                                    else {
                                        console.log("number required in password error");
                                        document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                                    }
                                }
                                if (numCount == 1) {
                                    for (let m = 0; m < pass.length; m++) {
                                        for (let n = 0; n < numArray.length; n++) {
                                            if (pass.charAt(m) == numArray[n] || pass.charAt(m) >= "A" && pass.charAt(i) <= "Z" || pass.charAt(i) >= "a" && pass.charAt(i) <= "z") {
                                                document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                                            }
                                            else {
                                                document.getElementById("pass-msg").innerHTML = "";
                                                specialCount += 1;
                                                break;
                                            }
                                        }
                                        if (specialCount == 1) {
                                            console.log("object");
                                            break;
                                        }

                                    }
                                    break
                                }
                            }
                            break
                        }
                        else {
                            console.log("small latter required in password error");
                            document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                        }
                    }
                    break
                }
                else {
                    console.log("capital letter required in password error");
                    document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
                }
            }


        }
        else {
            document.getElementById("pass-msg").innerHTML = "password must contain of 8 charactor and at least one capital, one small, one number and one special charactor ";
        }

    }
}
function confirmPass() {
    let confirmPassword = document.getElementById("confirm-pass").value;
    let pass = document.getElementById("pass").value;
    if (confirmPassword == "") {
        document.getElementById("confirm-pass-msg").innerHTML = "Please Confirm the Password First!!";
    }
    else {
        document.getElementById("confirm-pass-msg").innerHTML = "";
        if (confirmPassword != pass) {
            document.getElementById("confirm-pass-msg").innerHTML = "Password dosen't match";
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
    console.log("funtion running");
    let number = document.getElementById("number").value;
    if (number == "") {
        document.getElementById("number-msg").innerHTML = "Phone number field must not be empty";
    }
    else {
        if (number.length == 10) {
            document.getElementById("number-msg").innerHTML = "";
            for (let i = 0; i < number.length; i++) {
                if (isNaN(number.charAt(i)) || number.charAt(i) == "" || number.charAt(i) == " ") {
                    document.getElementById("number-msg").innerHTML = "Enter Valid phone number";
                    break
                }
                else {
                    document.getElementById("number-msg").innerHTML = "";

                }
            }
        }
        else {
            document.getElementById("number-msg").innerHTML = "Enter Valid phone number";
        }
    }
}

