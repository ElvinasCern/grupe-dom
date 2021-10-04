const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio darzas';

const liDOM = document.querySelectorAll('li');

//for (darzove of liDOM){
//    darzove.innerText = 'Israuta darzove';
//};

liDOM.forEach(i => i.innerText = 'Israuta darzove' );