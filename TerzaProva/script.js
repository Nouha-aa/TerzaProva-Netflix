let filmContainers = document.querySelectorAll(".film-cont");
// creo una funzione che mi permetta di gestire i films allo scroll
function handleScroll() {
    filmContainers.forEach((container, index) => {
        if (elementoScrollato(container)) {
            container.classList.add('films-appear'); //mostro gli elementi allo scroll uno alla vola
        } else {
            container.classList.remove('films-appear'); //faccio in modo che allo scroll verso l'alto gli elementi scompaino di nuovo
        }
    });
}

function elementoScrollato(elemento) {
    return elemento.getBoundingClientRect().bottom < window.innerHeight; // l'elemento appare solo quando si arriva alla fine del container successivo
}

document.addEventListener('scroll', handleScroll);

// Mostro gli elementi visibili al caricamento della pagina
handleScroll();


