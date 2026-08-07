let register = document.querySelector("#registerform");

register.addEventListener("submit", async (e) => {
    e.preventDefault()
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    try {

        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        if (!res.ok) {
            document.querySelector("#message").textContent = data.message;
            return
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        document.querySelector("#message").textContent = data.message;

        register.reset();

    } catch (err) {
          document.querySelector("#message").textContent = "something went wrong";
          console.log(err)

    }
})