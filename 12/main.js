
const inputNameDOM = document.querySelector('input[type=text]');
const dishesDOM = document.querySelectorAll('input[type=checkbox]')
const drinksDOM = document.querySelectorAll('input[type=radio]')
const submitBtnDOM = document.querySelector('button');
const orderFieldDOM = document.querySelector('.order');
const order = [];
function dishesDrinks() {

    dishesDOM.forEach(noriNenori => {
        if (noriNenori.checked) {
            order.push('Nori')
        } else order.push('Nenori')
    });
    drinksDOM.forEach(drinks => {
        if (drinks.checked) {
            order.push(drinks.value);
        }
    });

}

submitBtnDOM.addEventListener('click', function (event) {
    event.preventDefault();
    const name = inputNameDOM.value;
    dishesDrinks();
    if (order.length === 4 && name.length != 0) {
        orderFieldDOM.innerText = `Uzsakovas vardu ${name} ${order[0]} sriubos, ${order[1]} pagrindinio patiekalo,${order[2]} deserto ir ${order[3]} yra pasirinktas gerimas.`;
    } else if (name.length === 0 && order.length === 4) {
        orderFieldDOM.innerText = `${order[0]} sriubos, ${order[1]} pagrindinio patiekalo,${order[2]} deserto ir ${order[3]} yra pasirinktas gerimas.`;
    }
    else if (order.length === 3 && name.length != 0) {
        orderFieldDOM.innerText = `Uzsakovas vardu ${name} ${order[0]} sriubos, ${order[1]} pagrindinio patiekalo,${order[2]} deserto`;
    }
    else if (order.length === 3 && name.length === 0) {
        orderFieldDOM.innerText = `${order[0]} sriubos, ${order[1]} pagrindinio patiekalo,${order[2]} deserto`;
    }
    else orderFieldDOM.innerText = `Uzsakovas vardu ${name} ${order[0]} sriubos, ${order[1]} pagrindinio patiekalo,${order[2]} deserto ir ${order[3]} yra pasirinktas gerimas.`;

    order.length = 0;
});






