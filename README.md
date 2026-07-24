# Unbound Root Website

## Programming languages used:
* HTML
* CSS
* JavaScript

### Code uploaded to a GitHub public repository and published via GitHub Pages using a privately owned domain: unboundroot.com

**Copyright © 2026 Unboundroot.**
**All rights reserved.**
**No part of this website, including the logo, design, or content, may be reproduced or redistributed without permission.**
**Forking is not permitted**

## Frontend JavaScript structure

The site's JavaScript has been split into small ES modules to improve separation of concerns and maintainability. The module entry point is loaded with a `<script type="module">` tag in the pages.

- `js/main.js` — Application entry module. Imports and initializes feature modules on `DOMContentLoaded`.
- `js/cards.js` — Encapsulates interactive behavior for service/topic cards (expanding details, toggles).
- `js/forms.js` — Handles AJAX submission for forms with the class `contact-form` (used by the contact page and the assessment form on the services page).
- `js/i18n.js` - Language switching (English and Spanish presently).

Notes:
- The modules use native ES modules and are supported in modern browsers. Pages that initialize the modules include `index.html`, `services.html`, `contact.html`, `creation_services.html`, and `education_services.html`.
- If you need broader browser compatibility, consider bundling these modules (e.g., with Rollup or webpack) or providing a non-module fallback script.

To review or modify behavior, inspect the files in the `js/` folder and update `js/main.js` to change initialization order.
