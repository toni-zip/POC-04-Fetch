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

window.onload = () => {
    getRaposa("https://randomfox.ca/floof/"); //Para iniciar a pagina tendo um imagem

    document.getElementById('trocar-imagem').addEventListener('click', function() { //Para quando clicar no botão gerar uma nova imagem
        getRaposa("https://randomfox.ca/floof/");
    });
};
