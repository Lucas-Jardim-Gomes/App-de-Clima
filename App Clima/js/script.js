async function buscarClima() {

// Pega o que o usuário digitou
    const cidade = document.getElementById("cidade").value;
    document.getElementById("btn-voltar").style.display = "block";
   

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
            <p>💧 ${dados.main.humidity}%</p>
            <p>💨 ${dados.wind.speed} m/s</p>
        `;
 

        // Esconde a tela de busca e mostra a tela de resultado
        document.getElementById("tela-busca").style.display = "none";
        document.getElementById("tela-resultado").style.display = "block";
        

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar dados";
        console.error(erro);
    }
}

// Função para voltar para a tela de busca
function voltar() {
    document.getElementById("tela-busca").style.display = "block";
    document.getElementById("tela-resultado").style.display = "none";
    document.getElementById("btn-voltar").style.display = "none";

}
