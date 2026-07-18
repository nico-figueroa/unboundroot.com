// i18n.js — handles language switching for English and Costa Rican Spanish
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'nav.languageSwitcher': 'Language switcher',
    'hero.title': 'Family Cybersecurity Education',
    'hero.subtitle': 'Short lessons, downloadable guides, and tailored assessments to keep your family safer online.',
    'hero.cta': 'Request a personalized assessment',
    'about.title': 'Our vision',
    'about.copy': 'We combine the ideals of freedom of thought with strong senses of identity and integrity in every service offering.',
    'about.text': 'We help families navigate the digital world with confidence. Our mission is to provide practical, research-backed education and resources so parents can protect and empower their children online.',
    'services.intro.title': 'Family Cybersecurity Education',
    'services.intro.text': 'We focus exclusively on helping families stay safe online through short videos, downloadable guides, and personalized assessments with clear recommendations.',
    'services.offerings.title': 'Products & Resources',
    'services.offerings.text': 'Our main offerings are digital: video lessons and downloadable files (guides, checklists, policy templates). Below is a sample lesson and a downloadable guide to illustrate how content will appear.',
    'services.lesson.title': 'Sample lesson: Parental Controls',
    'services.lesson.text': 'Example video to show layout. Replace with your lesson media when available.',
    'services.lesson.button': 'View lesson',
    'services.download.title': 'Download: Phishing Protection Guide',
    'services.download.text': 'A printable checklist for parents and kids.',
    'services.download.button': 'Download sample',
    'services.assessment.title': 'Personalized Assessment & Recommendations',
    'services.assessment.text': 'Get a tailored plan for your family\'s needs. Fill the short assessment and we\'ll provide recommended learning paths and resources.',
    'services.assessment.parent_name': 'Parent name',
    'services.assessment.email': 'Email',
    'services.assessment.children_ages': 'Children (ages)',
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
    'services.assessment.note': 'Note: form is a placeholder. Submissions will be routed to our assessment workflow when enabled.',
    'services.assessment.submit': 'Request assessment',
    'services.topics.title': 'Topics Covered',
    'services.topics.description': 'Below are the core topics we teach — each will have a short lesson video and supporting files.',
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
    'about.team.title': 'Our Team',
    'about.additional': 'Your unique experience and delivering something meaningful is at the core of our purpose.',
    'about.extra': 'We think creatively and act with purpose.',
    'about.naty': 'Nat is a lifelong educator who has a variety of experiences as adaptive function specialist, gentle sleep guide, and childcare which allows her to identify and customize solutions for each individual. Her creativity for art and crafting is unparalleled!',
    'about.nico': 'Nico is passionate about systems thinking in all areas of knowledge. He has a unique blend of skills and experiences in software and hardware engineering, process improvement, and leadership that enables him to quickly approach any system, synthesize information, and provide effective solutions.',
    'creation.title': 'Our Creation Services',
    'creation.subtitle': 'As a result of a very diverse and versatile team, we offer a wide range of services tailored to meet your unique needs.',
    'creation.service.programming': 'Programming',
    'creation.service.process': 'Process Design and Improvement',
    'creation.service.analysis': 'Business and Systems Analysis',
    'creation.service.team': 'Team Building and Coaching Activities',
    'creation.service.software': 'Software Engineering',
    'creation.learnMore': 'Click on a service to know more about it',
    'education.title': 'Our Education Services',
    'education.subtitle': 'We can teach, mentor, and guide you in developing your skills and knowledge in various domains and to multiple audiences.',
    'education.service.cybersecurity': 'Cybersecurity for families',
    'education.service.sleep': 'Gentle Sleep Guide',
    'education.service.literacy': 'Computer literacy',
    'education.service.mentorship': 'Mentorship',
    'education.service.business': 'Business and Systems Analysis',
    'education.service.process': 'Process Improvement',
    'education.learnMore': 'Click on a service to know more about it',
    'footer.copyright': '© 2026 Unbound Root. All rights reserved.',
    'footer.built': 'Designed and built with ❤️ by the Unbound Root team.',
    'footer.follow': 'Follow us on social media!',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'nav.languageSwitcher': 'Selector de idioma',
    'hero.title': 'Educación en ciberseguridad familiar',
    'hero.subtitle': 'Lecciones cortas, guías descargables y evaluaciones personalizadas para mantener a tu familia más segura en línea.',
    'hero.cta': 'Solicitar una evaluación personalizada',
    'about.title': 'Nuestra visión',
    'about.text': 'Ayudamos a las familias a navegar el mundo digital con confianza. Nuestra misión es brindar educación y recursos prácticos basados en evidencia para que los padres puedan proteger y empoderar a sus hijos en línea.',
    'services.intro.title': 'Educación en ciberseguridad familiar',
    'services.intro.text': 'Nos centramos exclusivamente en ayudar a las familias a mantenerse seguras en línea mediante videos cortos, guías descargables y evaluaciones personalizadas con recomendaciones claras.',
    'services.offerings.title': 'Productos y recursos',
    'services.offerings.text': 'Nuestras principales ofertas son digitales: lecciones en video y archivos descargables (guías, listas de verificación, plantillas de políticas). A continuación hay una lección de ejemplo y una guía descargable para ilustrar cómo se verá el contenido.',
    'services.lesson.title': 'Lección de ejemplo: Controles parentales',
    'services.lesson.text': 'Video de ejemplo para mostrar el diseño. Reemplázalo con tu contenido de lección cuando esté disponible.',
    'services.download.title': 'Descargar: Guía de protección contra phishing',
    'services.download.text': 'Una lista imprimible para padres y niños.',
    'services.download.button': 'Descargar muestra',
    'services.assessment.title': 'Evaluación y recomendaciones personalizadas',
    'services.assessment.text': 'Obtén un plan personalizado para las necesidades de tu familia. Completa la breve evaluación y te proporcionaremos rutas de aprendizaje recomendadas y recursos.',
    'services.assessment.parent_name': 'Nombre del padre o madre',
    'services.assessment.email': 'Correo electrónico',
    'services.assessment.children_ages': 'Niños (edades)',
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
    'services.topics.description': 'A continuación están los temas principales que enseñamos: cada uno contará con un video corto y archivos de apoyo.',
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
    'about.naty': 'Nat es una educadora de toda la vida con experiencia como especialista en funciones adaptativas, guía de sueño suave y cuidado infantil, lo que le permite identificar y personalizar soluciones para cada persona. ¡Su creatividad para el arte y la artesanía es inigualable!',
    'about.nico': 'Nico siente pasión por el pensamiento sistemático en todas las áreas del conocimiento. Tiene una combinación única de habilidades y experiencia en software y hardware, mejora de procesos y liderazgo que le permite abordar rápidamente cualquier sistema, sintetizar información y brindar soluciones efectivas.',
    'creation.title': 'Nuestros servicios de creación',
    'creation.subtitle': 'Como resultado de un equipo muy diverso y versátil, ofrecemos una amplia gama de servicios adaptados a tus necesidades únicas.',
    'creation.service.programming': 'Programación',
    'creation.service.process': 'Diseño y mejora de procesos',
    'creation.service.analysis': 'Análisis de negocios y sistemas',
    'creation.service.team': 'Actividades de trabajo en equipo y coaching',
    'creation.service.software': 'Ingeniería de software',
    'creation.learnMore': 'Haz clic en un servicio para saber más sobre él',
    'education.title': 'Nuestros servicios educativos',
    'education.subtitle': 'Podemos enseñar, orientar y guiarte en el desarrollo de tus habilidades y conocimientos en diversos dominios y para múltiples audiencias.',
    'education.service.cybersecurity': 'Ciberseguridad para familias',
    'education.service.sleep': 'Guía de sueño suave',
    'education.service.literacy': 'Alfabetización digital',
    'education.service.mentorship': 'Mentoría',
    'education.service.business': 'Análisis de negocios y sistemas',
    'education.service.process': 'Mejora de procesos',
    'education.learnMore': 'Haz clic en un servicio para saber más sobre él',
    'footer.copyright': '© 2026 Unbound Root. Todos los derechos reservados.',
    'footer.built': 'Diseñado y construido con ❤️ por el equipo de Unbound Root.',
    'footer.follow': '¡Síguenos en redes sociales!',
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
