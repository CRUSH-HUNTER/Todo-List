console.log("signup.js loaded");
/////////////////Get Information of Users/////////////////
let users = JSON.parse(localStorage.getItem("users")) || [];

//////////////////////Signup Button///////////////////
const signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click" , function () {

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
    const newUser = {

        username: username,
        email: email,
        password: password
    
    }
    users.push(newUser);

    console.log(users);
    //////////////////Save an Information/////////////
    localStorage.setItem("users", JSON.stringify(users));


})