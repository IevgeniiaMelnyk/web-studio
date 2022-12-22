const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__open-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu__close-btn'),
    menu: document.querySelector('.mobile-menu'),
};

refs.openMenuBtn.addEventListener('click', mobimeMenuIsOpen);
refs.closeMenuBtn.addEventListener('click', mobimeMenuIsClose);

function mobimeMenuIsOpen() {
  refs.menu.classList.remove('is-close')
  refs.menu.classList.add('is-open');
}

function mobimeMenuIsClose() {
  refs.menu.classList.remove('is-open');
  setTimeout(() => { refs.menu.classList.add('is-close'); console.log('bvb') }, 500);
}