console.log("Forgot Password JS Loaded");
/*
function setupPasswordToggle(inputId, buttonId){

    const input =
        document.getElementById(inputId);

    const button =
        document.getElementById(buttonId);

    const icon =
        button.querySelector("i");

    button.addEventListener("click",function(){

        if(input.type==="password"){

            input.type="text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        }else{

            input.type="password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });
}

setupPasswordToggle(
    "newPassword",
    "toggleNewPassword"
);

setupPasswordToggle(
    "confirmPassword",
    "toggleConfirmPassword"
);
*/
let users =
JSON.parse(localStorage.getItem("users")) || [];

const resetBtn =
document.getElementById("resetBtn");

async function hashPassword(password){

    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    const hashBuffer =
        await crypto.subtle.digest(
            "SHA-256",
            data
        );

    const hashArray =
        Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(byte =>
            byte.toString(16).padStart(2,"0")
        )
        .join("");

}

resetBtn.addEventListener(
    "click",
    async function(){
        let identifier =
            document.getElementById("identifier").value.trim();

        let newPassword =
            document.getElementById("newPassword").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;

        if(
            identifier === "" ||
            newPassword === "" ||
            confirmPassword === ""
        ){

           alert("Fill all fields");
           return;

        }

       if(newPassword !== confirmPassword){

            alert("Passwords do not match");

            return;

        }

        let user = users.find(function(user){

            return user.username === identifier ||
                user.email === identifier;

        });

        if(!user){

            alert("User not found");

            return;

        }

        const hashedPassword =
            await hashPassword(newPassword);

        user.password = hashedPassword;

        localStorage.setItem("users",JSON.stringify(users));

        alert("Password changed successfully.");

        window.location.href ="login.html";

    });


setupPasswordToggle("newPassword", "toggleNewPassword");

setupPasswordToggle("confirmPassword", "toggleConfirmPassword");

