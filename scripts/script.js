const form = document.querySelector("form");
const btn_next = document.querySelector("#btn_next");
const btn_sub = document.querySelector("#submit");
const btn_pay = document.querySelector("#btn_pay");
const valor = document.querySelector("#valor_donation");
const instituicao = document.querySelector("#instituicao");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const cpfcnpjInput = document.querySelector("#cpfcnpj");
const r_pix = document.querySelector("#r_pix");
const r_cartao = document.querySelector("#r_cartao");
const r_boleto = document.querySelector("#r_boleto");

btn_next.addEventListener("click", (event) => {
    event.preventDefault();
    if (valor.value != "" && instituicao.value != "") {
        console.log(valor.value, instituicao.value);
        form.classList.add('secActive');
    } else {
        form.classList.remove('secActive');
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (nomeInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "") {
        alert("Por favor, preencha o seu email");
        return;
    }

    if (telefoneInput.value === "") {
        alert("Por favor, preencha o seu telefone");
        return;
    }

    if (cpfcnpjInput.value === "") {
        alert("Por favor, preencha o seu CPF/CNPJ");
        return;
    }

    console.log(nomeInput.value, emailInput.value, telefoneInput.value, cpfcnpjInput.value);

    window.location.href = "pay.html";
});


