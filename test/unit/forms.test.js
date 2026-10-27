import assert from 'node:assert/strict';
import { initContactForms } from '../../js/forms.js';

describe('contact forms', () => {
  let fetchCalls;

  beforeEach(() => {
    document.body.innerHTML = `
      <form class="contact-form">
        <div class="form-honeypot" aria-hidden="true">
          <label for="website">Leave this field blank</label>
          <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
        </div>
        <input name="name" value="Ada">
        <input type="hidden" name="_subject" value="Test subject">
        <input type="hidden" name="_captcha" value="false">
        <button type="submit">Request assessment</button>
      </form>
      <div id="form-status" class="form-status"></div>`;
    fetchCalls = 0;
    global.fetch = async (_url, options) => {
      fetchCalls += 1;
      assert.equal(options.method, 'POST');
      assert.match(options.body, /Test subject/);
      assert.doesNotMatch(options.body, /website/);
      return { ok: true };
    };
    initContactForms();
  });

  it('submits successfully and restores a button submit control', async () => {
    const form = document.querySelector('form');
    const button = form.querySelector('button');
    form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
    await new Promise((resolve) => setTimeout(resolve, 0));

    assert.equal(button.disabled, false);
    assert.equal(button.textContent, 'Request assessment');
    assert.equal(document.querySelector('#form-status').className, 'form-status success');
    assert.equal(form.querySelector('[name="name"]').value, 'Ada');
    assert.equal(fetchCalls, 1);
  });

  it('blocks submissions when the honeypot is filled', async () => {
    const form = document.querySelector('form');
    form.querySelector('[name="website"]').value = 'https://spam.example';
    form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
    await new Promise((resolve) => setTimeout(resolve, 0));

    assert.equal(fetchCalls, 0);
    assert.equal(document.querySelector('#form-status').className, 'form-status error');
    assert.match(document.querySelector('#form-status').textContent, /leave the website field blank/i);
  });
});
