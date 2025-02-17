function exibirMensagem() {
    var nome = document.getElementById('Nome').value;
    var cidade = document.getElementById('Cidade').value;
    var moraNaCidade = document.querySelector('input[name="MoraNaCidade"]:checked').value;

   
    var mensagem = `Bem-vindo(a) ${nome}, a cidade escolhida foi ${cidade}. Você mora na cidade: ${moraNaCidade === 'sim' ? 'sim' : 'não'}.`;

    document.getElementById('mensagem').textContent = mensagem;
}
