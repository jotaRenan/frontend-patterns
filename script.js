import { fazerNada, proteger, imitarLuiz, foo, bar, conter, forcarMaiusculo, } from './handlers.js';
import { logarIterable } from './helpers.js';
import BST from './tree.js';
// import BST from './iterableTree.js';

//-- Botao. Interaçoes simples com a pagina
const botao1 = document.querySelector('#botao');

// botao1.onclick = foo;
// botao1.addEventListener('mouseover', foo);
// botao1.addEventListener('click', bar);

// const section1 = document.querySelector('#sectionSuperior');

// section1.addEventListener('click', imitarLuiz); // Como faz pra tirar isso? 
// botao1.addEventListener('click', conter);

/** Ou seja, é possivel adicionar inumeros listeners e impedir a propagaçao de eventos (bubbling) */

//-- Input ===============
/*
const inputTexto = document.querySelector('input[type="text"]');

// inputTexto.addEventListener('change', forcarMaiusculo);
*/

/** Também é possivel interceptar e sobrescrever valores de eventos */

//-- Textos================
/*
const pEspecial = document.querySelector('#especial');
const pSecreto = document.querySelector('#secreto');

pEspecial.addEventListener('copy', proteger);
pSecreto.addEventListener('copy', fazerNada);
*/

/** JS nos permite sobrescrever inclusive o comportamento padrao dos eventos */
//-- Iterators
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
logarIterable('Array', arr);

const mapaIdades = new Map();
mapaIdades.set('Jota', 20);
mapaIdades.set('Luiz', 26);
mapaIdades.set('Chagas', 39);
logarIterable('Map', mapaIdades);

const elementosSection = document.querySelectorAll('section');
console.log(`Array.isArray(elementosSection): ${Array.isArray(elementosSection)}`);
logarIterable('NodeList', elementosSection);

const textinho = `Mas nenhuma palavra me fascinava tanto quanto 'defenestração'.`;
console.log(`Array.isArray(textinho): ${Array.isArray(textinho)}`);
logarIterable('String', textinho);
*/
/*
const arvore = new BST();
for (const num of [10, 5, 3, 6, 20, 15, 40]) {
    arvore.insert(num);
}
logarIterable('BST', arvore);
*/