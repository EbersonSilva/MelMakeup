//DOM Document Object Model
//Abre e fecha o menu quando clicar no icone: HAmburguer e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// Função ao clicar no botão do menu.
// Ao clicar no botão menu, a classe do nav recebe a classe Show, fazendo com que chame o menu suspenso, ao clicar no X a função retira a classe Show, e o menu suspenso sai.
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Quando clicar no item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // scroll menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Slide Depoimentos Swiper = Slide de depoimentos com paginação*//
const swiper = new Swiper('.swiper', {
  slidesPerView: 1, //Mostra somente 1 slide
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, // Muda os slide com o scroll do mouse
  keyboard: true, // Muda os slide com  as setas do teclado
  breakpoints: {
    767: {
      slidesPerView: 2, //mostra dois slides
      setWrapperSize: true //para mostrar sempre dois slides
    }
  }
})

// Scrollreveal =  Animação ao descer e subir a pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top ')

function backToTop() {
  if (window.scrollY >= 1000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme a seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop //topo da seção
    const sectionHeight = section.offsetHeight //altura da seção
    const sectionId = section.getAttribute('id') //id da seção

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
