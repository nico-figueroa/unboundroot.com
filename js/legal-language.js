const currentPage = window.location.pathname.split('/').pop();
const isSpanish = currentPage.endsWith('_es.html');
const basePage = currentPage.replace('_es.html', '.html');
const spanishPage = basePage.replace('.html', '_es.html');

const languagePicker = document.getElementById('language-switcher');
const trigger = languagePicker?.querySelector('[data-language-trigger]');
const menu = languagePicker?.querySelector('.language-menu');

document.querySelectorAll('button[data-legal-lang]').forEach((button) => {
  const language = button.getAttribute('data-legal-lang');
  button.classList.toggle('active', (language === 'es') === isSpanish);
  button.setAttribute('aria-pressed', String((language === 'es') === isSpanish));
  button.addEventListener('click', () => {
    window.location.href = language === 'es' ? spanishPage : basePage;
  });
});

const closeMenu = () => {
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
};

trigger?.addEventListener('click', () => {
  if (!menu) return;
  menu.hidden = !menu.hidden;
  trigger.setAttribute('aria-expanded', String(!menu.hidden));
});

document.addEventListener('click', (event) => {
  if (!languagePicker?.contains(event.target)) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menu?.hidden) {
    closeMenu();
    trigger?.focus();
  }
});
