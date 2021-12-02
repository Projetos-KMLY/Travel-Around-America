var o = document.getElementById('o')

o.addEventListener('click', function() {

    let password = document.getElementById('confsenha')

    if(password.type == "password") {
        password.type = "text"
        o.setAttribute("src", "./img/olhoaberto.svg")
    } else {
        password.type = "password"
        o.setAttribute("src", "./img/olhoechado.svg")

    }
})

var os = document.getElementById('os')

os.addEventListener('click', function() {

    let password = document.getElementById('senha')

    if(password.type == "password") {
        password.type = "text"
        os.setAttribute("src", "./img/olhoaberto.svg")
    } else {
        password.type = "password"
        os.setAttribute("src", "./img/olhoechado.svg")

    }
})