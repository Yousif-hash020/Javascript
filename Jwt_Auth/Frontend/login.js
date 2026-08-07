let login = document.querySelector("#loginform")

login.addEventListener("submit", async (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    try {

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json()

        if (!response.ok) {
            document.querySelector("#message").textContent = data.message;
            return
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        document.querySelector("#message").textContent = data.message;

        login.reset();
    }
    catch (err) {
        document.querySelector("#message").textContent = "something went wrong"
        console.log(err);
    }
})