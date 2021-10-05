const minusDOM = document.querySelector('.minus');
const pliusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');

let countNumberDom = 0;

minusDOM.addEventListener('click' , function(){
    numberDOM.innerText = countNumberDom--;
});

pliusDOM.addEventListener('click' , function(){
    numberDOM.innerText = countNumberDom++;
});

resetDOM.addEventListener('click' , function(){
    numberDOM.innerText = countNumberDom = 0;
});





