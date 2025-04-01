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