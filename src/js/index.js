// jshint esversion: 6

const triggers = document.querySelectorAll('a');

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));