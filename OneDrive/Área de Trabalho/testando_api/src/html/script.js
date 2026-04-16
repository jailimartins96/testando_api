// Elementos do DOM
const apiUrlInput = document.getElementById('apiUrl');
const sendBtn = document.getElementById('sendBtn');
const responseBox = document.getElementById('response');

// Event listeners
sendBtn.addEventListener('click', enviarRequisicao);
apiUrlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        enviarRequisicao();
    }
});

/**
 * Função para enviar requisição para a API
 */
async function enviarRequisicao() {
    const url = apiUrlInput.value.trim();

    // Validar URL
    if (!url) {
        mostrarErro('Por favor, digite uma URL válida');
        return;
    }

    if (!ehUrlValida(url)) {
        mostrarErro('URL inválida. Use http:// ou https://');
        return;
    }

    // Desabilitar botão durante requisição
    sendBtn.disabled = true;
    sendBtn.textContent = 'Enviando...';
    responseBox.textContent = '⏳ Aguardando resposta...';

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        // Formatar resposta JSON
        const respostaFormatada = JSON.stringify(dados, null, 2);
        responseBox.textContent = respostaFormatada;
        responseBox.style.color = '#333';
    } catch (erro) {
        mostrarErro(`Erro na requisição: ${erro.message}`);
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Enviar Requisição';
    }
}

/**
 * Função para validar se é uma URL válida
 */
function ehUrlValida(url) {
    try {
        new URL(url);
        return true;
    } catch (erro) {
        return false;
    }
}

/**
 * Função para mostrar mensagens de erro
 */
function mostrarErro(mensagem) {
    responseBox.textContent = `❌ ${mensagem}`;
    responseBox.style.color = '#d32f2f';
    sendBtn.disabled = false;
    sendBtn.textContent = 'Enviar Requisição';
}

// Mensagem inicial
console.log('🚀 Testando API iniciado com sucesso!');
