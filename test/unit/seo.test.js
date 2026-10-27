import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const pages = [
  'index.html',
  'about.html',
  'contact.html',
  'services.html',
  'privacy_policy.html',
  'privacy_policy_es.html',
  'terms_of_service.html',
  'terms_of_service_es.html'
];

const readPage = (name) => fs.readFileSync(path.join(projectRoot, name), 'utf8');

describe('SEO metadata', () => {
  it('uses the root URL as the homepage canonical', () => {
    const home = readPage('index.html');
    assert.match(home, /<link rel="canonical" href="https:\/\/unboundroot\.com\/">/);
    assert.match(home, /<a href="\/" data-i18n="nav\.home">Home<\/a>/);
  });

  it('has a descriptive title and unique descriptions on all pages', () => {
    const descriptions = [];

    for (const page of pages) {
      const html = readPage(page);
      const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
      const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
      const expectedCanonical = page === 'index.html'
        ? 'https://unboundroot.com/'
        : `https://unboundroot.com/${page}`;

      assert.ok(title, `${page} should have a title`);
      assert.ok(description, `${page} should have a description`);
      assert.equal(canonical, expectedCanonical, `${page} should declare its own canonical URL`);
      assert.match(html, /<a href="\/"(?: [^>]*)?>(?:Home|Inicio)<\/a>/, `${page} should link home to the canonical root`);
      descriptions.push(description);
    }

    const aboutTitle = readPage('about.html').match(/<title>(.*?)<\/title>/i)?.[1] ?? '';
    assert.ok(aboutTitle.length >= 50 && aboutTitle.length <= 60);
    assert.equal(new Set(descriptions).size, pages.length);
  });

  it('declares reciprocal language alternatives for legal pages', () => {
    for (const [english, spanish] of [
      ['privacy_policy.html', 'privacy_policy_es.html'],
      ['terms_of_service.html', 'terms_of_service_es.html']
    ]) {
      for (const page of [english, spanish]) {
        const html = readPage(page);
        assert.ok(html.includes(`hreflang="en" href="https://unboundroot.com/${english}"`));
        assert.ok(html.includes(`hreflang="es-CR" href="https://unboundroot.com/${spanish}"`));
      }
    }
  });
});
