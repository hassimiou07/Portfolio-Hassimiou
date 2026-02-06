// Initialize skills functionality
document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-box');
    const projectsGrid = document.getElementById('projectsGrid');
    const selectedSkillName = document.getElementById('selectedSkillName');

    // Add click event to each skill box
    skillBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const skillId = this.getAttribute('data-skill');
            displayProjects(skillId);
            
            // Update active state
            skillBoxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function displayProjects(skillId) {
        const skill = skillsData[skillId];
        
        // Update header
        selectedSkillName.textContent = skill.name;
        
        // Clear projects grid
        projectsGrid.innerHTML = '';
        
        if (skill.projects && skill.projects.length > 0) {
            skill.projects.forEach((project, index) => {
                const projectCard = createProjectCard(project);
                projectCard.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
                projectsGrid.appendChild(projectCard);
            });
        } else {
            projectsGrid.innerHTML = '<p class="no-projects">Aucun projet associé à cette compétence pour le moment</p>';
        }
    }

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let cardContent = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        
        if (project.technologies && project.technologies.length > 0) {
            cardContent += `<p style="margin-top: 10px; font-size: 0.85rem;"><strong>Tech:</strong> ${project.technologies.join(', ')}</p>`;
        }
        
        if (project.link) {
            cardContent += `<a href="${project.link}" target="_blank">Voir le projet</a>`;
        }
        
        card.innerHTML = cardContent;
        return card;
    }
});
