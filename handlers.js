export function foo(e) {
    console.log('foo');
}

export function bar(e) {
    console.log('bar');
}

export function conter(e) {
    e.stopPropagation();
}

export function imitarLuiz() {
    console.log('🤣🤣🤣');
}

export function forcarMaiusculo(e) {
    e.target.value = e.target.value.toUpperCase();
}

export function fazerNada(e) {
    e.preventDefault();
}

export function proteger(e) {
    const text = window
        .getSelection()
        .toString()
        .concat(TextoProtecao);

    e.clipboardData.setData('text/plain', text);
    e.preventDefault();
}

const TextoProtecao = '\n\nO material jornalístico produzido pelo Estadão é protegido por lei. As regras têm como objetivo proteger o investimento feito pelo Estadão na qualidade constante de seu jornalismo. Para compartilhar este conteúdo, utilize o link: https://politica.estadao.com.br/blogs/fausto-macedo/aras-pede-a-celso-de-mello-depoimentos-de-tres-ministros-deputada-e-seis-delegados-no-inquerito-sobre-bolsonaro-e-a-pf/';
