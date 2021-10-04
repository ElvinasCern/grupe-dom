const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');


const liDOM = document.querySelectorAll('li');
/* for (const ingredientas of liDOM) {
ingredientas.classList.add('darzove');
};
 */
liDOM.forEach(i => i.classList.add('darzove'));