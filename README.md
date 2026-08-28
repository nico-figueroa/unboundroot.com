<p align="center">
  <img src="https://raw.githubusercontent.com/nomadant/Unbound-Root/main/images/unboundroot_logo.webp" alt="Unbound Root banner" width="1200" />
</p>

# Unbound Root

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/ES%20Modules-000000?style=for-the-badge&logo=javascript&logoColor=white" alt="ES Modules" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white" alt="Mocha" />
  <img src="https://img.shields.io/badge/JSDOM-005571?style=for-the-badge&logo=javascript&logoColor=white" alt="JSDOM" />
  <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" alt="Selenium" />
  <img src="https://img.shields.io/badge/FormSubmit-FF6B6B?style=for-the-badge" alt="FormSubmit" />
</p>

<p align="center">
  <strong>Digital safety education for families, parents, and everyday internet users.</strong>
</p>

A static, multilingual educational website focused on digital safety, cybersecurity awareness, and family-focused online protection. The site helps visitors understand key issues such as parental controls, phishing prevention, online predators, digital hygiene, malware protection, and healthy family technology habits.

The project is published under the custom domain: https://unboundroot.com

## Hero section

<p align="center">
  <a href="https://unboundroot.com" target="_blank" rel="noopener noreferrer">
    <img src="https://raw.githubusercontent.com/nomadant/Unbound-Root/main/images/unboundroot_logo.webp" alt="Unbound Root logo" width="260" />
  </a>
</p>

<p align="center">
  <b>Cyberspace Education and Awareness</b><br>
  Practical guidance to help families stay safer online.
</p>

---

The project is published under the custom domain: https://unboundroot.com

## Overview

Unbound Root is a modern informational site designed to provide short educational resources, downloadable guides, and personalized recommendations for families and individuals seeking safer online habits. The experience blends accessible content, bilingual support, ethical digital education, and clean front-end engineering.

## Latest features

- Bilingual interface with English and Spanish language switching
- Responsive layout for desktop and mobile browsing
- Home page with featured educational content and CTA links
- Service catalog with topic cards and resource previews
- Embedded educational video content for learning modules
- Downloadable sample PDF checklist for phishing and social engineering safety
- Personalized assessment form for tailored recommendations
- Contact form connected to FormSubmit for message submission
- Privacy Policy and Terms of Service pages
- Legal/compliance-focused page structure and standard security headers
- Accessibility-aware navigation and semantic HTML structure
- Test suite covering unit and end-to-end browser behavior

## Technology stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES modules)
- Custom DOM-based client-side interactivity
- LocalStorage-backed language preference handling

### Site features and integrations
- FormSubmit for form delivery
- Embedded YouTube lessons
- Downloadable assets such as PDFs and preview images
- Custom branding and logo assets in the `images/` and `assets/` folders

### Testing
- Mocha
- JSDOM
- Selenium WebDriver

### Hosting and deployment
- GitHub Pages
- Custom domain: `unboundroot.com`
- Static site hosting with no framework build step required

## Project structure

```text
Unbound Root/
├── index.html
├── about.html
├── services.html
├── contact.html
├── privacy_policy.html
├── privacy_policy_es.html
├── terms_of_service.html
├── terms_of_service_es.html
├── styles.css
├── package.json
├── README.md
├── assets/
│   ├── Phishing_Safety_Checklist.pdf
│   └── Phishing_Safety_Checklist_preview.png
├── images/
│   ├── unboundroot_logo.webp
│   ├── ur_logo_favicon.png
│   ├── parental-controls.jfif
│   ├── topics-covered.webp
│   ├── personalized-assessment.webp
│   └── ...
├── js/
│   ├── main.js
│   ├── cards.js
│   ├── forms.js
│   └── i18n.js
├── test/
│   ├── setup.js
│   ├── unit/
│   └── e2e/
└── performance/
```

## Main JavaScript modules

- `js/main.js` — startup logic that initializes the site features on load
- `js/cards.js` — interactive card behavior for service/topic content
- `js/forms.js` — contact form feedback and submission handling
- `js/i18n.js` — English/Spanish translation logic and language switching

## Security and compliance notes

The site includes:

- Content Security Policy headers
- Strict Transport Security settings
- No-Sniff header configuration
- Privacy and terms documentation
- Clear contact and data handling communication

## Local development

```bash
npm install
npm test
```

## License and usage

© 2026 Unbound Root. All rights reserved.

This project is for business, educational, and informational use related to the Unbound Root brand and site. Reproduction, redistribution, or reuse of the branding, design, or content without permission is not allowed.
