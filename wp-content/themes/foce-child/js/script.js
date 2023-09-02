



// on crée l'observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const titre = entry.target.querySelector('.story-span')

        if (entry.isIntersecting ) { 
            titre.classList.add ('story__titre__animation');
            return;
        }
        titre.classList.remove('story__titre__animation')
    }); 

},{
    threshold: 0.7
}
);

observer.observe(document.querySelector(".story__titre"))





