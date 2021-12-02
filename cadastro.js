var o = document.getElementById('o')

o.addEventListener('click', function () {

    let password = document.getElementById('confsenha')

    if (password.type == "password") {
        password.type = "text"
        o.setAttribute("src", "./img/olhoaberto.svg")
    } else {
        password.type = "password"
        o.setAttribute("src", "./img/olhoechado.svg")

    }
})

var os = document.getElementById('os')

os.addEventListener('click', function () {

    let password = document.getElementById('senha')

    if (password.type == "password") {
        password.type = "text"
        os.setAttribute("src", "./img/olhoaberto.svg")
    } else {
        password.type = "password"
        os.setAttribute("src", "./img/olhoechado.svg")

    }
})

const button = document.getElementById('entrar')

button.addEventListener('click', () => {
    event.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')
    const confsenha = document.getElementById('confsenha')

    if (nome.value == '') {
        nome.classList.add("errorInput")
    }

    if (email.value == '') {
        email.classList.add("errorInput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (senha.value == '') {
        senha.classList.add("errorInput")
    }

    if (confsenha.value == '') {
        confsenha.classList.add("errorInput")
    }

    if (senha.value.length <= 7) {
        senha.classList.add("errorInput")
    }

    if (confsenha.value != senha.value) {
        confsenha.classList.add("errorInput")
    }

});