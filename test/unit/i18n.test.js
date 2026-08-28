import assert from 'node:assert/strict';
import { initI18n } from '../../js/i18n.js';

describe('language switching', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = `
      <div id="language-switcher" data-i18n-attr="aria-label" data-i18n="nav.languageSwitcher">
        <button data-lang="en">EN</button><button data-lang="es">ES</button>
      </div>
      <h1 data-i18n="hero.title"></h1>
      <input data-i18n-placeholder="services.assessment.details.placeholder">
    `;
    document.documentElement.lang = 'en';
  });

  it('initializes English and switches to Costa Rican Spanish', () => {
    initI18n();
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(document.querySelector('[data-lang="en"]').classList.contains('active'), true);

    document.querySelector('[data-lang="es"]').click();
    assert.equal(document.documentElement.lang, 'es-CR');
    assert.equal(localStorage.getItem('siteLanguage'), 'es');
    assert.equal(document.querySelector('h1').textContent, 'Unbound Root');
    assert.equal(document.querySelector('input').placeholder, 'Cuéntanos brevemente sobre tu situación');
    assert.equal(document.querySelector('[data-lang="es"]').classList.contains('active'), true);
  });

  it('falls back to English when stored language is unsupported', () => {
    localStorage.setItem('siteLanguage', 'fr');
    initI18n();
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(localStorage.getItem('siteLanguage'), 'en');
  });
});
