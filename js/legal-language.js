const currentPage = window.location.pathname.split('/').pop();
const isSpanish = currentPage.endsWith('_es.html');
const basePage = currentPage.replace('_es.html', '.html');
const spanishPage = basePage.replace('.html', '_es.html');

document.querySelectorAll('[data-legal-lang]').forEach((button) => {
  const language = button.getAttribute('data-legal-lang');
  button.classList.toggle('active', (language === 'es') === isSpanish);
  button.addEventListener('click', () => {
    window.location.href = language === 'es' ? spanishPage : basePage;
  });
});
