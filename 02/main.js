const liDOM = document.querySelectorAll('li');

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i];
    const pavadinimas = ingredientas.textContent;
    console.log(pavadinimas);
}


let ingridientsArr = [];

for (const ingredientas of liDOM) {
    ingridientsArr.push(ingredientas.textContent.toUpperCase());
}
console.log(ingridientsArr);
