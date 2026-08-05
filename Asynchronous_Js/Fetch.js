// Container
const container = document.createElement("div");
container.className = "container";

// Heading
const heading = document.createElement("h1");
heading.textContent = "Random Users";

// Main
const main = document.createElement("div");
main.className = "main";

// Append
container.appendChild(heading);
container.appendChild(main);

document.body.appendChild(container);

// Fetch API
fetch("https://randomuser.me/api/?results=3")
.then((response) => response.json())
.then((data) => {

    data.results.forEach((user) => {

        // Card
        const userCard = document.createElement("article");
        userCard.className = "user-card";

        // Image
        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = `${user.name.first} ${user.name.last}`;

        // Name
        const name = document.createElement("h2");
        name.textContent = `${user.name.first} ${user.name.last}`;

        // Email
        const email = document.createElement("p");
        email.innerHTML = `<strong>Email:</strong> ${user.email}`;

        // Phone
        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`;

        // Append to Card
        userCard.appendChild(img);
        userCard.appendChild(name);
        userCard.appendChild(email);
        userCard.appendChild(phone);

        // Append Card to Main
        main.appendChild(userCard);

    });

})
.catch((err) => {
    console.log(err);
});