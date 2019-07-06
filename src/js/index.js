// jshint esversion: 6

const triggers = document.querySelectorAll('a');

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
