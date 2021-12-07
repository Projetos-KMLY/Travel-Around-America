/*  abrir menu lateral */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* selecionar opções menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}


/* esconder caracteristicas */

/*
const itens_caracteristica = querySelectorAll(".item-caracteristica") 
itens_caracteristica.addEventListener('click', function (event){})
*/

var c = document.querySelector('.c')
var culin = document.querySelector('.culin')
var idio = document.querySelector('.idio')
var pont = document.querySelector('.pont')

var btnClima = document.getElementById('clima')
btnClima.addEventListener('click', function () {
  c.style.display = 'block'
  culin.style.display = 'none'
  idio.style.display = 'none'
  pont.style.display = 'none'
})

var btnCulinaria = document.getElementById('culinaria')
btnCulinaria.addEventListener('click', function () {
  c.style.display = 'none'
  culin.style.display = 'block'
  idio.style.display = 'none'
  pont.style.display = 'none'
})

var btnIdioma = document.getElementById('idioma')
btnIdioma.addEventListener('click', function () {
  c.style.display = 'none'
  culin.style.display = 'none'
  idio.style.display = 'block'
  pont.style.display = 'none'
})

var btnPontost = document.getElementById('pontos')
btnPontost.addEventListener('click', function () {
  c.style.display = 'none'
  culin.style.display = 'none'
  idio.style.display = 'none'
  pont.style.display = 'block'
})



/* mudar cor ao clicar categorias */

let myButton = document.querySelectorAll('.categorias > button')

myButton.forEach(function (key) {
  key.addEventListener('click', function () {
    removeStyles()
    this.setAttribute('class', 'buttonClicked')
  })
})

function removeStyles() {
  for (let i = 0; i < myButton.length; i++) {
    document
      .querySelectorAll('.categorias > button')
      [i].removeAttribute('class')
  }
}

/* mudar cor ao clicar clima*/

let myButton1 = document.querySelectorAll('.c > button')

myButton1.forEach(function (key) {
  key.addEventListener('click', function () {
    removeStyles1()
    this.setAttribute('class', 'buttonClicked2')
  })
})

function removeStyles1() {
  for (let i = 0; i < myButton1.length; i++) {
    document.querySelectorAll('.c > button')[i].removeAttribute('class')
  }
}

/* mudar cor ao clicar culinaria */

let myButton2 = document.querySelectorAll('.culin > button')

myButton2.forEach(function (key) {
  key.addEventListener('click', function () {
    removeStyles2()
    this.setAttribute('class', 'buttonClicked2')
  })
})

function removeStyles2() {
  for (let i = 0; i < myButton3.length; i++) {
    document.querySelectorAll('.culin > button')[i].removeAttribute('class')
  }
}

/* mudar cor ao clicar idioma*/

let myButton3 = document.querySelectorAll('.idio > button')

myButton3.forEach(function (key) {
  key.addEventListener('click', function () {
    removeStyles3()
    this.setAttribute('class', 'buttonClicked2')
  })
})

function removeStyles3() {
  for (let i = 0; i < myButton3.length; i++) {
    document.querySelectorAll('.idio > button')[i].removeAttribute('class')
  }
}

/* mudar cor ao clicar pontos turisticos */

let myButton4 = document.querySelectorAll('.pont > button')

myButton4.forEach(function (key) {
  key.addEventListener('click', function () {
    removeStyles4()
    this.setAttribute('class', 'buttonClicked2')
  })
})

function removeStyles4() {
  for (let i = 0; i < myButton4.length; i++) {
    document.querySelectorAll('.pont > button')[i].removeAttribute('class')
  }
}

/* mudar cor ao clicar categorias */
