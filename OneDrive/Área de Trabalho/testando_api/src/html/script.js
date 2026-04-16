const btnBuscar = document.getElementById('btnBuscar');
const lista = document.getElementById('lista');
const status = document.getElementById('status');
const inputBusca = document.getElementById('inputBusca');

let usuarios = []; // estado global simples

// Evento do botão
btnBuscar.addEventListener('click', carregarUsuarios);

// Evento de digitação (busca em tempo real)
inputBusca.addEventListener('input', () => {
  const filtrados = filtrarUsuarios(inputBusca.value);
  renderizarUsuarios(filtrados);
});

// =========================
// FUNÇÕES
// =========================

// 1. Buscar usuários da API
async function carregarUsuarios() {
  try {
    mostrarStatus('Carregando...');
    lista.innerHTML = '';

    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!resposta.ok) {
      throw new Error('Erro na requisição');
    }

    usuarios = await resposta.json();
    
    // Ordenar alfabeticamente por nome
    usuarios.sort((a, b) => a.name.localeCompare(b.name));

    mostrarStatus('');
    renderizarUsuarios(usuarios);

  } catch (erro) {
    mostrarStatus('Erro ao carregar usuários');
  }
}

// 2. Renderizar na tela
function renderizarUsuarios(listaUsuarios) {
  lista.innerHTML = '';

  if (listaUsuarios.length === 0) {
    lista.innerHTML = '<li>Nenhum usuário encontrado</li>';
    return;
  }

  listaUsuarios.forEach(user => {
    const item = document.createElement('li');

    item.innerHTML = `
      <strong>${user.name}</strong>
      <small>${user.email}</small>
    `;

    lista.appendChild(item);
  });
}

// 3. Filtrar usuários
function filtrarUsuarios(termo) {
  const filtrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(termo.toLowerCase())
  );
  
  // Ordenar alfabeticamente
  return filtrados.sort((a, b) => a.name.localeCompare(b.name));
}

// 5. Ordenar usuários alfabeticamente
function ordenarAlfabeticamente(listaUsuarios) {
  return [...listaUsuarios].sort((a, b) => 
    a.name.localeCompare(b.name, 'pt-BR')
  );
}

// 4. Status (loading/erro)
function mostrarStatus(mensagem) {
  status.textContent = mensagem;
}