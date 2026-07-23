const currentUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");

if (!currentUser) {
    window.location.href = "../pages/login.html";
}

const welcome = document.getElementById("welcome");
welcome.textContent = `Welcome, ${currentUser} 👋`;

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");

    window.location.href = "../pages/login.html";
});

function render() {

        stat1.innerHTML = "<h3>Total</h3>";
        stat2.innerHTML = "<h3>Pending</h3>";
        stat3.innerHTML = "<h3>In Progress</h3>";
        stat4.innerHTML = "<h3>Completed</h3>";


        tasks.forEach(function (task) {
            
            /////////Check CurrentUser////////
            if (task.username !== currentUser) {
                
                return;

            }

            //////////for Box//////////////
            
            div = document.createElement('div');
            div.classList.add("task-card");

            h4 = document.createElement('h4');
            p = document.createElement('p');

            span = document.createElement('span');
            actions = document.createElement("div");

            editBtn = document.createElement("button");
            deleteBtn = document.createElement("button");

            editBtn.textContent = "✏ Edit";
            deleteBtn.textContent = "🗑 Delete";     
            
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);

            div.appendChild(actions);
            
            h4.textContent = task.title;
            p.textContent = task.description;
            span.textContent = task.priority;
            
            div.appendChild(h4);
            div.appendChild(p);
            div.appendChild(span);
            
            ///////Check Status////////
            if (task.status === "Pending") {
    
                 stat2.appendChild(div);

            }

            else if (task.status === "Inprogress") {

                 stat3.appendChild(div);

            }
            else {
  
                 stat4.appendChild(div);

            }
        
            /////Check Priority for SPAN//////
            switch (task.priority) {
                case "Easy":
                     span.style.color = "lightgreen";
                break;
                case "Medium":
                     span.style.color = "orange";
                break;
                case "Difficult":
                     span.style.color = "red";
                break;
        }   

        //////////Total///////////
        const ul = document.createElement('ul');
        const li = document.createElement('li');

        ///////Total/////////
        ul.textContent = task.title;
        li.textContent = task.priority;
        
        switch (task.priority) {
            case "Easy":
                li.style.color = "lightgreen";
                break;
            case "Medium":
                li.style.color = "orange";
                break;
            case "Difficult":
                li.style.color = "red";
                break;
        }


        stat1.appendChild(ul);
        stat1.appendChild(li);

        console.log(task.title);
            
    });
}

function resetForm() {
    document.getElementById("tex").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("selec1").value = "Easy";
    document.getElementById("selec2").value = "Pending";
}

///////////////Keys//////////////
openBtn.onclick = function () {

    //id.style.property
    resetForm();
    modal.style.display = "flex";
    
}

closeBtn.onclick = function () {

    modal.style.display = "none";

}

can.onclick = function () {

    modal.style.display = "none";

}

ClearAll.onclick = function () {
    tasks = [];
    localStorage.removeItem("tasks");
    render();
}

let users = [];

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];   ///or///   //let tasks = [];
render();

send.onclick = function () {

    modal.style.display = "none";

    ////////////make div to put my input in it//////////
    let text = document.querySelector("#tex").value;
    let desc = document.querySelector("#desc").value;
    let Priority = document.querySelector("#selec1").value;
    let Status = document.querySelector("#selec2").value;

    /////////object//////////
    const task = {

    username: currentUser,
    title: text,
    description: desc,
    priority: Priority,
    status: Status

    };


    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
    console.log(task);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    console.log(task.title);
    console.log(task.description);
    console.log(task.priority);
    console.log(task.status);
*/
    
/*
        //////////for Box//////////////
        div = document.createElement('div');
        h4 = document.createElement('h4');
        p = document.createElement('p');
        span = document.createElement('span');

        //////////Total///////////
        ul = document.createElement('ul');
        li = document.createElement('li');

        h4.textContent = text;
        p.textContent = desc;
        span.textContent = Priority;
        ///////Total/////////
        ul.textContent = text;
        li.textContent = Priority;
 
        ///////for Box////////
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(span);
    
        /////Check Priority for SPAN//////
        switch (Priority) {
            case "Easy":
                span.style.color = "lightgreen";
                break;
            case "Medium":
                span.style.color = "orange";
                break;
            case "Difficult":
                span.style.color = "red";
                break;
        }
      switch (Priority) {
            case "Easy":
                li.style.color = "lightgreen";
                break;
            case "Medium":
                li.style.color = "orange";
                break;
            case "Difficult":
                li.style.color = "red";
                break;
        }
        /////Check Priority for LI//////
  

        ///////Check Status////////
        if (Status === "Pending") {
    
            stat2.appendChild(div);

        }

        else if (Status === "Inprogress") {

            stat3.appendChild(div);

        }
        else {

            stat4.appendChild(div);

        }
        //////////Total//////////
        stat1.appendChild(ul);
        stat1.appendChild(li);
        */
}
