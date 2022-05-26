const mobileMenu = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.navbar')

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  navbar.classList.toggle('active')
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.setAttribute('aria-label', 'Close menu')
    navbar.setAttribute('aria-expanded', 'true')
  } else {
    mobileMenu.setAttribute('aria-label', 'Open menu')
    navbar.setAttribute('aria-expanded', 'true')
  }
})

navbar.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  navbar.classList.toggle('active')
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.setAttribute('aria-label', 'Close menu')
    navbar.setAttribute('aria-expanded', 'true')
  } else {
    mobileMenu.setAttribute('aria-label', 'Open menu')
    navbar.setAttribute('aria-expanded', 'true')
  }
})
