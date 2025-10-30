const avanca = document.querySelectorAll(".btn-proximo")
console.log(avanca)

avanca.forEach(button => {
      button.addEvenveListeener('click', function () {
            const atual = document.querySelector('.a')
            const proximoPasso = "passo-" + this.gatAttribute('data-proximo')
         atual.classList.remove('ativo')  
         document.getElementById(proximoPasso).classList.add('ativo')
      })
}

)

d


