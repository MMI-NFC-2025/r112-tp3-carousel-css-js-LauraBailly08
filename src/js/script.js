// *** CAROUSEL ***
// TODO


const carousel = document.querySelector(".carousel__container");;
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    nextButton.addEventListener("click", () => {
        carousel.scrollLeft += 300;
    });

    // Scroll au clic sur le bouton suivant
    prevButton.addEventListener("click", () => {
        carousel.scrollLeft -= 300;
    });
}