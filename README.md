# 🌐 Prova de Conceito - Fetch API 🌐

> Este projeto demonstra o uso da API Fetch para realizar requisições assíncronas em um aplicativo web, permitindo a exibição dinâmica de dados.

---

## 📋 Descrição do Projeto

Esta Prova de Conceito (POC) foi desenvolvida para demonstrar como a API Fetch pode ser usada em aplicações web para realizar chamadas HTTP e exibir os dados recebidos de forma dinâmica. O projeto inclui uma interface simples, onde o usuário pode clicar em um botão para buscar imagens de uma API pública e vê-las imediatamente na tela.

A página é completamente responsiva e utiliza HTML, CSS e JavaScript para criar uma experiência interativa. A Fetch API permite realizar requisições HTTP assíncronas e trabalhar com respostas de maneira prática, como mostrado neste projeto.

## 🚀 Funcionalidades

- **Requisições Assíncronas**: Realiza chamadas HTTP utilizando a API Fetch para obter dados de maneira assíncrona.
- **Exibição Dinâmica de Imagens**: Exibe imagens de raposas fornecidas por uma API pública diretamente na interface da página.
- **Botão de Troca de Imagem**: Ao clicar no botão, uma nova imagem é carregada da API e exibida na tela sem recarregar a página.
- **Tratamento de Erros**: Lida com erros que possam ocorrer durante a requisição e exibe mensagens no console para auxiliar no diagnóstico.
- **Indicador de Sucesso**: Exibe no console do navegador uma mensagem de sucesso após o carregamento da imagem.

## 🎨 Layout

A interface do projeto é simples e intuitiva, composta por:

- **Título e Descrição**: Explicam brevemente o propósito do projeto.
- **Área de Exibição de Imagens**: Mostra as imagens obtidas via Fetch.
- **Botão "Trocar Imagem"**: Permite ao usuário buscar novas imagens de raposas de forma dinâmica.
  
Aqui está um exemplo da página inicial:
![tela_inicial](https://github.com/user-attachments/assets/71caa5aa-0ca3-4cb1-83c7-fd52691e2176)


---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização da interface, tornando-a moderna e atraente.
- **JavaScript (Fetch API)**: Responsável pelas requisições HTTP e manipulação dos dados recebidos.

---

## 🖥️ Como Funciona a Fetch API

No JavaScript, a função `getRaposa` utiliza a Fetch API para fazer uma requisição GET a um endpoint da API pública `https://randomfox.ca/floof/`, que retorna uma imagem de raposa em formato JSON. O código exibe essa imagem dinamicamente na página sem a necessidade de recarregar o conteúdo.

### Exemplo de Requisição com Fetch:

```javascript
async function getRaposa(endpoint) {
    try {
        let response = await fetch(endpoint);
        let data = await response.json();
        let urlIGM = data.image;  
        let content = document.getElementById('imagem-container');
        content.innerHTML = `<img src="${urlIGM}" alt="Raposa" />`;
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Sua imagem foi gerada com sucesso!");
    }
}
```
Neste exemplo:

A função fetch() realiza uma requisição HTTP e retorna uma Promise.
Quando a resposta é recebida, ela é convertida em JSON utilizando response.json().
A URL da imagem é extraída do objeto JSON e, em seguida, a imagem é inserida dinamicamente na página.
Indicador de Carregamento:
Para melhorar a experiência do usuário, você pode adicionar um indicador de carregamento que exibe uma mensagem enquanto a requisição está sendo processada.

Fluxo de Execução:
O botão "Trocar Imagem" é clicado.
O getRaposa faz uma nova requisição à API.
A nova imagem é exibida no container da página.

## 🛠️ Verificando Erros e Sucessos no Console do Navegador

Para garantir que o projeto está funcionando corretamente e para diagnosticar possíveis erros, você pode usar o **Console do Navegador**. Ele exibirá mensagens de sucesso ou falha ao carregar a imagem da API.

### Como abrir o Console do Navegador:

1. **Google Chrome**:
   - Clique com o botão direito na página e selecione **Inspecionar**.
   - Vá até a aba **Console**.

2. **Mozilla Firefox**:
   - Clique com o botão direito na página e selecione **Inspecionar Elemento**.
   - Vá até a aba **Console**.

3. **Microsoft Edge**:
   - Clique com o botão direito na página e selecione **Inspecionar**.
   - Acesse a aba **Console**.

4. **Safari**:
   - Ative o menu de desenvolvimento em **Safari > Preferências > Avançado > Mostrar o menu Desenvolvedor na barra de menus**.
   - Depois, selecione **Desenvolvedor > Mostrar Console JavaScript**.

### O que esperar no Console:

- Quando a requisição for bem-sucedida e a imagem for carregada, você verá a mensagem:
  ```plaintext
  Sua imagem foi gerada com sucesso!




