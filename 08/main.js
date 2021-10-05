const formDOM = document.querySelector('form');
const resetDOM = formDOM.querySelector('.reset');
const minusDOM = formDOM.querySelector('.minus');
const plusDOM = formDOM.querySelector('.plus');
const numberDOM = formDOM.querySelector('.number');
const h1DOM = document.querySelector('h1');

let counter = 0;

const defaultText = h1DOM.innerText;
const gameInProgr = 'Žaidimas progrese'


minusDOM.addEventListener('click', function () {
    numberDOM.innerText = --counter;
    h1DOM.innerText = gameInProgr;
    if (h1DOM.innerText == defaultText){
        h1DOM.innerText = gameInProgr;    
        };
});

plusDOM.addEventListener('click', function () {
    numberDOM.innerText = ++counter;
    if (h1DOM.innerText == defaultText){
    h1DOM.innerText = gameInProgr;    
    };
    
});

resetDOM.addEventListener('click', function () {
    counter = 0;
    numberDOM.innerText = counter;
    if (h1DOM.innerText == gameInProgr){
     h1DOM.innerText= defaultText;   
    };
    
});


