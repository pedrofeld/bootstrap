const form = document.getElementById("myForm");
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
let currentTheme = "light";

form.addEventListener('submit', event => {
    event.preventDefault();
    form.classList.add('was-validated');
    
    if (!form.checkValidity()) {
        alert("Invalid fields, please check your inputs!");
    } else {
        const inputEmail = document.getElementById("inputEmail");
        const inputPassword = document.getElementById("inputPassword");

        const user = {
            email: inputEmail.value,
            password: inputPassword.value,
        };

        console.log(user);
    }
});

themeButton.addEventListener("click", () => {
    switch(currentTheme) {
        case "light":
            currentTheme = "dark";
            document.body.setAttribute("data-bs-theme", "dark");
            themeIcon.setAttribute("class", "bi bi-sun-fill");
            themeButton.classList.remove("btn-dark");
            themeButton.classList.add("btn-light");
            break;

        case "dark":
            currentTheme = "light";
            document.body.removeAttribute("data-bs-theme");
            themeIcon.setAttribute("class", "bi bi-moon-stars-fill");
            themeButton.classList.remove("btn-light");
            themeButton.classList.add("btn-dark");
            break;
    }
});