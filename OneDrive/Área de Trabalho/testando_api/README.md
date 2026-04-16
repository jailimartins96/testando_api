# 💼 CNPJtor - Buscador de CNPJ

Aplicação web para buscar informações de empresas brasileiras pelo CNPJ de forma rápida e fácil.

## 🎯 Descrição

**CNPJtor** é um buscador de CNPJ com tema **darkpunk Tor**. A aplicação integra-se à [Brasil API](https://brasilapi.com.br/) para fornecer informações detalhadas sobre empresas brasileiras.

### Funcionalidades

- 🔍 Busca de CNPJ em tempo real
- 📋 Exibe informações completas da empresa:
  - Razão Social
  - Nome Fantasia
  - Situação (Ativa/Inativa)
  - Natureza Jurídica
  - Endereço completo
  - Data de abertura
- 🎨 Interface com tema cyberpunk/darkpunk
- ⚡ Validação automática de CNPJ (14 dígitos)
- 📱 Design responsivo
- ♿ Acessibilidade (ARIA labels)

## 🚀 Como usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jailimartins96/testando_api.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd testando_api/src/html
   ```

3. **Abra o arquivo `index.html` no navegador:**
   - Clique duplo no arquivo `index.html`, ou
   - Use um servidor local (recomendado)

4. **Digite um CNPJ e busque!**

### Exemplos de CNPJs para testar:
- Google Brasil: `01541413000142`
- Amazon Brasil: `15086016000144`
- Microsoft Brasil: `09263474000160`
- Nubank: `28345291000130`

## 🛠️ Tecnologias utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **API:** Brasil API (https://brasilapi.com.br/)
- **Estilo:** Tema Darkpunk Tor com animações CSS

## 📁 Estrutura do projeto

```
src/html/
├── index.html      # Página principal
├── style.css       # Estilização darkpunk
└── script.js       # Lógica de busca
```

## 🎨 Estilização

O projeto utiliza um tema **darkpunk/cyberpunk** inspirado no Navegador Tor com:
- Cores roxo/preto
- Efeitos glow neon
- Grid de fundo cyberpunk
- Animações suaves e modernas
- Fonte monospace (Courier)

## 📝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`)
2. Faça commit das mudanças (`git commit -m 'Add sua-feature'`)
3. Faça push para a branch (`git push origin feature/sua-feature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença **MIT**. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por **Jayma Martins** | 2026

---

**Nota:** Este é um projeto de estudo para explorar APIs públicas e práticas de desenvolvimento web.
