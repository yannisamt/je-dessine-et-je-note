# je-dessine-et-je-note
Jeu ou l'on doit dessiner ou noter les dessins de l'ordinateur.

Utilisation :

      import project from "./index.js";

      project.attach("#project");

      document.querySelector("#greenFlag").addEventListener("click", () => {
        project.greenFlag();
      });

      // Autoplay
      project.greenFlag();
