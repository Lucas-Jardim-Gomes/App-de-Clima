


function buscarClima() {
    const cidade = document.getElementById('cidade').value;

// Validação simples para garantir que o campo não está vazio
    if (cidade === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return
    }

    try {
        const resposta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br')

        const dados = await resposta.json()


// Cidade não encontrada
    if (dados.cod === 404 || deleteAllPersistentCacheIndexes.cod === '404') {
        resultado.innerHTML = " Cidade não encontrada. Por favor, verifique o nome e tente novamente.";

        return
    }
    }

// Sucesso na requisição
    catch resultado.innerHTML = ` 
    h2>Clima em ${dados.name}</h2>
    p>Temperatura: ${dados.main.temp} °C</p>
    p>Descrição: ${dados.weather[0].description}</p>
    p>Umidade: ${dados.main.humidity}%</p>
    p>Velocidade do Vento: ${dados.wind.speed} m/s</p>
    `;
    } catch (erro) {
        // Erro na requisição
        resultado.innerHTML = "Erro ao Buscar os dados do Clima";
}