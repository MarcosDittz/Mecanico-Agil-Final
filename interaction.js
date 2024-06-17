const sobreAppElement = document.getElementById('sobreapp');
const conteudoSobreApp = document.getElementById('conteudo-sobreapp');
const paraEmpresasElement = document.getElementById('paraempresas');
const conteudoParaEmpresas = document.getElementById('conteudo-paraempresas');
const comoUsarElement = document.getElementById('comousar');
const conteudoComoUsar = document.getElementById('conteudo-comousar');
const localizarElement = document.getElementById('localizar');
const conteudoLocalizar = document.getElementById('conteudo-localizar');

sobreAppElement.addEventListener('click', () => {
    conteudoSobreApp.style.display = conteudoSobreApp.style.display === 'none' ? 'block' : 'none';
});
paraEmpresasElement.addEventListener('click', () => {
    conteudoParaEmpresas.style.display = conteudoParaEmpresas.style.display === 'none' ? 'block' : 'none';
});
comoUsarElement.addEventListener('click', () => {
    conteudoComoUsar.style.display = conteudoComoUsar.style.display === 'none' ? 'block' : 'none';
});
localizarElement.addEventListener('click', () => {
    conteudoLocalizar.style.display = conteudoLocalizar.style.display === 'none' ? 'block' : 'none';
});
