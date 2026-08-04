let users = [
  {
    name: "Ali Khan",
    pic: "https://i.pravatar.cc/150?img=1",
    bio: "Frontend Developer"
  },
  {
    name: "Ahmed Raza",
    pic: "https://i.pravatar.cc/150?img=2",
    bio: "Backend Developer"
  },
  {
    name: "Sara Ali",
    pic: "https://i.pravatar.cc/150?img=3",
    bio: "UI/UX Designer"
  },

  {
    name: "Usman Tariq",
    pic: "https://i.pravatar.cc/150?img=5",
    bio: "Full Stack Developer"
  },
  {
    name: "Ayesha Khan",
    pic: "https://i.pravatar.cc/150?img=6",
    bio: "Data Scientist"
  },
  {
    name: "Bilal Ahmed",
    pic: "https://i.pravatar.cc/150?img=7",
    bio: "Python Developer"
  },
  {
    name: "Hassan Riaz",
    pic: "https://i.pravatar.cc/150?img=8",
    bio: "React Developer"
  },
  {
    name: "Zain Ali",
    pic: "https://i.pravatar.cc/150?img=9",
    bio: "AI Engineer"
  },
  {
    name: "Maham Malik",
    pic: "https://i.pravatar.cc/150?img=10",
    bio: "Cloud Engineer"
  }
];

let container = document.querySelector("#container");

function Show(arr){

    arr.forEach(function(user){

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;

        const h2 = document.createElement("h2");
        h2.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.bio;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p);

        container.appendChild(card);

    });

}

Show(users);


let inp = document.querySelector("input");

inp.addEventListener("input", function(){
   let newUsers =  users.filter(function(user){
        return user.name.includes(inp.value)
    });

    container.innerHTML= ""
    Show(newUsers);
})

