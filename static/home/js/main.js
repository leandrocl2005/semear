/* function to copy contents */
function click_to_copy(text, message) {
  navigator.clipboard.writeText(text);
  alert(message);
}

$('#conta-sem-dv-copyble').on('click', function() {
  click_to_copy('8796519','Conta sem dv copiada para área de transferência.')
})

$('#cnpj-copyble').on('click', function() {
  click_to_copy('47156016000151','CNPJ copiado para área de transferência!')
})

$('#pix-copyble').on('click', function (){
  click_to_copy('47156016000151','CNPJ copiado para área de transferência!')
})

/* function to alert feature in development */
function development_alert() {
  alert("Essa funcionalidade está em desenvolvimento. Em breve essa novidade estará disponível!")
}

$(".alert-dev").on('click', development_alert);

/* Script to protect against ddos attack (prevent F5 after submit) */
if (window.history.replaceState) {
  window.history.replaceState(null,null,window.location.href)
}

/* Add on scroll event on page */
window.addEventListener('scroll', onScroll)
onScroll()

$('#toast-close-button').on('click', function() {
  $('#toast-message').fadeOut(500);
})

window.addEventListener('load', (event) => {
  $('#toast').fadeOut(4000);
})

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  /*activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(sobre)
  activateMenuAtCurrentSection(governanca)
  activateMenuAtCurrentSection(contact)*/
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function changeMenuColor(color) {
  const menuLines = [
    document.querySelector('#menu-line-1'),
    document.querySelector('#menu-line-2'),
    document.querySelector('#menu-line-3'),
  ]
  for (var i = 0; i < menuLines.length; i++) {
    menuLines[i].style.stroke = color;
  }
}

function changeLogoIconColor(color) {
  const logoIcon = document.querySelector('#logo-icon')
  logoIcon.style.fill = color

}

function changeSemearLogoColor(color) {
  const semearLetters = [
    document.querySelector('#logo-semear-s'),
    document.querySelector('#logo-semear-e1'),
    document.querySelector('#logo-semear-m'),
    document.querySelector('#logo-semear-e2'),
    document.querySelector('#logo-semear-a'),
    document.querySelector('#logo-semear-r'),
  ]
  for (var i = 0; i < semearLetters.length; i++) {
    semearLetters[i].style.fill = color
  }
}

function showNavOnScroll() {
  const navbar = document.querySelector('#nav-bar')

  if (scrollY > 0) {
    navbar.classList.add('scroll')
    changeMenuColor("#A6D9A1");
    changeLogoIconColor("#A6D9A1");
    changeSemearLogoColor("white")

  } else {
    navbar.classList.remove('scroll')
    changeMenuColor("#008542");
    changeLogoIconColor("#008542");
    changeSemearLogoColor("#15343B")
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  changeMenuColor("#A6D9A1")
  changeLogoIconColor("#A6D9A1")
  changeSemearLogoColor("white")
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  if (scrollY > 550) {
    changeMenuColor("#A6D9A1")
    changeLogoIconColor("#A6D9A1")
    changeSemearLogoColor("white")
  } else {
    changeMenuColor("#008542")
    changeLogoIconColor("#008542")
    changeSemearLogoColor("#15343B")
  }

}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #sobre,
  #sobre header,
  #sobre .card
  #governanca, 
  #governanca header, 
  #governanca .content`)


/* close responsive menu */
$('.a-close-menu').on('click', closeMenu);
/* open responsive menu */
$('.btn-open-menu').on('click', openMenu);