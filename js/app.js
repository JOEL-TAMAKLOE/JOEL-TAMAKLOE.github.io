/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 200, // Plus de particules pour un effet plus dense
      "density": {
        "enable": true,
        "value_area": 1000 // Densité plus élevée
      }
    },
    "color": {
      "value": ["#4a00e0", "#8e2de2", "#00c6fb", "#005bea"] // Palette de couleurs modernes
    },
    "shape": {
      "type": "circle", // Forme des particules
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "../images/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8, // Opacité plus élevée
      "random": true, // Opacité aléatoire
      "anim": {
        "enable": true, // Animation d'opacité activée
        "speed": 1.5,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 4, // Taille de base des particules
      "random": true, // Taille aléatoire
      "anim": {
        "enable": true, // Animation de taille activée
        "speed": 3,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, // Lignes entre les particules
      "distance": 150, // Distance entre les lignes
      "color": "#0e2431", // Couleur des lignes
      "opacity": 0.7, // Opacité des lignes
      "width": 1.5 // Épaisseur des lignes
    },
    "move": {
      "enable": true, // Mouvement activé
      "speed": 8, // Vitesse de déplacement
      "direction": "none", // Direction aléatoire
      "random": true, // Mouvement aléatoire
      "straight": false, // Pas de mouvement en ligne droite
      "out_mode": "bounce", // Rebondir au bord du canvas
      "bounce": true, // Rebondir entre elles
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas", // Détection sur le canvas
    "events": {
      "onhover": {
        "enable": true, // Effet au survol
        "mode": "bubble" // Mode bulle
      },
      "onclick": {
        "enable": true, // Effet au clic
        "mode": "push" // Mode push pour ajouter des particules
      },
      "resize": true // Redimensionnement automatique
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250, // Distance de l'effet bulle
        "size": 15, // Taille de la bulle
        "duration": 2, // Durée de l'effet
        "opacity": 0.8, // Opacité de la bulle
        "speed": 3 // Vitesse de l'effet
      },
      "repulse": {
        "distance": 150, // Distance de répulsion
        "duration": 0.4 // Durée de l'effet
      },
      "push": {
        "particles_nb": 10 // Nombre de particules ajoutées au clic
      },
      "remove": {
        "particles_nb": 2 // Nombre de particules supprimées
      }
    }
  },
  "retina_detect": true // Détection Retina
});