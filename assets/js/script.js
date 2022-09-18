// SCROLL TOP
var  buttonScrollTop= document.getElementById("scroll-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScrollTop.style.opacity = '1';
  } else {
    buttonScrollTop.style.opacity = 0;
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// SHOW-FALE-CONOSCO
function showFaleConosco(){
  let container = document.querySelector('.fale-conosco');
  container.classList.add('active');
  document.body.classList.add('overflow');
}

// CLOSE-FALE-CONOSCO
function closeFaleConosco(){
  let container = document.querySelector('.fale-conosco');
  container.classList.remove('active');
  document.body.classList.remove('overflow');
}

// SHOW MENU-MOBILE

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', showMenu);
wrapperMenu.addEventListener('touchstart', showMenu);

function showMenu(e) {
  if (e.type === 'touchstart') {
    e.preventDefault();
  }
  wrapperMenu.classList.toggle('open');
  let menuMobile = document.querySelector('.menu-mobile');
  menuMobile.classList.toggle('active');
  document.body.classList.toggle('overflow');
}

function closeMenuMobile(){
  let menuMobile = document.querySelector('.menu-mobile');
  menuMobile.classList.remove('active');
  wrapperMenu.classList.remove('open');
  document.body.classList.remove('overflow');
}

// SHOW LOGIN

function showLogin() {
  let loginContainer = document.querySelector('.login-user');
  loginContainer.classList.toggle('active');
  document.body.classList.toggle('overflow');
}

// CLOSE LOGIN

var loginContainer = document.getElementById('login');

function closeLogin() {
  loginContainer.classList.remove('active');
  document.body.classList.remove('overflow');
}

// VALIDACAO LOGIN
function validacao() {
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');

  check(email);
  check(senha);
}

function check(input) {
  if(!input.checkValidity()) {
    let alert = document.querySelector('.alert-login');
    alert.classList.add('active');
    input.classList.add('invalido');
  }

  return;
}

function closeAlert() {
  let alert = document.querySelector('.alert-login');
  alert.classList.remove('active');
}

// VER SENHA
var eye = document.getElementById('eye');
function showEye(){
  eye.style.display = 'block';
  document.querySelector('.fa-lock').style.display = 'none';
}

function verSenha(){
  let senha = document.getElementById('senha');
  eye.classList.toggle('fa-eye-slash')

  if(senha.type === 'password'){
    senha.type = 'text';
  } else{
    senha.type = 'password';
  }
}

// CLOSE COOKIES
function closeCookies(){
  let cookies = document.querySelector('.cookies');
  cookies.style.display = 'none';
}

// CLOSE ALERT PROMO
function closeAlertPromo(){
  let alertP = document.getElementById('alerta-promo');
  alertP.style.display = 'none';
}