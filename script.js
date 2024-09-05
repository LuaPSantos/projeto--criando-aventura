const avanca = document. querySelectorAll('.btn-prroximo')

avanca.forEach(button => {
    button.addEventListener('click' , function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classLiat.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo')
    }) 
})