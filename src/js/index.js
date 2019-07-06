// jshint esversion: 6

const triggers = document.querySelectorAll('a');

function highlightLink() {

    console.log(this);
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));