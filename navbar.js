// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

// Contact popup toggle
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
contactBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  contactPopup.classList.toggle('hidden');
});
document.addEventListener('click', (e) => {
  if (!contactPopup.contains(e.target) && e.target !== contactBtn) {
    contactPopup.classList.add('hidden');
  }
});

// Mobile menu
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
mobileToggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Footer "Contact Us" opens popup
document.getElementById('footer-contact')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => contactPopup.classList.remove('hidden'), 500);
});

// Mobile contact button
document.getElementById('mobile-contact-btn')?.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => contactPopup.classList.remove('hidden'), 400);
});
