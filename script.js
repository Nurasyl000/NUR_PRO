const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const quickForm = document.getElementById('quickForm');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

quickForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Рақмет! Жақын арада сізбен хабарласамыз.';
  quickForm.reset();
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Өтінім қабылданды! Тез арада хабарласамыз.');
  contactForm.reset();
});
