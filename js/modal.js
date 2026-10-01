const modalBackdrop = document.querySelector('#modal');
const openModalButton = document.querySelector('.hero-button');
const closeModalButton = document.querySelector('.modal-close');
const menu = document.querySelector('#mobile-menu');
const openMenuButton = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('.mobile-menu-close');

function toggleMenu(isOpen) {
  menu.classList.toggle('is-open', isOpen);
  menu.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function openModal() {
  modalBackdrop.classList.add('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('#user-name').focus();
}

function closeModal() {
  modalBackdrop.classList.remove('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  openModalButton.focus();
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
    closeModal();
  }

  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    toggleMenu(false);
  }
});

openMenuButton.addEventListener('click', () => toggleMenu(true));
closeMenuButton.addEventListener('click', () => toggleMenu(false));
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});
