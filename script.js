const form = document.getElementById("meuForm");

form.addEventListener('submit', event => {
    event.preventDefault()
    form.classList.add('was-validated')
    if (!form.checkValidity()) {
        alert("Campos inválidos, por favor verifique!")
    } else{
        const inputEmail = document.getElementById("email")
        const inputSenha = document.getElementById("password")

        const usuario = {
            email: inputEmail.value,
            senha: inputSenha.value,
        };

        console.log(usuario)
    }
});

const btnTheme = document.getElementById("btn-theme");
const icone = document.getElementById("icone-tema");
let temaAtual = "light";

btnTheme.addEventListener("click", () => {
    switch(temaAtual){
        case "light":
            temaAtual = "dark";
            document.body.setAttribute("data-bs-theme", "dark");
            icone.setAttribute("class", "bi bi-sun-fill");
            btnTheme.classList.remove("btn-dark");
            btnTheme.classList.add("btn-light");
            break;

        case "dark":
            temaAtual = "light";
            document.body.setAttribute("data-bs-theme", "light");
            icone.setAttribute("class", "bi bi-moon-stars-fill");
            btnTheme.classList.remove("btn-light");
            btnTheme.classList.add("btn-dark");
            break;
    }
});