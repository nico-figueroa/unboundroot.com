document.querySelectorAll('.service-card').forEach((card) => {
    const originalContent = card.innerHTML;
    card.dataset.state = 'image';

    card.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const cards = document.querySelectorAll('.service-card');

        cards.forEach((otherCard) => {
            if (otherCard !== card && otherCard.dataset.state === 'details') {
                otherCard.innerHTML = otherCard.dataset.originalContent || otherCard.innerHTML;
                otherCard.dataset.state = 'image';
            }
        });

        if (card.dataset.state === 'details') {
            card.innerHTML = originalContent;
            card.dataset.state = 'image';
            return;
        }

        const title = card.dataset.title || 'Service';
        const description = card.dataset.description || 'Placeholder description. Replace this with your custom service details.';
        const price = card.dataset.price || 'Placeholder price';
        const conditions = card.dataset.conditions || 'Placeholder conditions';

        card.innerHTML = `
            <div class="service-details">
                <h3>${title}</h3>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Conditions:</strong> ${conditions}</p>
            </div>
        `;
        card.dataset.state = 'details';
        card.dataset.originalContent = originalContent;
    });
});

const contactForm = document.querySelector('.contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector('input[type="submit"]');
        const originalLabel = submitButton ? submitButton.value : 'Submit';
        if (submitButton) {
            submitButton.value = 'Sending...';
            submitButton.disabled = true;
        }

        const formData = new FormData(contactForm);
        const payload = Object.fromEntries(formData.entries());
        payload._subject = 'New message from Unbound Root website';
        payload._captcha = 'false';

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

            formStatus.textContent = 'Thank you! Your message was sent.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } catch (error) {
            formStatus.textContent = 'Sorry, your message could not be sent right now. Please contact us directly at nitem18@hotmail.com.';
            formStatus.className = 'form-status error';
        } finally {
            if (submitButton) {
                submitButton.value = originalLabel;
                submitButton.disabled = false;
            }
        }
    });
}