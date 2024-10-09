document.addEventListener("DOMContentLoaded", function () { 
    // Fonction pour afficher/masquer les sections
    function toggleVisibility(element) {
        element.classList.toggle("hidden");
    }

    // Fonction pour masquer toutes les sections
    function hideAllSections() {
        // Masquer toutes les sections ayant la classe 'hidden'
        document.querySelectorAll('.hidden').forEach(element => {
            element.classList.add('hidden');
        });
    }

    // Événements pour chaque section
    document.getElementById("bullesCompetences").addEventListener("click", function() {
        hideAllSections(); // Masquer toutes les sections avant d'afficher celle-ci
        const competencesContent = document.getElementById("competencesContent");
        toggleVisibility(competencesContent); // Afficher/Masquer la section cliquée
    });

    document.getElementById("bullesExperiences").addEventListener("click", function() {
        hideAllSections();
        const container = document.getElementById("experiencesContent");
        toggleVisibility(container);
    });

    document.getElementById("bullesApropos").addEventListener("click", function() {
        hideAllSections();
        document.querySelectorAll('.apropos-info').forEach(info => {
            toggleVisibility(info);
        });
    });

    document.getElementById("bullesFormations").addEventListener("click", function() {
        hideAllSections();
        const formationsInfo = document.querySelector(".formations-info");
        toggleVisibility(formationsInfo);
    });

    document.getElementById('bullesPortfolio').addEventListener('click', function() {
        hideAllSections();
        document.querySelectorAll('.portfolio').forEach(function(portfolio) {
            toggleVisibility(portfolio);
        });
    });

    // Initialiser l'observateur d'intersection pour les cartes (expériences)
    function initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.style.opacity = 1;
                }
            });
        }, {
            threshold: 0.8 // Déclenchement à 80% de visibilité
        });

        // Sélectionner toutes les cartes avec la classe 'card'
        const cards = document.querySelectorAll('.card');
        
        // Ajouter l'observateur à chaque carte
        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // Initialiser l'observateur après que la fenêtre soit chargée
    initObserver();
});
