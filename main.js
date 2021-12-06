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

var btn = document.getElementById('clima');
var c = document.querySelector('.c');
btn.addEventListener('click', function() {
    
  if(c.style.display === 'block') {
      c.style.display = 'none';
  } else {
      c.style.display = 'block';
  }
});

var btn = document.getElementById('culinaria');
var culin = document.querySelector('.culin');
btn.addEventListener('click', function() {
    
  if(culin.style.display === 'block') {
      culin.style.display = 'none';
  } else {
      culin.style.display = 'block';
  }
});

var btn = document.getElementById('idioma');
var idio = document.querySelector('.idio');
btn.addEventListener('click', function() {
    
  if(idio.style.display === 'block') {
      idio.style.display = 'none';
  } else {
      idio.style.display = 'block';
  }
});

var btn = document.getElementById('pontos');
var pont = document.querySelector('.pont');
btn.addEventListener('click', function() {
    
  if(pont.style.display === 'block') {
      pont.style.display = 'none';
  } else {
      pont.style.display = 'block';
  }
});

/* mudar cor ao clicar categorias */

let myButton = document.querySelectorAll('.categorias > button');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})

function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.categorias > button')[i].removeAttribute('class');
    }
}

/* mudar cor ao clicar clima*/

let myButton1 = document.querySelectorAll('.c > button');

myButton1.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles1();
        this.setAttribute('class', 'buttonClicked2');
    });
})

function removeStyles1(){
    for(let i = 0;i < myButton1.length;i++){
        document.querySelectorAll('.c > button')[i].removeAttribute('class');
    }
}

/* mudar cor ao clicar culinaria */

let myButton2 = document.querySelectorAll('.culin > button');

myButton2.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles2();
        this.setAttribute('class', 'buttonClicked2');
    });
})

function removeStyles2(){
    for(let i = 0;i < myButton3.length;i++){
        document.querySelectorAll('.culin > button')[i].removeAttribute('class');
    }
}

/* mudar cor ao clicar idioma*/

let myButton3 = document.querySelectorAll('.idio > button');

myButton3.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles3();
        this.setAttribute('class', 'buttonClicked2');
    });
})

function removeStyles3(){
    for(let i = 0;i < myButton3.length;i++){
        document.querySelectorAll('.idio > button')[i].removeAttribute('class');
    }
}

/* mudar cor ao clicar pontos turisticos */

let myButton4 = document.querySelectorAll('.pont > button');

myButton4.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles4();
        this.setAttribute('class', 'buttonClicked2');
    });
})

function removeStyles4(){
    for(let i = 0;i < myButton4.length;i++){
        document.querySelectorAll('.pont > button')[i].removeAttribute('class');
    }
}

/* mudar cor ao clicar categorias */
