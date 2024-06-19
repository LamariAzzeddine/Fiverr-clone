
//Pour ne pas avoir un probleme lors de lanimation des images 

// Attend que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Récupère l'élément div de préchargement des images
    const imagePreloader = document.getElementById("image-preloader");
  
    // Sélectionne toutes les images à précharger
    const imagesToPreload = imagePreloader.querySelectorAll("img");
  
    // Pour chaque image à précharger
    imagesToPreload.forEach(function(image) {
      // Crée une nouvelle image en JavaScript
      const newImage = new Image();
      // Définit la source de la nouvelle image sur la source de l'image à précharger
      newImage.src = image.src;
      // En préchargeant les images, elles seront disponibles pour l'animation sans flash blanc
    });
  });
  