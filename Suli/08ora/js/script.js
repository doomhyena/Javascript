const kezdgomb = document.getElementById('start-btn');
const kovektkezogomb = document.getElementById('next-btn');
const kerdestarto = document.getElementById('kerdes-container');
const kerdeselem = document.getElementById('kerdes');
const valaszgombelem = document.getElementById('egyediValasz-buttons');

let megkevertkerdesek, jelenlegikerdesindex

kezdgomb.addEventListener('click', jatekkezdes);