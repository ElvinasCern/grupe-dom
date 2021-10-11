function generuotiLenta(selector, number) {
    //validation

    if (typeof selector !== "string" ||
        selector.length < 1) {
        console.error('Dammmmm!, Give not empty string')
        return false;
    }
    if (typeof number != 'number' ||
        number < 1 || 
        number % 1 !== 0) {
        console.error('Dammmmm!, number need to be number type or not negative number')
        return false;
    }
    // logic
    const selectorDOM = document.querySelector(selector);
    if (!selectorDOM) {
        console.error('Dammmmm!, Bad Selector !!!!!')
        return false;
    }
    let HTML = ``;
    for (let i = 1; i <= number; i++) {
        HTML += `<div>${i}</div>`;
    };
    selectorDOM.innerHTML = HTML;
};

generuotiLenta('.lenta', [1, 3, 4, 5]);
/* generuotiLenta('lenta', 3);
generuotiLenta('lenta', 3);
generuotiLenta('lenta', 3); */


