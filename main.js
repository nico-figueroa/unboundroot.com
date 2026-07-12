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