// Multi-language system - Complete Page Translation
let currentLanguage = localStorage.getItem('language') || 'fr';
let translations = {};

// Load translations on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    initLanguageSystem();
    applyLanguage(currentLanguage);
});

// Load JSON translations
async function loadTranslations() {
    try {
        const response = await fetch('js/i18n.json');
        translations = await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Initialize language button
function initLanguageSystem() {
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
        updateLanguageBtnText();
    }
}

// Toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    updateLanguageBtnText();
}

// Update button text
function updateLanguageBtnText() {
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const span = langBtn.querySelector('span') || document.createElement('span');
        span.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
        
        if (!langBtn.querySelector('span')) {
            langBtn.innerHTML = '';
            langBtn.appendChild(span);
        }
        
        const icon = langBtn.querySelector('i') || document.createElement('i');
        icon.className = 'fas fa-globe';
        
        if (!langBtn.querySelector('i')) {
            langBtn.appendChild(icon);
        }
    }
}

// Apply language to entire page
function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Generic approach: Update all elements with data-en and data-fr attributes
    document.querySelectorAll('[data-en][data-fr]').forEach(element => {
        element.textContent = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-fr');
    });

    // Update nav links
    document.querySelectorAll('nav a').forEach((link, index) => {
        const keys = ['home', 'portfolio', 'about', 'projects', 'contact'];
        if (keys[index]) {
            link.textContent = t.nav[keys[index]];
        }
    });

    // Update hero section (index page)
    const commandSpan = document.querySelector('.terminal-command');
    if (commandSpan) commandSpan.textContent = t.hero.command;

    const typewriterH3 = document.querySelector('.typewriter h3');
    if (typewriterH3) typewriterH3.textContent = t.hero.completion;

    const description = document.querySelector('.content-center .description');
    if (description) description.textContent = t.hero.description;

    // Update dashboard
    const dashTitle = document.querySelector('.dash');
    if (dashTitle) dashTitle.textContent = t.dashboard.title;

    const quickCards = document.querySelectorAll('.quick-card');
    if (quickCards.length > 0) {
        quickCards[0].querySelector('h3').textContent = t.dashboard.about_title;
        quickCards[0].querySelector('p').textContent = t.dashboard.about_desc;
        quickCards[0].querySelector('.btn-link').textContent = t.dashboard.about_btn;
    }
    if (quickCards.length > 1) {
        quickCards[1].querySelector('h3').textContent = t.dashboard.projects_title;
        quickCards[1].querySelector('p').textContent = t.dashboard.projects_desc;
        quickCards[1].querySelector('.btn-link').textContent = t.dashboard.projects_btn;
    }
    if (quickCards.length > 2) {
        quickCards[2].querySelector('h3').textContent = t.dashboard.contact_title;
        quickCards[2].querySelector('p').textContent = t.dashboard.contact_desc;
        quickCards[2].querySelector('.btn-link').textContent = t.dashboard.contact_btn;
    }

    // Update highlights section
    const highlightsH2 = document.querySelector('.highlights h2');
    if (highlightsH2) highlightsH2.textContent = t.highlights.title;

    const highlightItems = document.querySelectorAll('.highlight-item');
    if (highlightItems.length > 0) {
        highlightItems[0].querySelector('h3').textContent = t.highlights.dev_title;
        highlightItems[0].querySelector('p').textContent = t.highlights.dev_desc;
    }
    if (highlightItems.length > 1) {
        highlightItems[1].querySelector('h3').textContent = t.highlights.infra_title;
        highlightItems[1].querySelector('p').textContent = t.highlights.infra_desc;
    }
    if (highlightItems.length > 2) {
        highlightItems[2].querySelector('h3').textContent = t.highlights.sec_title;
        highlightItems[2].querySelector('p').textContent = t.highlights.sec_desc;
    }
    if (highlightItems.length > 3) {
        highlightItems[3].querySelector('h3').textContent = t.highlights.mgmt_title;
        highlightItems[3].querySelector('p').textContent = t.highlights.mgmt_desc;
    }

    // Update footer quick links
    const quickContactH2 = document.querySelector('.quick-contact-links h2');
    if (quickContactH2) quickContactH2.textContent = t.footer.quick_links;

    // Update About page
    const aboutHeaderH1 = document.querySelector('.about-header-right h1');
    if (aboutHeaderH1) aboutHeaderH1.textContent = t.about.title;

    const aboutH2s = document.querySelectorAll('.about-text h2');
    if (aboutH2s.length > 0) aboutH2s[0].textContent = t.about.whoami;
    if (aboutH2s.length > 1) aboutH2s[1].textContent = t.about.education;
    if (aboutH2s.length > 2) aboutH2s[2].textContent = t.about.experience;

    // Update timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const item1 = timelineItems[0].querySelector('.timeline-content');
        if (item1) {
            item1.querySelector('h3').textContent = t.about.but_diploma;
            item1.querySelectorAll('p')[0].textContent = t.about.but_school;
            item1.querySelectorAll('p')[1].textContent = t.about.but_duration;
            item1.querySelectorAll('p')[2].textContent = t.about.but_desc;
        }
    }
    if (timelineItems.length > 1) {
        const item2 = timelineItems[1].querySelector('.timeline-content');
        if (item2) {
            item2.querySelector('h3').textContent = t.about.bac_diploma;
            item2.querySelectorAll('p')[0].textContent = t.about.bac_school;
            item2.querySelectorAll('p')[1].textContent = t.about.bac_duration;
            item2.querySelectorAll('p')[2].textContent = t.about.bac_desc;
        }
    }
    if (timelineItems.length > 2) {
        const item3 = timelineItems[2].querySelector('.timeline-content');
        if (item3) {
            item3.querySelector('h3').textContent = t.about.college_diploma;
            item3.querySelectorAll('p')[0].textContent = t.about.college_cert;
            item3.querySelectorAll('p')[1].textContent = t.about.college_duration;
            item3.querySelectorAll('p')[2].textContent = t.about.college_desc;
        }
    }

    // Update experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, idx) => {
        const h3 = item.querySelector('h3');
        const durationSpan = item.querySelector('.duration');
        const strongText = item.querySelector('strong');
        const btn = item.querySelector('button a');
        
        if (idx === 0) {
            if (h3) h3.textContent = t.about.company1;
            if (durationSpan) durationSpan.textContent = t.about.stage_3rd;
            if (strongText) strongText.parentElement.textContent = t.about.domain1;
            if (btn) btn.textContent = t.about.see_company;
        } else if (idx === 1) {
            if (h3) h3.textContent = t.about.company2;
            if (durationSpan) durationSpan.textContent = t.about.stage_term;
            if (strongText) strongText.parentElement.textContent = t.about.domain2;
            if (btn) btn.textContent = t.about.see_company;
        }
    });

    // Update Projects page
    const projectsHeaderH1 = document.querySelector('.projects-header h1');
    if (projectsHeaderH1) projectsHeaderH1.textContent = t.projects.title;

    const projectsSubtitle = document.querySelector('.projects-header p');
    if (projectsSubtitle) projectsSubtitle.textContent = t.projects.subtitle;

    const projectCards = document.querySelectorAll('.project-card');
    const projectData = [
        { title: 'linux_title', cat: 'linux_cat', desc: 'linux_desc' },
        { title: 'java_title', cat: 'java_cat', desc: 'java_desc' },
        { title: 'db_title', cat: 'db_cat', desc: 'db_desc' },
        { title: 'hardis_title', cat: 'hardis_cat', desc: 'hardis_desc' }
    ];

    projectCards.forEach((card, idx) => {
        if (projectData[idx]) {
            const h2 = card.querySelector('h2');
            const category = card.querySelector('.project-category');
            const description = card.querySelector('.project-description');
            
            if (h2) h2.textContent = t.projects[projectData[idx].title];
            if (category) category.textContent = t.projects[projectData[idx].cat];
            if (description) description.textContent = t.projects[projectData[idx].desc];
        }
    });

    // Update Contact page
    const contactHeaderH1 = document.querySelector('.contact-header h1');
    if (contactHeaderH1) contactHeaderH1.textContent = t.contact.title;

    const contactSubtitle = document.querySelector('.contact-header p');
    if (contactSubtitle) contactSubtitle.textContent = t.contact.subtitle;

    // Update form
    updateFormElements(lang, t);
}

// Update form elements with translation
function updateFormElements(lang, t) {
    // Form title
    const formTitle = document.querySelector('.form-card h2');
    if (formTitle) formTitle.textContent = t.contact.form_title;

    // Form labels and inputs
    const labels = document.querySelectorAll('.form-group label');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

    if (labels.length > 0) labels[0].textContent = t.contact.name_label;
    if (inputs.length > 0) inputs[0].placeholder = t.contact.name_placeholder;

    if (labels.length > 1) labels[1].textContent = t.contact.email_label;
    if (inputs.length > 1) inputs[1].placeholder = t.contact.email_placeholder;

    if (labels.length > 2) labels[2].textContent = t.contact.subject_label;
    if (inputs.length > 2) inputs[2].placeholder = t.contact.subject_placeholder;

    if (labels.length > 3) labels[3].textContent = t.contact.message_label;
    if (inputs.length > 3) inputs[3].placeholder = t.contact.message_placeholder;

    // Submit button
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.textContent = t.contact.send_btn;

    // Contact methods
    const methodsTitle = document.querySelector('.methods-card h2');
    if (methodsTitle) methodsTitle.textContent = t.contact.methods_title;

    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach((method, index) => {
        const h3 = method.querySelector('h3');
        const small = method.querySelector('small');
        
        if (index === 0) {
            h3.textContent = t.contact.email;
            if (small) small.textContent = t.contact.response_time;
        } else if (index === 1) {
            h3.textContent = t.contact.phone;
        }
    });
}

// Export for use in other files
window.applyLanguage = applyLanguage;
window.currentLanguage = () => currentLanguage;

