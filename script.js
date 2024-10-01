async function getRaposa(endpoint) {
    try {
        let response = await fetch(endpoint);
        let data = await response.json();
        let urlIGM = data.image;  
        let content = document.getElementById('imagem-container');
        content.innerHTML += `<img src="${urlIGM}" alt="Raposa" />`;
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Sua imagem foi gerado com sucesso!");
    }
}

window.onload = () => {
    getRaposa("https://randomfox.ca/floof/");
};
