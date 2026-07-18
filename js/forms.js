// forms.js — handles AJAX submission for contact and assessment forms
export function initContactForms() {
    const contactForms = document.querySelectorAll('.contact-form');

    contactForms.forEach((form) => {
        const formStatus = form.querySelector('.form-status') || document.getElementById('form-status');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
            const originalLabel = submitButton ? (submitButton.value || submitButton.textContent) : 'Submit';
            if (submitButton) {
                if (submitButton.tagName.toLowerCase() === 'input') submitButton.value = 'Sending...';
                else submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }

            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());

            // Provide sensible default subject if not present
            if (!payload._subject) payload._subject = 'New message from Unbound Root website';
            if (!payload._captcha) payload._captcha = 'false';

            try {
                const response = await fetch('https://formsubmit.co/ajax/nitem18@hotmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error('Submission failed');
                }

                if (formStatus) {
                    formStatus.textContent = 'Thank you! Your message was sent.';
                    formStatus.className = 'form-status success';
                }
                form.reset();
            } catch (error) {
                if (formStatus) {
                    formStatus.textContent = 'Sorry, your message could not be sent right now. Please contact us directly at nitem18@hotmail.com.';
                    formStatus.className = 'form-status error';
                }
            } finally {
                if (submitButton) {
                    if (submitButton.tagName.toLowerCase() === 'input') submitButton.value = originalLabel;
                    else submitButton.textContent = originalLabel;
                    submitButton.disabled = false;
                }
            }
        });
    });
}
