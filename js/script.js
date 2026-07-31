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
            
            let div = document.createElement('div');
            div.classList.add("task-card");

            let h4 = document.createElement('h4');
            let p = document.createElement('p');

            let span = document.createElement('span');
            let actions = document.createElement("div");

            let editBtn = document.createElement("button");
            let deleteBtn = document.createElement("button");

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

           deleteBtn.onclick = function () {

                tasks = tasks.filter(function(item){

                return item.id != task.id;

             });

             localStorage.setItem("tasks", JSON.stringify(tasks));
               
             render();
           
           }

            editBtn.onclick = function () {

                send.textContent = "Update";

                editTaskId = task.id;
             
                modal.style.display = "flex";

                document.getElementById("tex").value = task.title;

                document.getElementById("desc").value = task.description;

                document.getElementById("selec1").value = task.priority;

                document.getElementById("selec2").value = task.status;

            }
            
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
let editTaskId = null;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];   ///or///   //let tasks = [];

render();

send.onclick = function () {

    modal.style.display = "none";

    ////////////make div to put my input in it//////////
    let text = document.querySelector("#tex").value;
    let desc = document.querySelector("#desc").value;
    let Priority = document.querySelector("#selec1").value;
    let Status = document.querySelector("#selec2").value;

    if(editTaskId === null){

        const task = {
    
             id: Date.now(),
             username: currentUser,
             title: text,
             description: desc,
             priority: Priority,
             status: Status
        };


    tasks.push(task);

    }
    else {
        
        const item = tasks.find(function(task){

             return task.id == editTaskId;
        
        });


      if(item){

          item.title = text;
          item.description = desc;
          item.priority = Priority;
          item.status = Status;
       }

    }
    /////////object//////////
 
    editTaskId = null;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();

}
