const totalConta = document.querySelector('#total__conta__PCRJ');
const taxa = document.querySelector('#taxa__PCRJ');
const pagantes = document.querySelector('#pagantes__PCRJ');
const btn = document.querySelector('#btn__calcular__PCRJ');
const paragrafoResultado = document.querySelector('#paragrafo__resultado__PCRJ');
const form = document.getElementById('form');
totalConta.focus();

function calculandoPizza() {
    let calcular = (parseFloat(totalConta.value) + parseInt(taxa.value)) / parseInt(pagantes.value);
    return paragrafoResultado.innerHTML = "O valor para cada um ficou por: <p style='color:red;'>R$" + calcular.toFixed(2) + "</p>";
}

function formEvent() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        calculandoPizza();
    })
}

btn.onclick = formEvent;