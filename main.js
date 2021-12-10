const icon = document.getElementById('icon');
let nav = document.getElementById ('nav');

icon.addEventListener('click', () => {
    if(nav.style.left === '0rem') {
        nav.style.left = '-21rem';
    }
    else {
        nav.style.left = '0rem';
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

close.addEventListener('click', () => {
  modal_container.classList.remove('show')
})

open.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open2.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open3.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open4.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open5.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open6.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open7.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open8.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open9.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open10.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open11.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open12.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open13.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open14.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open15.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open16.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open17.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open18.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open19.addEventListener('click', () => {
  modal_container.classList.add('show')
})

open20.addEventListener('click', () => {
  modal_container.classList.add('show')
})

/* botoes */
