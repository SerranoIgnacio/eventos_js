"use strict";

const select = document.querySelector('select');
// Usamos "html" para seleccionar el padre de todos los
// elementos, es decir, el html en si.
const html = document.querySelector('body');

console.log("Evento de onclick con on-event");

function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
 
select.onchange = () => {
    select.value === 'black' ? update('black','white') : update('white','black');
}

