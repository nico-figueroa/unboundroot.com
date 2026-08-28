import assert from 'node:assert/strict';
import { initContactForms } from '../../js/forms.js';

describe('contact forms', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form class="contact-form">
        <input name="name" value="Ada">
        <input type="hidden" name="_subject" value="Test subject">
        <input type="hidden" name="_captcha" value="false">
        <button type="submit">Request assessment</button>
      </form>
      <div id="form-status" class="form-status"></div>`;
    global.fetch = async (_url, options) => {
      assert.equal(options.method, 'POST');
      assert.match(options.body, /Test subject/);
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
  });
});
