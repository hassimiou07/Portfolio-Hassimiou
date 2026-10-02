# Portfolio de Hassimiou BARRY

Site statique publié avec GitHub Pages : https://hassimiou07.github.io/Portfolio-Hassimiou/

Étudiant en BUT2 Informatique à Grenoble, orienté cybersécurité, DevSecOps et pentest éthique.

## Comment le site est fabriqué

Les pages HTML sont **générées** à partir d'un fichier de données, pour que le design et le contenu restent cohérents sur toutes les pages.

| Fichier | Rôle |
| --- | --- |
| `data/site.js` | Tout le contenu : profil, projets, compétences, pentest |
| `tools/build.js` | Générateur de pages (Node.js, aucune dépendance) |
| `Css/style.css` | Tout le style (thème terminal sombre) |
| `js/site.js` | Menu mobile, filtre des projets, formulaire de contact |
| `js/terminal.js` | Terminal interactif de la page d'accueil |

## Modifier le contenu

1. Modifier `data/site.js` (ajouter un projet, changer un texte...).
2. Régénérer les pages :

   ```bash
   node tools/build.js
   ```

3. Vérifier en local :

   ```bash
   python -m http.server 8765
   ```

   puis ouvrir http://localhost:8765
4. Publier : `git add -A`, `git commit`, `git push`. GitHub Pages met le site à jour en une ou deux minutes.

Les fichiers `.html` à la racine et dans `Skills/`, `projects/` et `Pentest/` sont écrasés à chaque génération : ne pas les modifier à la main.

## Ajouter un projet

Ajouter un objet dans la liste `projects` de `data/site.js` :

- `competences` : les compétences du BUT travaillées (`tester`, `administrer`, `realiser`, `optimiser`, `gerer`, `collaborer`). Le projet apparaît automatiquement sur ces pages.
- `tags: ['pentest']` : le projet apparaît aussi dans la section Pentest.
- `page` : chemin de la page de détail (facultatif). Sans `page`, le projet s'affiche en simple carte.
- `sections` : blocs de la page de détail (`cards`, `list`, `steps` avec images, `table`).

## Images

- `Img/hassimiou.jpeg` : photo de la carte de visite
- `Img/capture 1.png` à `capture 10.png` : captures du projet Debian et IntelliJ
- `Img/metasploit.svg`, `ghidra.png`, `rootme.svg` : logos des labs pentest

## CV

`cv.pdf` est le CV téléchargeable depuis le site. `CV.html` en est la version web, générée à partir des mêmes données.
