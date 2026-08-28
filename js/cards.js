// cards.js — handles interactive service/topic cards
export function initCards() {
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

            const isSpanish = document.documentElement.lang === 'es-CR';
            const title = (isSpanish ? card.dataset.titleEs : card.dataset.title) || 'Service';
            const description = (isSpanish ? card.dataset.descriptionEs : card.dataset.description) || 'Placeholder description. Replace this with your custom service details.';
            const price = (isSpanish ? card.dataset.priceEs : card.dataset.price) || 'Placeholder price';
            const conditions = (isSpanish ? card.dataset.conditionsEs : card.dataset.conditions) || 'Placeholder conditions';
            const labels = isSpanish
                ? { description: 'Descripción', price: 'Precio', conditions: 'Condiciones' }
                : { description: 'Description', price: 'Price', conditions: 'Conditions' };

            card.innerHTML = `
                <div class="service-details">
                    <h3>${title}</h3>
                    <p><strong>${labels.description}:</strong> ${description}</p>
                    <p><strong>${labels.price}:</strong> ${price}</p>
                    <p><strong>${labels.conditions}:</strong> ${conditions}</p>
                </div>
            `;
            card.dataset.state = 'details';
            card.dataset.originalContent = originalContent;
        });
    });
}
