let form = document.querySelector("form");
let nme = document.querySelector("#name");
let email = document.querySelector("#email");
let age = document.querySelector("#age");

const deleteUser = async (id) => {

    const response = await fetch(
        `http://localhost:5000/api/users/${id}`,
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    console.log(data);

    await getmethod();
};

const getmethod = async () => {

    const response = await fetch("http://localhost:5000/api/users");

    const data = await response.json();

    const usersContainer = document.querySelector("#usersContainer");

    // Purane cards remove karo
    usersContainer.innerHTML = "";

    data.forEach(user => {

        // Card
        const card = document.createElement("div");
        card.classList.add("user-card");


        // Name
        const name = document.createElement("h2");
        name.textContent = user.name;


        // Email
        const email = document.createElement("p");
        email.textContent = user.email;


        // Age
        const age = document.createElement("p");
        age.textContent = `Age: ${user.age}`;


        // Actions
        const actions = document.createElement("div");
        actions.classList.add("card-actions");


        // Update button
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";


        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", ()=>{
            deleteUser(user.id)
        });


        // Actions mein buttons
        actions.appendChild(updateBtn);
        actions.appendChild(deleteBtn);


        // Card mein elements
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(age);
        card.appendChild(actions);


        // Card container mein
        usersContainer.appendChild(card);

    });
};



form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    let users = {
        name: nme.value,
        email: email.value,
        age: age.value
    }

    const response = await fetch("http://localhost:5000/api/users",{
        method: "POST",

        headers:{
            "Content-Type" : "application/json"
        }, 


        body: JSON.stringify(users)


    });

    const data = await response.json();

    console.log(data);

    form.reset();
    await getmethod();
});

getmethod();
