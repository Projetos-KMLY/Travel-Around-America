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
