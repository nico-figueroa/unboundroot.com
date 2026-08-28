import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Builder, By, until } from 'selenium-webdriver';
import edge from 'selenium-webdriver/edge.js';
import { startSiteServer } from './server.js';

const defaultEdgeDriverPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'msedgedriver.exe');

describe('Unbound Root site', function () {
  this.timeout(30000);
  let browser;
  let site;

  before(async function () {
    site = await startSiteServer();
    try {
      const driverPath = process.env.EDGE_DRIVER_PATH || defaultEdgeDriverPath;
      if (!fs.existsSync(driverPath)) {
        throw new Error(`Edge driver not found at ${driverPath}`);
      }
      const options = new edge.Options()
        .addArguments('--no-sandbox', '--disable-dev-shm-usage', '--headless=new');
      const service = new edge.ServiceBuilder(driverPath);
      browser = await new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeService(service)
        .setEdgeOptions(options)
        .build();
    } catch (error) {
      site.server.close();
      this.skip();
    }
  });

  after(async () => {
    if (browser) await browser.quit();
    if (site?.server.listening) site.server.close();
  });

  it('loads the home page and navigates to services', async () => {
    await browser.get(`${site.url}/index.html`);
    assert.equal(await browser.getTitle(), 'Unbound Root');
    const assessmentLink = await browser.findElement(By.css('a[href="./services.html#assessment"]'));
    await browser.executeScript('arguments[0].click()', assessmentLink);
    await browser.wait(until.urlContains('/services.html'), 5000);
    assert.match(await browser.getCurrentUrl(), /services\.html/);
  });

  it('switches the interface to Spanish and persists the language', async () => {
    await browser.get(`${site.url}/index.html`);
    await browser.findElement(By.css('#language-switcher button[data-lang="es"]')).click();
    assert.equal(await browser.findElement(By.css('html')).getAttribute('lang'), 'es-CR');
    assert.equal(await browser.executeScript('return localStorage.getItem("siteLanguage")'), 'es');
  });

  it('expands a topic card and keeps the assessment form stable', async () => {
    await browser.get(`${site.url}/services.html#topics`);
    const card = browser.findElement(By.css('.service-card[data-title="Parental Controls"]'));
    await browser.executeScript('arguments[0].scrollIntoView({block: "center"})', card);
    const cardLink = await card.findElement(By.css('.card-link'));
    await browser.executeScript('arguments[0].click()', cardLink);
    await browser.wait(until.elementLocated(By.css('.service-card[data-title="Parental Controls"] .service-details')), 5000);
    assert.equal(await card.getAttribute('data-state'), 'details');

    const form = await browser.findElement(By.css('form[aria-label="Family cybersecurity assessment"]'));
    assert.equal(await form.findElement(By.name('parent_name')).isDisplayed(), true);
    assert.equal(await form.findElement(By.css('button[type="submit"]')).isEnabled(), true);
  });
});
