console.log("signup.js loaded");
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

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    //////////////check an username and password////////////
    if(username === ""){

        alert("Username is required");
        return;
    }

    if(password !== confirmPassword){

        alert("Passwords do not match");
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
    const hashedPassword = await hashPassword(password);
    const newUser = {

        username: username,
        email: email,
        password: hashedPassword
    
    }
users.push(newUser);

console.log("Before Save:", users);

localStorage.setItem("users", JSON.stringify(users));

console.log("After Save:", localStorage.getItem("users"));
    
window.location.href = "../pages/login.html";

})