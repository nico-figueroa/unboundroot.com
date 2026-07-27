// i18n.js — handles language switching for English and Costa Rican Spanish
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'nav.languageSwitcher': 'Language switcher',
    'hero.title': 'Unbound Root',
    'hero.subtitle': 'Cyberspace Education and Awareness',
    'hero.detail': 'Short lessons, downloadable guides, and tailored assessments to keep you and your loved ones safer online.',
    'hero.cta': 'Request a personalized assessment',
    'services.intro.title': 'Your journey to a safer online navigation starts now',
    'services.intro.text': 'We want to help you stay safe online through short videos, downloadable guides, and personalized assessments with clear recommendations.',
    'services.offerings.title': 'Products & Resources',
    'services.offerings.text': 'Our main offerings are digital: video lessons and downloadable files (guides, checklists, policy templates). Below are a video and a downloadable guide examples.',
    'services.lesson.title': 'Educational Video: Parental Controls',
    'services.lesson.text': 'This video will help in the identification of tools to protect your loved ones online.',
    'services.lesson.button': 'View lesson',
    'services.download.title': 'Download: Phishing Protection Guide',
    'services.download.text': 'A printable checklist of tips to prevent Phishing and other common social engineering attacks.',
    'services.download.button': 'Download sample',
    'services.assessment.title': 'Personalized Assessment & Recommendations',
    'services.assessment.text': 'Get a tailored plan for your needs. Fill the short assessment and we\'ll provide recommended learning paths and resources.',
    'services.assessment.parent_name': 'Name',
    'services.assessment.email': 'Email',
    'services.assessment.concern': 'Areas of concern',
    'services.assessment.concern.ParentalControls': 'Parental Controls',
    'services.assessment.concern.PhishingProtection': 'Phishing Protection',
    'services.assessment.concern.OnlinePredators': 'Online Predators',
    'services.assessment.concern.DigitalHygiene': 'Digital Hygiene',
    'services.assessment.concern.FamilyDynamics': 'Family Dynamics',
    'services.assessment.concern.ComputerLiteracy': 'Computer Literacy',
    'services.assessment.concern.MalwareProtection': 'Malware Protection',
    'services.assessment.details': 'Additional details',
    'services.assessment.details.placeholder': 'Tell us briefly about your situation',
    'services.assessment.submit': 'Request assessment',
    'services.topics.title': 'Topics Covered',
    'services.topics.description': 'Below are the core topics we cover.',
    'contact.title': 'How do we connect?',
    'contact.intro': 'Once you have browsed our services, we\'d love to hear from you!',
    'contact.where.title': 'Here\'s where you can find us:',
    'contact.phone': 'Phone: +1 (916) 270-7964',
    'contact.address': 'Address: 6408 Seaglass Ave SE',
    'contact.city': 'Port Orchard, WA, 98367',
    'contact.email': 'Email Us: nitem18@hotmail.com',
    'contact.form.title': 'Or tell us about your needs:',
    'contact.label.name': 'Name:',
    'contact.label.email': 'Email:',
    'contact.label.message': 'Message:',
    'contact.message.placeholder': 'Hello Unbound Root, I want to ask about the following services ...',
    'contact.submit': 'Submit',
    'contact.thankyou': 'Thank you! Your message was sent.',
    'contact.error': 'Sorry, your message could not be sent right now. Please contact us directly at nitem18@hotmail.com.',
    'about.title': 'Our vision',
    'about.copy': 'We combine the ideals of freedom of thought with strong senses of identity and integrity in every service offering.',
    'about.text': 'We help everyone navigate the digital world with confidence. Our mission is to provide practical, research-backed education and resources so you and your loved ones can feel protected and empowered online.',
    'about.team.title': 'Our Team',
    'about.additional': 'Your unique experience and delivering something meaningful is at the core of our purpose.',
    'about.extra': 'We think creatively and act with purpose.',
    'about.naty': 'Nat is a lifelong educator who has a variety of experiences as adaptive function specialist, gentle sleep guide, and childcare which allows her to identify and customize solutions for each individual. Her creativity for art and crafting is unparalleled! Her background includes a Licensed degree of Arts in Emotional and Conduct Problems and 25 years of experience educating and nurturing.',
    'about.nico': 'Nico is passionate about systems thinking in all areas of knowledge. He has a unique blend of skills and experiences in software and hardware engineering, process improvement, and leadership that enables him to quickly approach any system, synthesize information, and provide effective solutions. His background includes an Master of Science in Information Management from the University of Washington and 30+ years experience working with software products and systems.',
    'footer.copyright': '© 2026 Unbound Root. All rights reserved.',
    'footer.built': 'Designed and built with ❤️ by the Unbound Root team.',
    'footer.follow': 'Follow us on social media!',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'services.privacy-policy': 'Privacy Policy',
    'services.terms-of-service': 'Terms of Service',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'nav.languageSwitcher': 'Selector de idioma',
    'hero.title': 'Unbound Root',
    'hero.subtitle': 'Educación y concientización sobre el Ciberespacio',
    'hero.detail': 'Lecciones cortas, guías descargables y evaluaciones personalizadas para mantenerlo a usted y a sus seres queridos más seguros en línea.',
    'hero.cta': 'Solicitar una evaluación personalizada',
    'about.title': 'Nuestra visión',
    'about.text': 'Ayudamos a todas las personas a navegar el mundo digital con confianza. Nuestra misión es brindar educación y recursos prácticos basados en evidencia para que usted y sus seres queridos se sientan protegidos y empoderados en línea.',
    'services.intro.title': 'Su navegación segura en linea comienza ahora',
    'services.intro.text': 'Queremos ayudarlo a mantenerse seguro en línea mediante videos cortos, guías descargables y evaluaciones personalizadas con recomendaciones claras.',
    'services.offerings.title': 'Productos y recursos',
    'services.offerings.text': 'Nuestras principales ofertas son digitales: lecciones en video y archivos descargables (guías, listas de verificación, plantillas de políticas). A continuación hay un video y una guía descargable de ejemplo.',
    'services.lesson.title': 'Video Educativo: Controles parentales',
    'services.lesson.text': 'Este video ayudara con la identificacion de herramientas para protejer a sus seres queridos en linea.',
    'services.download.title': 'Descargar: Guía de protección contra phishing',
    'services.download.text': 'Una lista imprimible de consejos para prevenir Phishing y otros ataques comunes de ingenieria social.',
    'services.download.button': 'Descargar muestra',
    'services.assessment.title': 'Evaluación y recomendaciones personalizadas',
    'services.assessment.text': 'Obtenga un plan personalizado para sus necesidades. Complete el formulario y le proporcionaremos rutas de aprendizaje recomendadas y recursos.',
    'services.assessment.parent_name': 'Nombre',
    'services.assessment.email': 'Correo electrónico',
    'services.assessment.concern': 'Áreas de interés',
    'services.assessment.concern.ParentalControls': 'Controles parentales',
    'services.assessment.concern.PhishingProtection': 'Protección contra phishing',
    'services.assessment.concern.OnlinePredators': 'Depredadores en línea',
    'services.assessment.concern.DigitalHygiene': 'Higiene digital',
    'services.assessment.concern.FamilyDynamics': 'Dinámica familiar',
    'services.assessment.concern.ComputerLiteracy': 'Alfabetización digital',
    'services.assessment.concern.MalwareProtection': 'Protección contra malware',
    'services.assessment.details': 'Detalles adicionales',
    'services.assessment.details.placeholder': 'Cuéntanos brevemente sobre tu situación',
    'services.assessment.note': 'Nota: el formulario es un marcador de posición. Las presentaciones se dirigirán a nuestro flujo de evaluación cuando esté habilitado.',
    'services.assessment.submit': 'Solicitar evaluación',
    'services.topics.title': 'Temas cubiertos',
    'services.topics.description': 'A continuación están los temas principales que cubrimos.',
    'contact.title': '¿Cómo nos conectamos?',
    'contact.intro': 'Una vez que hayas visto nuestros servicios, ¡nos encantaría saber de ti!',
    'contact.where.title': 'Aquí puedes encontrarnos:',
    'contact.phone': 'Teléfono: +1 (916) 270-7964',
    'contact.address': 'Dirección: 6408 Seaglass Ave SE',
    'contact.city': 'Port Orchard, WA, 98367',
    'contact.email': 'Envíanos un correo: nitem18@hotmail.com',
    'contact.form.title': 'O cuéntanos sobre tus necesidades:',
    'contact.label.name': 'Nombre:',
    'contact.label.email': 'Correo electrónico:',
    'contact.label.message': 'Mensaje:',
    'contact.message.placeholder': 'Hola Unbound Root, quiero preguntar acerca de los siguientes servicios ...',
    'contact.submit': 'Enviar',
    'contact.thankyou': '¡Gracias! Tu mensaje fue enviado.',
    'contact.error': 'Lo siento, tu mensaje no se pudo enviar en este momento. Por favor contáctanos directamente en nitem18@hotmail.com.',
    'about.team.title': 'Nuestro equipo',
    'about.naty': 'Nat es una educadora de toda la vida con experiencia como especialista en funciones adaptativas, guía de sueño suave y cuidado infantil, lo que le permite identificar y personalizar soluciones para cada persona. ¡Su creatividad para el arte y la artesanía es inigualable! Sus credenciales incluyen una Licenciatura en Artes en Problemas Emocionales y de Conducta, y 25 años de experiencia educando y nutriendo a personas de todas las edades.',
    'about.nico': 'Nico siente pasión por el pensamiento sistemático en todas las áreas del conocimiento. Tiene una combinación única de habilidades y experiencia en software y hardware, mejora de procesos y liderazgo que le permite abordar rápidamente cualquier sistema, sintetizar información y brindar soluciones efectivas. Sus credenciales incluyen una Máster en Gestión de Sistemas de Información de la Universidad de Washington y 30 años de experiencia trabajando con productos y sistemas de software.',
    'footer.copyright': '© 2026 Unbound Root. Todos los derechos reservados.',
    'footer.built': 'Diseñado y construido con ❤️ por el equipo de Unbound Root.',
    'footer.follow': '¡Síguenos en redes sociales!',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'services.privacy-policy': 'Política de Privacidad',
    'services.terms-of-service': 'Términos de Servicio',
  },
};

export function initI18n() {
  const switcher = document.getElementById('language-switcher');
  if (!switcher) return;

  const buttons = switcher.querySelectorAll('[data-lang]');
  const storedLang = window.localStorage.getItem('siteLanguage');
  const initialLang = storedLang || 'en';
  applyLanguage(initialLang);

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const selected = button.getAttribute('data-lang');
      if (selected) applyLanguage(selected);
    });
  });
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  window.localStorage.setItem('siteLanguage', lang);
  document.documentElement.lang = lang === 'es' ? 'es-CR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    if (node.hasAttribute('data-i18n-attr')) return;
    const key = node.getAttribute('data-i18n');
    if (!key) return;
    const value = translate(lang, key);
    if (value !== null) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const value = translate(lang, key);
    if (value !== null) node.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-value]').forEach((node) => {
    const key = node.getAttribute('data-i18n-value');
    if (!key) return;
    const value = translate(lang, key);
    if (value !== null) {
      if (node.tagName.toLowerCase() === 'input') node.value = value;
      else node.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((node) => {
    const key = node.getAttribute('data-i18n-title');
    if (!key) return;
    const value = translate(lang, key);
    if (value !== null) node.setAttribute('title', value);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
    const attr = node.getAttribute('data-i18n-attr');
    const key = node.getAttribute('data-i18n');
    if (!attr || !key) return;
    const value = translate(lang, key);
    if (value !== null) node.setAttribute(attr, value);
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-lang') === lang);
  });
}

function translate(lang, key) {
  const valueRoot = translations[lang];
  if (!valueRoot) return '';
  if (Object.prototype.hasOwnProperty.call(valueRoot, key)) {
    return valueRoot[key];
  }

  const parts = key.split('.');
  let value = valueRoot;
  for (const part of parts) {
    if (value && Object.prototype.hasOwnProperty.call(value, part)) {
      value = value[part];
    } else {
      value = null;
      break;
    }
  }

  if (value === null && lang !== 'en') {
    return translate('en', key);
  }

  return value !== null ? value : '';
}
