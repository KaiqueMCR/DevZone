const mobileMenu = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.navbar')

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  navbar.classList.toggle('active')
})

navbar.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  navbar.classList.toggle('active')
})
