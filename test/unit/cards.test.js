import assert from 'node:assert/strict';
import { initCards } from '../../js/cards.js';

describe('service cards', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul>
        <li class="service-card" data-title="Parental Controls" data-title-es="Controles parentales" data-description="Device settings" data-description-es="Configuración del dispositivo" data-price="Per assessment" data-price-es="Por evaluación" data-conditions="All ages" data-conditions-es="Para todas las edades">
          <a class="card-link" href="#"><span>Parental Controls</span></a>
        </li>
        <li class="service-card" data-title="Phishing" data-description="Scam awareness" data-price="Per assessment" data-conditions="All ages">
          <a class="card-link" href="#"><span>Phishing</span></a>
        </li>
      </ul>`;
    initCards();
  });

  it('expands a card with its data and collapses another card', () => {
    const cards = document.querySelectorAll('.service-card');

    cards[0].querySelector('.card-link').dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
    assert.equal(cards[0].dataset.state, 'details');
    assert.match(cards[0].textContent, /Device settings/);

    cards[1].querySelector('.card-link').dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
    assert.equal(cards[0].dataset.state, 'image');
    assert.equal(cards[1].dataset.state, 'details');
  });

  it('collapses an expanded card when it is clicked again', () => {
    const card = document.querySelector('.service-card');
    const link = card.querySelector('.card-link');

    link.click();
    card.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
    assert.equal(card.dataset.state, 'image');
    assert.match(card.textContent, /Parental Controls/);
  });

  it('renders Latin American Spanish details when Spanish is active', () => {
    document.documentElement.lang = 'es-CR';
    const card = document.querySelector('.service-card');

    card.querySelector('.card-link').click();

    assert.match(card.textContent, /Controles parentales/);
    assert.match(card.textContent, /Descripción/);
    assert.match(card.textContent, /Configuración del dispositivo/);
    assert.match(card.textContent, /Por evaluación/);
  });
});
