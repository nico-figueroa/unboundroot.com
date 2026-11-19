const currentPage = window.location.pathname.split('/').pop();
const isSpanish = currentPage.endsWith('_es.html');
const basePage = currentPage.replace('_es.html', '.html');
const spanishPage = basePage.replace('.html', '_es.html');

document.querySelectorAll('[data-legal-lang]').forEach((button) => {
  const language = button.getAttribute('data-legal-lang');
  const isActive = (language === 'es') === isSpanish;
  button.classList.toggle('active', isActive);
  button.hidden = !isActive;
  button.setAttribute('aria-label', isSpanish ? 'Cambiar a inglés' : 'Switch to Spanish');
  button.addEventListener('click', () => {
    window.location.href = isSpanish ? basePage : spanishPage;
  });
});
