console.log("LOGIN PAGE");
console.log(localStorage.getItem("users"));
console.log(JSON.parse(localStorage.getItem("users")));

let users = JSON.parse(localStorage.getItem("users")) || [];

const loginBtn = document.getElementById("loginBtn");

const rememberMe = document.getElementById("rememberMe");

console.log(rememberMe.checked)

loginBtn.addEventListener("click",async function () {
    
    console.log(users);

    let username = document.getElementById("username").value;
    
    let password = document.getElementById("password").value;

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

    const hashedPassword = await hashPassword(password);

    let user = users.find(function (user) {
        
        return user.username === username;

    })
      console.log(user);

    if (!user) {

        alert("User not found");
        return;

    }

    if (user.password !== hashedPassword) {

        alert("Wrong password");
        return;

    }
    //////////////RememberButton///////////////
    if (rememberMe.checked) {

    localStorage.setItem("currentUser", user.username);

    } else {

    sessionStorage.setItem("currentUser", user.username);

    }
    window.location.href = "../pages/index.html";

})