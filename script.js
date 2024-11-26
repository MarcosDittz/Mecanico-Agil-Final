document.addEventListener('DOMContentLoaded', function() { 
    var spans = document.querySelectorAll('#mais-infos-app');
    spans.forEach(function(span){
        span.addEventListener('click', function() {
            var conteudo = this.parentElement.nextElementSibling;
            if(conteudo.classList.contains('mostrar')){
                conteudo.classList.remove('mostrar');
            } else {
                conteudo.classList.add('mostrar');
            }
        });
    });
});
