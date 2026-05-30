const resultado = document.getElementById("resultado");
const telaHome = document.getElementById("tela-home");
const telaCarregamento = document.getElementById("tela-carregamento");
const telaResultado = document.getElementById("tela-resultado");
const botaoVoltar = document.getElementById("btn-voltar");

async function buscarClima() {
    const cidade = document.getElementById("cidade").value;

    // Controle de erro para campo vazio
    if (cidade.trim() === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
        mostrarTela('tela-carregamento');
   
        botaoVoltar.style.display = "none";

        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!resposta.ok) {
            resultado.innerHTML = "Cidade não encontrada";
            mostrarTela('tela-resultado');
            return;
        }

        resultado.innerHTML = `
        <div class="resultado-clima">
            <h2>${dados.name}</h2>
            <p>Temperatura: 🌡️ ${dados.main.temp.toFixed(1)}°C</p>
            <p>Condição: ☁️ ${dados.weather[0].description}</p>
            <p>Umidade: 💧 ${dados.main.humidity}%</p>
            <p>Velocidade do vento: 💨 ${dados.wind.speed} m/s</p>
        </div>
        `;

        botaoVoltar.style.display = "inline-block";
        mostrarTela('tela-resultado');
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar dados";
        console.error(erro);
        mostrarTela('tela-resultado');
    }
}

function voltar() {
    mostrarTela('tela-home');
    botaoVoltar.style.display = "none";
}

function mostrarTela(nomeDaTela) {
    [telaHome, telaCarregamento, telaResultado].forEach(function(tela) {
        tela.classList.add("escondido");
    
    });

    const telaSelecionada = document.getElementById(nomeDaTela);
    if (telaSelecionada) {
        telaSelecionada.classList.remove("escondido");
        
    }
}
