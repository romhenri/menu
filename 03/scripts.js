const P1E = document.getElementById('container1expanded')
const P2E = document.getElementById('container2expanded')
const A1 = document.getElementById('arrow1')
const A2 = document.getElementById('arrow2')
var P1R = 0
var P2R = 0

A1.addEventListener ('click', () => {

    if (P1R == 0) {

        P1E.innerHTML = (`

        <p class="m10-top p10"> Projeto de contador usando HTML, CSS e JavaScript. O mesmo possui funções fundamentais de um contador como incrementar e decrementar um número, além de recursos como: Limpar o valor, Salvar o valor e Recuperar o valor. </p>
        
        `);

        A1.classList.add("flip")

        P1R = 1

    } else if (P1R == 1) {

        P1E.innerHTML = (`

        `);

        A1.classList.remove("flip")

        P1R = 0

    }

})

A2.addEventListener ('click', () => {

    if (P2R == 0) {

        P2E.innerHTML = (`

        <p class="m10-top p10"> Projeto de contador usando HTML, CSS e JavaScript. O mesmo possui funções fundamentais de um contador como incrementar e decrementar um número, além de recursos como: Limpar o valor, Salvar o valor e Recuperar o valor. </p>
        
        `);

        A2.classList.add("flip")

        P2R = 1

    } else if (P2R == 1) {

        P2E.innerHTML = (`

        `);

        A2.classList.remove("flip")

        P2R = 0

    }

})
