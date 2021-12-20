<<<<<<< HEAD
/* selecionar opções menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
=======
const icon = document.getElementById('icon')
let nav = document.getElementById('nav')
>>>>>>> 58bf6a12912e496105bcdf1ea9c7df5e96dbb494

icon.addEventListener('click', () => {
  if (nav.style.left === '0rem') {
    nav.style.left = '-21rem'
  } else {
    nav.style.left = '0rem'
  }
})
/* esconder caracteristicas */

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

/* botoes */

const open = document.getElementById('equatorial')
const open2 = document.getElementById('quente')
const open3 = document.getElementById('temperado')
const open4 = document.getElementById('tropical')
const open5 = document.getElementById('outros')

const open6 = document.getElementById('caldo')
const open7 = document.getElementById('exotico')
const open8 = document.getElementById('massa')
const open9 = document.getElementById('proteina')
const open10 = document.getElementById('pratof')
const open11 = document.getElementById('raizes')

const open12 = document.getElementById('espanhol')
const open13 = document.getElementById('ingles')
const open14 = document.getElementById('outrosidi')

const open15 = document.getElementById('cidade')
const open16 = document.getElementById('floresta')
const open17 = document.getElementById('geleira')
const open18 = document.getElementById('historico')
const open19 = document.getElementById('montanha')
const open20 = document.getElementById('praia')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('fechar')

var escolha = 0

close.addEventListener('click', () => {
  modal_container.classList.remove('show')
})

open.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 3
  document.getElementById('escolha').value = escolha
})

open2.addEventListener('click', () => {
  modal_container.classList.add('show')
  var escolha = 4
  document.getElementById('escolha').value = escolha
})

open3.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 2
  document.getElementById('escolha').value = escolha
})

open4.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 1
  document.getElementById('escolha').value = escolha
})

open5.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 5
  document.getElementById('escolha').value = escolha
})

open6.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 11
  document.getElementById('escolha').value = escolha
})

open7.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 10
  document.getElementById('escolha').value = escolha
})

open8.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 8
  document.getElementById('escolha').value = escolha
})

open9.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 6
  document.getElementById('escolha').value = escolha
})

open10.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 7
  document.getElementById('escolha').value = escolha
})

open11.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 9
  document.getElementById('escolha').value = escolha
})

open12.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 12
  document.getElementById('escolha').value = escolha
})

open13.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 13
  document.getElementById('escolha').value = escolha
})

open14.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 14
  document.getElementById('escolha').value = escolha
})

open15.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 18
  document.getElementById('escolha').value = escolha
})

open16.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 17
  document.getElementById('escolha').value = escolha
})

open17.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 20
  document.getElementById('escolha').value = escolha
})

open18.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 19
  document.getElementById('escolha').value = escolha
})

open19.addEventListener('click', () => {
  modal_container.classList.add('show')

  var escolha = 16
  document.getElementById('escolha').value = escolha
})

open20.addEventListener('click', () => {
  modal_container.classList.add('show')

<<<<<<< HEAD





const icon = document.getElementById('icon');
let nav = document.getElementById ('nav');

icon.addEventListener('click', () => {
    if(nav.style.left === '0rem') {
        nav.style.left = '-21rem';
    }
    else {
        nav.style.left = '0rem';
    }
=======
  var escolha = 15
  document.getElementById('escolha').value = escolha
>>>>>>> 58bf6a12912e496105bcdf1ea9c7df5e96dbb494
})
