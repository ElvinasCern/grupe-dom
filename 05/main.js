const h1DOM = document.querySelector('h1');

h1DOM.innerText = 'Zuikio pomidoru darzas';

h1DOM.classList.add('pavadinimas');

const liDOM = document.querySelectorAll('li');
liDOM.forEach(i => {
    i.innerText = 'Pomidoras';
    i.classList.add('pomidoras');
});