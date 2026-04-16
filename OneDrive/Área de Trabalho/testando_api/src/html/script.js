// Elementos do DOM
const inputCNPJ = document.getElementById('inputCNPJ');
const btnBuscar = document.getElementById('btnBuscar');
const resultado = document.getElementById('resultado');
const status = document.getElementById('status');

// URL da API
const API_URL = 'https://brasilapi.com.br/api/cnpj/v1/';

// Event listeners
btnBuscar.addEventListener('click', buscarCNPJ);
inputCNPJ.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    buscarCNPJ();
  }
});

/**
 * Buscar CNPJ da API
 */
async function buscarCNPJ() {
  const cnpj = inputCNPJ.value.trim().replace(/\D/g, ''); // Remove caracteres não numéricos

  // Validar CNPJ
  if (!cnpj) {
    mostrarErro('Por favor, digite um CNPJ');
    return;
  }

  if (cnpj.length !== 14) {
    mostrarErro('CNPJ deve ter 14 dígitos');
    return;
  }

  // Desabilitar botão durante requisição
  btnBuscar.disabled = true;
  status.textContent = '⏳ Buscando...';
  resultado.innerHTML = '';

  try {
    const resposta = await fetch(API_URL + cnpj);

    if (!resposta.ok) {
      if (resposta.status === 404) {
        mostrarErro('CNPJ não encontrado');
      } else {
        mostrarErro('Erro ao buscar CNPJ');
      }
      return;
    }

    const dados = await resposta.json();
    exibirResultado(dados);
    status.textContent = '';

  } catch (erro) {
    mostrarErro(`Erro: ${erro.message}`);
  } finally {
    btnBuscar.disabled = false;
  }
}

/**
 * Exibir resultado da busca
 */
function exibirResultado(dados) {
  resultado.innerHTML = `
    <h2>✅ Empresa Encontrada</h2>
    <div class="resultado-item">
      <span class="resultado-label">Razão Social</span>
      <span class="resultado-valor">${dados.nome || 'N/A'}</span>
    </div>
    <div class="resultado-item">
      <span class="resultado-label">CNPJ</span>
      <span class="resultado-valor">${formatarCNPJ(dados.cnpj)}</span>
    </div>
    <div class="resultado-item">
      <span class="resultado-label">Nome Fantasia</span>
      <span class="resultado-valor">${dados.nome_fantasia || 'N/A'}</span>
    </div>
    <div class="resultado-item">
      <span class="resultado-label">Situação</span>
      <span class="resultado-valor">${dados.descricao_situacao || 'N/A'}</span>
    </div>
    <div class="resultado-item">
      <span class="resultado-label">Tipo de Empresa</span>
      <span class="resultado-valor">${dados.natureza_juridica_descricao || 'N/A'}</span>
    </div>
    <div class="resultado-item">
      <span class="resultado-label">Endereço</span>
      <span class="resultado-valor">${dados.logradouro || ''} ${dados.numero || ''}, ${dados.bairro || ''} - ${dados.municipio || ''}, ${dados.uf || ''}</span>
    </div>
    <div class="resultado-item">
      <span class="resultado-label">Data de Abertura</span>
      <span class="resultado-valor">${formatarData(dados.data_inicio_atividade) || 'N/A'}</span>
    </div>
  `;
}

/**
 * Formatar CNPJ
 */
function formatarCNPJ(cnpj) {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

/**
 * Formatar data
 */
function formatarData(data) {
  if (!data) return '';
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

/**
 * Mostrar mensagem de erro
 */
function mostrarErro(mensagem) {
  resultado.innerHTML = `<div class="resultado vazio">❌ ${mensagem}</div>`;
  status.textContent = '';
}

// Foco no input ao carregar
inputCNPJ.focus();
