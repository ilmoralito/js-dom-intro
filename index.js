// Entrada

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

// Proceso
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Salida
    if (!username.value || !password.value) {
        alert("Credenciales son requeridas");

        return;
    }

    if (username.value !== "admin" || password.value !== "123") {
        alert("Credenciales incorrectas");

        return;
    }

    alert("Bienvenido " + username.value);
}
