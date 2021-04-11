// Entrada

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const message = document.querySelector(".message");

// Proceso
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Salida
    if (!username.value || !password.value) {
        message.innerHTML = "Credenciales son requeridas";
        message.classList.remove("hide");

        return;
    }

    if (username.value !== "admin" || password.value !== "123") {
        message.innerHTML = "Credenciales incorrectas";
        message.classList.remove("hide");

        return;
    }

    message.innerHTML = "Bienvenido " + username.value;
}
