console.log(localStorage.getItem("users"));

let users = JSON.parse(localStorage.getItem("users")) || [];

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
    
    console.log(users);
  

    let username = document.getElementById("username").value;
    
    let password = document.getElementById("password").value;

    let user = users.find(function (user) {
        
        return user.username === username;

    })
      console.log(user);

    if (!user) {

        alert("User not found");
        return;

    }

    if (user.password !== password) {

        alert("Wrong password");
        return;

    }

    localStorage.setItem("currentUser", user.username);

    window.location.href = "index.html";

})