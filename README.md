# Portfolio - Mamadou BARRY 🚀

Un portfolio web professionnel et moderne présentant mes projets, compétences et services.

## 🎯 Vue d'ensemble

Portfolio moderne d'un étudiant en informatique à **IUT2 GRENOBLE**, démontrant expertise en :
- **Développement Web** (HTML, CSS, JavaScript)
- **Programmation Système** (Java, Linux, Shell)
- **Bases de Données** (PostgreSQL, SQL)
- **Réseaux & Infrastructure** (VLAN, LAN, SSH)
- **Gestion de Projet** (Exigences, Agile)
- **Durabilité & Responsabilité** (Green IT, ESG)

## ✨ Caractéristiques

- **Design Cyberpunk** : Thème vert néon moderne et immersif
- **Animations Fluides** : Effets terminal, typewriter, transitions élégantes
- **Responsive Design** : Optimisé pour mobile, tablette, desktop
- **Pages Détail** : 6 pages complètes pour chaque projet SAE
- **Timeline Éducatif** : Parcours académique structuré avec dates
- **Footer Riche** : Liens rapides et coordonnées de contact
- **Performance** : Code optimisé et chargement rapide

## 📁 Structure du Projet

```
Portfolio/
├── index.html                 # Accueil - Hero section + Quick Access
├── About.html                 # À propos - Profil + Expériences + Timeline
├── Project.html               # Projets - Grille 6 projets SAE
├── Contact.html               # Contact - Formulaire + Méthodes contact
├── SAE1.html → SAE6.html      # Pages détail pour chaque projet
├── Css/
│   ├── Style-Index.css        # Styles accueil (Hero, Quick Cards, CTA)
│   ├── About.css              # Styles À propos (Timeline, Expériences)
│   ├── project.css            # Styles Projets (Grille, Cards)
│   ├── contact.css            # Styles Contact (Formulaire, Liens)
│   └── project-detail.css     # Styles Pages détail projets
├── Img/                       # Dossier pour images et assets
├── README.md                  # Documentation (ce fichier)
└── .git/                      # Dépôt Git
```

## 📄 Pages HTML Détaillées

### 1. **index.html** - Page d'Accueil
- **Terminal Effect** : `$ sudo install Portfolio` animé
- **Typewriter Animation** : Message de bienvenue
- **Quick Access Cards** : 3 cartes vers À propos / Projets / Contact
- **Highlights Section** : 4 domaines de compétences
- **CTA Section** : Appel à l'action pour collaboration
- **Footer** : Liens sociaux et copyright

### 2. **About.html** - Page À Propos
- **Profil Personnel** : Présentation et intérêts
- **Parcours Éducatif** : Timeline visuelle avec 3 niveaux d'études
- **Expérience Professionnelle** : 2 stages détaillés
  - Great Expert Team (Guinée) - Sécurité RFID
  - Compagnie des Bauxites de Guinée - Réseaux
- **Compétences** : Grille 2x3 des domaines techniques
- **CTA** : Bouton vers page Contact

### 3. **Project.html** - Page Projets
- **Grille de Projets** : 6 cartes en 2 colonnes
- **Cartes Interactives** : Icônes animées + Hover effects
- **Liens Vers Détail** : Chaque carte link vers SAE1-6.html
- **Métadonnées** : Code course + Tags technologies
- **Design Responsive** : 1 colonne sur mobile

### 4. **Contact.html** - Page Contact
- **Formulaire** : Nom, Email, Sujet, Message (2 colonnes)
- **Méthodes Contact** : 7 cards avec icônes
  - Email, Téléphone, GitHub, Localisation
- **Quick Links** : 5 icônes sociaux circulaires
- **Responsive** : Formulaire empilé sur mobile

### 5. **SAE1.html → SAE6.html** - Pages Détail Projets

### 1. **index.html** - Page d'accueil

**Contenu HTML :**
```html
<header>
  <div class="container">
    <div class="logo"><h1>BARRY Mamadou</h1></div>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="About.html">About Me</a></li>
        <li><a href="Project.html">Project</a></li>
        <li><a href="Contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<div class="content-center">
  <div class="typewriter">
    <h3>> Welcome to My Portfolio</h3>
  </div>
  <p>Discover my work, skills, and services.</p>
</div>
```

**Structure :**
- **Header** : Logo à gauche + Navigation à droite sur une ligne
- **Contenu principal** :
  - Classe `.typewriter` : Crée un effet d'écriture progressif
  - Texte centré verticalement et aligné à gauche
  - Animation d'écriture avec curseur clignotant

**Liens liés :** `Css/Style-Index.css`

---

### 2. **About.html** - Page À propos

**Contenu HTML :**
```html
<div class="about-container">
  <div class="about-header">
    <h1>About Me</h1>
    <div class="underline"></div>
  </div>
  
  <div class="about-content">
    <div class="about-text">
      <!-- 4 sections : Who Am I?, My Journey, What I Do, My Passion -->
    </div>
    <div class="about-skills">
      <div class="skills-grid">
        <!-- 6 skill cards -->
      </div>
    </div>
  </div>
  
  <div class="cta-section">
    <h2>Let's Work Together!</h2>
    <a href="Contact.html" class="cta-button">Get In Touch</a>
  </div>
</div>
```

**Structure :**
- **Header** : Titre "About Me" avec underline animé
- **Contenu** : 2 colonnes
  - Colonne 1 : 4 paragraphes texte
  - Colonne 2 : Grille 2x3 de skill cards
- **Skill Cards** : 
  - Web Development (HTML, CSS, JavaScript)
  - Linux & Terminal
  - Databases (PostgreSQL, Java)
  - Assembly Language (Motorola 68000)
  - Tools & Environment
  - System Programming

**Skills affichés :**
- Hover effect : Couleur plus claire, ombre légère, lift up de 5px
- Animation entrance : FadeIn progressive

**Liens liés :** `Css/About.css`

---

### 3. **Project.html** - Page des projets

**Contenu HTML :**
```html
<div class="projects-container">
  <div class="projects-header">
    <h1>My Projects</h1>
    <div class="underline"></div>
    <p>SAE and professional projects demonstrating my technical skills</p>
  </div>

  <div class="projects-grid">
    <!-- 6 project-card -->
    <div class="project-card">
      <div class="project-image">
        <i class="fab fa-linux"></i>  <!-- Font Awesome Icon -->
      </div>
      <div class="project-info">
        <h2>Linux Installation & Setup</h2>
        <p class="project-category">SAE - System Administration</p>
        <p class="project-description">...</p>
        <div class="project-tags">
          <span>Linux</span>
          <span>Terminal</span>
          <span>System Admin</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

**6 Projets affichés :**

| # | Projet | Icône FA | Description |
|---|--------|----------|-------------|
| 1 | Linux Installation & Setup | `fa-linux` | Installation workstation Linux |
| 2 | Java File Indexing Chatbot | `fa-java` | Chatbot avec indexage fichiers |
| 3 | PostgreSQL Database | `fa-database` | Design & implémentation DB |
| 4 | Hardis Group Website | `fa-globe` | Site web professionnel |
| 5 | Requirements Analysis | `fa-file-contract` | Recueil de besoins |
| 6 | Economic & Ecology | `fa-leaf` | Environnement économique/écologique |

**Fonctionnalités :**
- Grid 2 colonnes (responsive 1 colonne sur mobile)
- Icônes Font Awesome animées (flottement avec délais décalés)
- Tags colorés pour chaque technologie
- Hover effect : Lift de 10px, glowing border, ombre colorée
- Animations fade-in avec délais progressifs

**Liens liés :** `Css/project.css` + Font Awesome CDN

---

### 4. **Contact.html** - Page de contact

**Contenu HTML :**
```html
<div class="contact-wrapper">
  <!-- Colonne 1 : Formulaire -->
  <div class="contact-form-section">
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>

  <!-- Colonne 2 : Moyens de contact -->
  <div class="contact-methods-section">
    <div class="contact-method">
      <div class="method-icon"><i class="fas fa-envelope"></i></div>
      <div class="method-info">
        <h3>Email</h3>
        <p><a href="mailto:mamadou.barry@example.com">mamadou.barry@example.com</a></p>
        <small>Response time: Within 24 hours</small>
      </div>
    </div>
    <!-- Idem pour Phone, LinkedIn, GitHub, Twitter, Discord, Location -->
  </div>
</div>

<!-- Section Social Links -->
<div class="quick-contact-links">
  <h2>Quick Links</h2>
  <div class="social-links">
    <a href="https://linkedin.com" class="social-link linkedin">
      <i class="fab fa-linkedin"></i>
    </a>
    <!-- Autres réseaux -->
  </div>
</div>
```

**7 Moyens de contact :**
1. 📧 **Email** - mamadou.barry@example.com
2. ☎️ **Phone** - +33 6 12 34 56 78
3. 💼 **LinkedIn** - Profil LinkedIn
4. 💻 **GitHub** - @hassimiou07
5. 🐦 **Twitter/X** - @mamadoubarry
6. 💬 **Discord** - mamadoubarry#1234
7. 📍 **Location** - Grenoble, France

**Fonctionnalités :**
- Formulaire avec validation HTML5
- 2 colonnes (formulaire + moyens de contact)
- Icônes Font Awesome pour chaque méthode
- Social links circulaires avec couleurs spécifiques
- Hover effects : Icônes colorées, enlargissement, rotation

**Liens liés :** `Css/contact.css` + Font Awesome CDN

---

## 🎨 Fichiers CSS

### **Conception générale (Toutes les pages)**

```css
/* Reset universel */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fond sombre avec gradient */
body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
    color: #00ff88;  /* Vert néon */
}

/* Header fixe */
header {
    background-color: rgba(10, 14, 39, 0.95);
    padding: 20px 0;
    border-bottom: 2px solid #00ff88;
    position: sticky;
    top: 0;
    z-index: 100;
}

/* Navigation responsive */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
}

/* Liens avec hover glow */
a {
    text-decoration: none;
    color: #00ff88;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

a:hover {
    color: #ffffff;
    text-shadow: 0 0 10px #00ff88;
}
```

### **1. Style-Index.css** - Page d'accueil

**Animations principales :**
```css
@keyframes typing {
  from { width: 0; }
  to { width: 26ch; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  animation: typing 4s steps(27), blink 0.7s infinite;
  border-right: 3px solid #00ff88;
  overflow: hidden;
  white-space: nowrap;
}
```

**Centrage du contenu :**
```css
.content-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Centrage vertical */
    align-items: flex-start;  /* Alignement à gauche */
    padding-left: 110px;
}
```

---

### **2. About.css** - Page À propos

**Grille 2 colonnes :**
```css
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2 colonnes égales */
  gap: 60px;
  align-items: start;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2x3 grid */
  gap: 20px;
}
```

**Skill Cards interactives :**
```css
.skill-card {
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid #00ff88;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill-card:hover {
  background: rgba(0, 255, 136, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
  transform: translateY(-5px);  /* Lift de 5px */
}
```

**CTA Button :**
```css
.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background: #00ff88;
  color: #0a0e27;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
  transform: scale(1.05);
}
```

---

### **3. project.css** - Page des projets

**Grid projets :**
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* 2 colonnes */
  gap: 40px;
  margin-bottom: 40px;
}
```

**Project Cards avec lift au hover :**
```css
.project-card {
  background: rgba(10, 14, 39, 0.8);
  border: 2px solid #00ff88;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);  /* Lift de 10px */
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
  border-color: #ffffff;
}
```

**Icônes Font Awesome flottantes :**
```css
.project-image {
  height: 200px;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #00ff88;
}

.project-image i {
  font-size: 80px;
  color: #00ff88;
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

/* Délais progressifs pour chaque icône */
.project-card:nth-child(1) .project-image i { animation-delay: 0s; }
.project-card:nth-child(2) .project-image i { animation-delay: 0.3s; }
.project-card:nth-child(3) .project-image i { animation-delay: 0.6s; }
/* ... etc */

.project-card:hover .project-image i {
  font-size: 100px;
  text-shadow: 0 0 20px #00ff88;
  filter: drop-shadow(0 0 10px #00ff88);
}
```

**Tags projectes :**
```css
.project-tags span {
  background: rgba(0, 255, 136, 0.2);
  border: 1px solid #00ff88;
  color: #00ff88;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  transition: all 0.3s ease;
}

.project-tags span:hover {
  background: #00ff88;
  color: #0a0e27;
}
```

---

### **4. contact.css** - Page de contact

**Formulaire styling :**
```css
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid #00ff88;
  border-radius: 5px;
  color: #00ff88;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(0, 255, 136, 0.1);
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  border-color: #ffffff;
}
```

**Submit button :**
```css
.submit-btn {
  width: 100%;
  padding: 15px 30px;
  background: #00ff88;
  color: #0a0e27;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
  text-transform: uppercase;
}

.submit-btn:hover {
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
  transform: scale(1.02);
}
```

**Contact methods cards :**
```css
.contact-method {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(0, 255, 136, 0.05);
  border-left: 3px solid #00ff88;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(0, 255, 136, 0.15);
  transform: translateX(10px);  /* Décalage de 10px */
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

.method-icon i {
  font-size: 32px;
  color: #00ff88;
  transition: all 0.3s ease;
}

.contact-method:hover .method-icon i {
  font-size: 40px;
  text-shadow: 0 0 10px #00ff88;
}
```

**Social links circulaires :**
```css
.social-link {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid #00ff88;
  border-radius: 50%;
  color: #00ff88;
  font-size: 24px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: #00ff88;
  color: #0a0e27;
  transform: scale(1.2) rotateZ(10deg);  /* Zoom + rotation */
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
}

/* Couleurs spécifiques par réseau */
.social-link.linkedin:hover { background: #0077b5; border-color: #0077b5; color: white; }
.social-link.github:hover { background: #333; border-color: #333; color: white; }
.social-link.twitter:hover { background: #1da1f2; border-color: #1da1f2; color: white; }
.social-link.email:hover { background: #ea4335; border-color: #ea4335; color: white; }
```

---

## 🔧 Technologies utilisées

### **HTML5**
- Semantic tags : `<header>`, `<nav>`, `<section>`, `<footer>`
- Formulaires : `<input>`, `<textarea>`, `<button>`
- Validation native HTML5 (`required`, `type="email"`)
- Meta tags responsives

### **CSS3**
- **Flexbox** : Layouts flexibles (`display: flex`, `justify-content`, `align-items`)
- **CSS Grid** : Grilles multiples (`grid-template-columns`, `gap`)
- **Animations** : @keyframes pour typing, float, fade-in
- **Transitions** : Smooth effects sur hover
- **Gradients** : `linear-gradient()` pour fonds
- **Media Queries** : Responsive design @media
- **Box-shadow** : Glow effects et ombres
- **Transforms** : translateY, scale, rotateZ

### **Font Awesome 6.4.0**
CDN : `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

**Icônes utilisées :**
```
fab fa-linux              Linux
fab fa-java               Java
fas fa-database           Database
fas fa-globe              Globle/Web
fas fa-file-contract      Document/Fichier
fas fa-leaf               Feuille/Écologie
fas fa-envelope           Email
fas fa-phone              Téléphone
fab fa-linkedin           LinkedIn
fab fa-github             GitHub
fab fa-twitter            Twitter/X
fab fa-discord            Discord
fas fa-map-marker-alt     Location
```

### **Couleurs principales**
- `#00ff88` : Vert néon principal
- `#0a0e27` : Bleu très sombre (background)
- `#1a1f3a` : Bleu sombre (gradient)
- `#b0ffb0` : Vert clair (texte secondaire)
- `#ffffff` : Blanc (hover accent)

---

## ✨ Guide des animations

### **1. Typing Effect (Page d'accueil)**
```css
@keyframes typing {
  from { width: 0; }
  to { width: 26ch; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  animation: typing 4s steps(27) forwards, blink 0.7s infinite;
  border-right: 3px solid #00ff88;
}
```
- **Durée typing** : 4s
- **Steps** : 27 caractères (incremental)
- **Blink** : 0.7s infini
- **Effet** : Curseur qui clignote en même temps

### **2. Float Animation (Icônes)**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.project-image i {
  animation: float 3s ease-in-out infinite;
}

/* Délais progressifs */
.project-card:nth-child(1) .project-image i { animation-delay: 0s; }
.project-card:nth-child(2) .project-image i { animation-delay: 0.3s; }
.project-card:nth-child(3) .project-image i { animation-delay: 0.6s; }
```
- **Durée** : 3s
- **Mouvement** : Haut/bas de 20px
- **Délais** : Décalés pour effet en cascade

### **3. Fade-in/Slide-in Entrances**
```css
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
- **Durée** : 0.6s à 0.8s
- **Easing** : ease ou ease-in-out
- Appliquées aux titres et cartes

### **4. Hover Effects**

| Effet | Code | Utilisé sur |
|-------|------|-------------|
| **Lift** | `transform: translateY(-5px)` | Skill cards |
| **Lift Plus** | `transform: translateY(-10px)` | Project cards |
| **Scale** | `transform: scale(1.05 / 1.2)` | Buttons, social links |
| **Rotate** | `rotateZ(10deg)` | Social links |
| **Glow** | `box-shadow: 0 0 15px-30px rgba()` | Cards, buttons |
| **Shift** | `transform: translateX(10px)` | Contact methods |

---

## 🎯 Personnalisation

### **1. Changer la couleur principale**
Remplacer partout dans les CSS :
```css
/* Vert néon → Autre couleur */
#00ff88 → Votre couleur hexadécimale
#b0ffb0 → Variation plus claire
```

### **2. Modifier les informations de contact**
Dans `Contact.html` :
```html
<!-- Email -->
<a href="mailto:VOTRE_EMAIL@example.com">VOTRE_EMAIL@example.com</a>

<!-- Téléphone -->
<a href="tel:+33XXXXXXXXX">+33 X XX XX XX XX</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/VOTRE_PROFIL">VOTRE_PROFIL</a>

<!-- GitHub -->
<a href="https://github.com/VOTRE_USERNAME">@VOTRE_USERNAME</a>
```

### **3. Ajouter/Supprimer des projets**
Dupliquer un projet dans `Project.html` :
```html
<div class="project-card">
  <div class="project-image">
    <i class="fab fa-ICONE_FONTAWESOME"></i>
  </div>
  <div class="project-info">
    <h2>Titre</h2>
    <p class="project-category">Catégorie</p>
    <p class="project-description">Description...</p>
    <div class="project-tags">
      <span>Tag1</span>
      <span>Tag2</span>
    </div>
  </div>
</div>
```

### **4. Modifier les skills**
Dans `About.html` :
```html
<div class="skill-card">
  <h3>Nouvelle Compétence</h3>
  <p>Description, technologies, détails</p>
</div>
```

### **5. Changer la police d'écriture**
Remplacer partout dans les CSS :
```css
/* Monospace → Autre genre */
'Courier New', monospace → 'Arial', sans-serif
```

**Options communes :**
- `'Arial', sans-serif` : Moderne, lisible
- `'Segoe UI', Tahoma, sans-serif` : Professionnel
- `'Georgia', serif` : Élégant
- `'Trebuchet MS', sans-serif` : Design

---

## 📱 Responsive Design

### **Breakpoints utilisés**
```css
/* Grand écran (Desktop) */
@media (min-width: 1024px) {
  /* Grid 2 colonnes */
}

/* Tablette */
@media (max-width: 768px) {
  /* Grid 1 colonne */
  /* Nav verticale */
}

/* Téléphone */
@media (max-width: 480px) {
  /* Ajustements additionnels */
}
```

### **Adaptations par page**

**index.html :**
- Header remains sticky
- Content reste centré verticalement
- Navigation passe en colonne

**About.html :**
- Grid 2 colonnes → 1 colonne
- Skill grid 2x3 → 1 colonne
- Padding réduit

**Project.html :**
- Projects grid 2 colonnes → 1 colonne
- Icônes restent centrées
- Gap réduit

**Contact.html :**
- Contact wrapper 2 colonnes → 1 colonne
- Formulaire full width
- Contact methods en colonne
- Social links flex wrap

**Exemple responsive :**
```css
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;  /* 2 colonnes → 1 */
    gap: 40px;
  }

  .projects-grid {
    grid-template-columns: 1fr;  /* 2 colonnes → 1 */
  }

  nav ul {
    flex-direction: column;  /* Horizontal → Vertical */
    gap: 15px;
  }

  .container {
    flex-direction: column;
  }

  .contact-wrapper {
    grid-template-columns: 1fr;  /* 2 colonnes → 1 */
  }
}
```

---

## 🚀 Démarrage rapide

### **1. Installation**
```bash
git clone https://github.com/hassimiou07/Portfolio.git
cd Portfolio
```

### **2. Utilisation locale**
- Ouvrir `index.html` dans un navigateur
- Ou utiliser un serveur local (Python, Live Server, etc.)

### **3. Personnalisation**
- Éditer les fichiers HTML pour le contenu
- Éditer les CSS pour le style
- Remplacer les informations personnelles

### **4. Déploiement**
```bash
git add .
git commit -m "Portfolio mise à jour"
git push origin main
```

**Options de déploiement :**
- GitHub Pages (gratuit, depuis un repo)
- Netlify (gratuit, connexion repo)
- Vercel (gratuit, optimisé)
- Heroku (optionnel)
- VPS classique

---

## 📊 Performance

- **Pas de dépendances externes** (sauf Font Awesome CDN)
- **Pas de framework lourd** (vanilla HTML/CSS)
- **Animations GPU** (transforms, opacity)
- **Code minifié possible** (avant déploiement)
- **Images optimisées** (icônes vectorielles FA)

**Optimisations possibles :**
```html
<!-- Lazy loading si images -->
<img src="image.jpg" loading="lazy" alt="">

<!-- Preload fonts -->
<link rel="preload" as="style" href="Css/Style-Index.css">

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
```

---

## ♿ Accessibilité

**Standards respectés :**
- ✓ Alt text sur icônes (title attribute)
- ✓ Labels sur formulaire
- ✓ Contraste de couleur (WCAG AA)
- ✓ Navigation au clavier
- ✓ Texte lisible
- ✓ Structure sémantique

**Améliorations possibles :**
```html
<!-- ARIA labels -->
<button aria-label="Envoyer le message">Send</button>

<!-- Focus visible -->
:focus {
  outline: 2px solid #00ff88;
  outline-offset: 2px;
}
```

---

## 🐛 Dépannage

### **Icônes Font Awesome ne s'affichent pas**
```html
<!-- Vérifier le lien CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Vérifier les classes -->
<i class="fab fa-linux"></i>  <!-- fab = brand, fas = solid -->
```

### **Animations ne fonctionnent pas**
```css
/* Vérifier la syntaxe */
animation: float 3s ease-in-out infinite;
/* Pas d'espace manquant, pas de typo */
```

### **CSS ne se charge pas**
```html
<!-- Vérifier les chemins relatifs -->
<link rel="stylesheet" href="Css/Style-Index.css">
<!-- Pas d'espace, respecter casse (Linux) -->
```

---

## 📚 Ressources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Web.dev by Google](https://web.dev/)

---

## 👨‍💻 Auteur

**Mamadou BARRY**
- 📍 **Location** : Grenoble, France
- 🎓 **Étude** : IUT2 GRENOBLE - Informatique
- 🔗 **GitHub** : [hassimiou07](https://github.com/hassimiou07)
- 💼 **LinkedIn** : [hassimiou-barry-712016383](https://www.linkedin.com/in/hassimiou-barry-712016383/)
- 📧 **Email** : mamadou.barry@example.com

---

## 📄 Licence

Ce portfolio est libre d'utilisation pour usage personnel et éducatif.

---

**Dernière mise à jour :** Janvier 2026

---

## Résumé technique

| Aspect | Détail |
|--------|--------|
| **Pages** | 4 (Home, About, Projects, Contact) |
| **Fichiers CSS** | 4 (1 par page) |
| **Animations** | 6+ (typing, float, fade-in, etc.) |
| **Projets affichés** | 6 SAE/professionnels |
| **Moyens de contact** | 7 |
| **Responsive** | Oui (mobile, tablet, desktop) |
| **Performance** | Optimisée (vanilla, pas de framework) |
| **Accessibilité** | Standard (semantic HTML, color contrast) |
| **Compatibilité** | Chrome, Firefox, Safari, Edge |

Merci de consulter ce README pour mieux comprendre la structure et le fonctionnement du portfolio ! 🎉
