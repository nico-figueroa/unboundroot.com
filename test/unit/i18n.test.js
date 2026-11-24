import assert from 'node:assert/strict';
import { initI18n } from '../../js/i18n.js';

describe('language switching', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = `
      <div id="language-switcher" data-i18n-attr="aria-label" data-i18n="nav.languageSwitcher">
        <button type="button" data-language-trigger><span data-current-flag></span><span data-current-language>English</span></button>
        <div class="language-menu" hidden>
          <button type="button" data-lang="en">English</button>
          <button type="button" data-lang="es">Español</button>
        </div>
      </div>
      <h1 data-i18n="hero.title"></h1>
      <input data-i18n-placeholder="services.assessment.details.placeholder">
    `;
    document.documentElement.lang = 'en';
  });

  it('initializes English and switches to Costa Rican Spanish', () => {
    initI18n();
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(document.querySelector('[data-current-language]').textContent, 'English');

    document.querySelector('[data-lang="es"]').click();
    assert.equal(document.documentElement.lang, 'es-CR');
    assert.equal(localStorage.getItem('siteLanguage'), 'es');
    assert.equal(document.querySelector('h1').textContent, 'Tome cada decisión digital con más confianza.');
    assert.equal(document.querySelector('input').placeholder, 'Comparta una breve descripción de la situación…');
    assert.equal(document.querySelector('[data-current-language]').textContent, 'Español');
  });

  it('falls back to English when stored language is unsupported', () => {
    localStorage.setItem('siteLanguage', 'fr');
    initI18n();
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(localStorage.getItem('siteLanguage'), 'en');
  });
});
