import { initCards } from './cards.js';
import { initContactForms } from './forms.js';
import { initI18n } from './i18n.js';

// Initialize features once DOM is ready
function initApp() {
    initCards();
    initContactForms();
    initI18n();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
