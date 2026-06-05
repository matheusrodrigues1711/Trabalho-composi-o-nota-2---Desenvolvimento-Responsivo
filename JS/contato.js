// Máscara de CEP
const cepInput = document.getElementById('cep');
if (cepInput) {
    cepInput.addEventListener('input', () => {
        let v = cepInput.value.replace(/\D/g, '').slice(0, 8);
        if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5);
        cepInput.value = v;
    });
}

// Máscara de telefone
const telInput = document.getElementById('telefone');
if (telInput) {
    telInput.addEventListener('input', () => {
        let v = telInput.value.replace(/\D/g, '').slice(0, 11);
        if (v.length > 10) {
            v = `(${v.slice(0,2)}) ${v.slice(2,3)} ${v.slice(3,7)}-${v.slice(7)}`;
        } else if (v.length > 6) {
            v = `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`;
        } else if (v.length > 2) {
            v = `(${v.slice(0,2)}) ${v.slice(2)}`;
        }
        telInput.value = v;
    });
}

// Pré-seleciona produto vindo da URL (ex: contato.html?produto=caneca)
const params = new URLSearchParams(window.location.search);
const produtoParam = params.get('produto');
const selectProduto = document.getElementById('produto');
if (produtoParam && selectProduto) {
    selectProduto.value = produtoParam;
}

// Validação e submit
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Valida com Bootstrap
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Simula envio — esconde form e mostra mensagem de sucesso
        form.classList.add('d-none');
        formSuccess.classList.remove('d-none');

        // Scroll suave para a mensagem de sucesso
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}
