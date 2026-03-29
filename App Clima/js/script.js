
async function buscarClima() {
// Pega o que o usuário digitou
    const cidade = document.getElementById('cidade').value;
    const resultado = document.getElementById("resultado")


    // Controle de erro para campo vazio

    if (cidade.trim() === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return
    }

    try {
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    // Faz a requisição para a API de clima
        const resposta = await fetch(url)
    // Transforma a resposta em objeto
        const dados = await resposta.json()


        if (dados.cod === "404" || dados.cod === 404) {
            resultado.innerHTML = "Cidade não encontrada";
            return;
        }

    //  Sucesso
     resultado.innerHTML = `
            <h2>${dados.name}</h2>
            <p>🌡️ ${dados.main.temp}°C</p>
            <p>☁️ ${dados.weather[0].description}</p>
        `;
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar dados";
        console.error(erro);
    }
}
