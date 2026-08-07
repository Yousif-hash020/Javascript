let form = document.querySelector("form");
let nme = document.querySelector("#name");
let email = document.querySelector("#email");
let age = document.querySelector("#age");

form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    let users = {
        name: nme.value,
        email: email.value,
        age: age.value
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",

        headers:{
            "Content-Type" : "application/json"
        }, 


        body: JSON.stringify(users)


    });

    const data = await response.json();

    console.log(data);

    form.reset();
    
});