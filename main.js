const form = document.getElementById('form-cadastro');
const nome = [];
const telefone = [];
const sucesso = document.getElementById("msg-usuario");
const erro = document.getElementById("msg-usuario");

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomePessoa = document.getElementById('nome');
    const inputTelPessoa = document.getElementById('tel');

    verificaContato(inputNomePessoa, inputTelPessoa);
    atualizaTabela();

    }
)

    //função para verificar se o contato já existe ou se o número ja esta vinculado a alguém
    function verificaContato(inputNomePessoa, inputTelPessoa) {

        if (nome.includes(inputNomePessoa.value) && telefone.includes(inputTelPessoa.value)) {
            erro.innerHTML = '<p id="msg-erro">O contato já existe na agenda!</p>';
            limpaCampos(inputNomePessoa, inputTelPessoa);
        } else if (telefone.includes(inputTelPessoa.value)){
            erro.innerHTML = '<p id="msg-erro">Este número já está vinculado a outra pessoa...</p>';
        } else {
            erro.innerHTML = '<p id="msg-sucesso">Novo contato adicionado!</p>';
            adicionaLinha(inputNomePessoa, inputTelPessoa);
            limpaCampos(inputNomePessoa, inputTelPessoa);
        }
    }

    //função para incluir os contatos inseridos em uma linha
    function adicionaLinha(inputNomePessoa, inputTelPessoa) {
        nome.push(inputNomePessoa.value);
        telefone.push(inputTelPessoa.value);

        //aqui basicamente a variavel linha recebeu primeiramente o valor <tr> que depois disso foi sendo concatenado com os novos 'valores', inclusive o valor inserido pelo  usuario nos input's
        let linha = '<tr>';
        linha = linha + `<td>${inputNomePessoa.value}`;
        linha = linha + `<td>${inputTelPessoa.value}`;
        linha = linha + '</tr>';

        //aqui a variavel linha que era vazia, vai receber o valor dela + o valor da linha (logo acima). Portanto a cada nova inserção do usuario nos input's a linha anterior continuará lá e uma nova será adicionada mantendo a primeira... 
        linhas = linhas + linha;
    }

    //função para limpar o campo dos input's
    function limpaCampos(inputNomePessoa, inputTelPessoa) {
        inputNomePessoa.value = '';
        inputTelPessoa.value = '';
    }

    //função para inserir no html a linha com o contato adicionado
    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;    
    }