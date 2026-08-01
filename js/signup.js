console.log("signup.js loaded");

const password = document.getElementById("password");
const passwordStrength = document.getElementById("passwordStrength");

const confirmPassword = document.getElementById("confirmPassword");
const confirmMessage = document.getElementById("confirmMessage");

function checkPasswordStrength(password) {

    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);


    let score = 0;


    if(hasLength) score++;
    if(hasUpper) score++;
    if(hasLower) score++;
    if(hasNumber) score++;
    if (hasSpecial) score++;

    if (score <= 1) {

    passwordStrength.textContent = "Very Weak";
    passwordStrength.style.color = "red";

    }

   else if (score === 2) {

    passwordStrength.textContent = "Weak";
    passwordStrength.style.color = "orange";

   }

   else if (score === 3) {

    passwordStrength.textContent = "Medium";
    passwordStrength.style.color = "gold";

   }

   else if (score === 4) {

    passwordStrength.textContent = "Strong";
    passwordStrength.style.color = "green";

   }

   else if (score === 5) {

    passwordStrength.textContent = "Very Strong";
    passwordStrength.style.color = "darkgreen";

   }
    
    return score;

}

password.addEventListener("input", function () {

    let score = checkPasswordStrength(password.value);

});

confirmPassword.addEventListener("input", function () {
   
    if(confirmPassword.value === ""){
        
        confirmMessage.textContent = "";

    }

    else if(password.value !== confirmPassword.value){

        confirmMessage.textContent = "Passwords do not match";
        confirmMessage.style.color = "red";

    }

    else{

        confirmMessage.textContent = "Passwords match";
        confirmMessage.style.color = "green";

    }
})


/////////////////Get Information of Users/////////////////
let users = JSON.parse(localStorage.getItem("users")) || [];

async function hashPassword(password) {

    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;

}

//////////////////////Signup Button///////////////////
const signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click" ,async function () {

       console.log("Signup Clicked");
    let username = document.getElementById("username").value;

    let email = document.getElementById("email").value;

    let passwordValue = document.getElementById("password").value;

    let confirmPasswordValue = document.getElementById("confirmPassword").value;

// 1
if(passwordValue.value !== confirmPasswordValue.value){

    return;

}


// 2
const score = checkPasswordStrength(passwordValue.value);


if(score < 4){

    return;

}

    //////////////check an username and password////////////
    if(username === ""){

        alert("Username is required");
        return;
    }

    //////////Check an UserName///////////
    let usernameExists = users.some(function(user){

        return user.username === username;

    });

    if(usernameExists){

        alert("Username already exists");

    return;

    }

    /////////////check an Emails/////////
    let emailExists = users.some(function(user){

        return user.email === email;

    });

    if(emailExists){

        alert("Email already exists");

    return;

    }

    ////Define an Object////
    const hashedPassword = await hashPassword(passwordValue);
    const newUser = {

        username: username,
        email: email,
        passwordValue: hashedPassword
    
    }
users.push(newUser);

console.log("Before Save:", users);

localStorage.setItem("users", JSON.stringify(users));

console.log("After Save:", localStorage.getItem("users"));
    
window.location.href = "../pages/login.html";

})

setupPasswordToggle("password", "togglePassword");

setupPasswordToggle("confirmPassword", "toggleConfirmPassword");