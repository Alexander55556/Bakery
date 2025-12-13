const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);

// Close menu helper (idempotent)
const closeMenu = () => {
  if (mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('is-scroll-disabled');
  }
};

// Close menu when any link inside the mobile menu is clicked
if (mobileMenu) {
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}