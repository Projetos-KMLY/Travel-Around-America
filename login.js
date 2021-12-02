var o = document.getElementById('o')

o.addEventListener('click', function() {

    let password = document.getElementById('senha')

    if(password.type == "password") {
        password.type = "text"
        o.setAttribute("src", "./img/olhoaberto.svg")
    } else {
        password.type = "password"
        o.setAttribute("src", "./img/olhoechado.svg")

    }
})