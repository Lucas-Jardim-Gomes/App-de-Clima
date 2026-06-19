const resultado = document.getElementById("resultado");
const telaHome = document.getElementById("tela-home");
const telaCarregamento = document.getElementById("tela-carregamento");
const telaResultado = document.getElementById("tela-resultado");
const botaoVoltar = document.getElementById("btn-voltar");
const btnModoEscuro = document.getElementById("btn-modo-escuro");

function alternarModoEscuro() {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        btnModoEscuro.textContent = "☀️ Claro";
    } else {
        btnModoEscuro.textContent = "🌙 Escuro";
    } 
}
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
            <div class="card-temperatura">
    <div class="icone-temp">🌡️</div>
    <div class="temp-info">
        <span class="temp-valor">${dados.main.temp.toFixed(1)}°C</span>
        <span class="temp-descricao">${dados.weather[0].description}</span>
    </div>
</div>

<div class="cards-detalhes">
    <div class="card-detalhe">
        <span class="icone-detalhe">💧</span>
        <span class="label-detalhe">Umidade</span>
        <span class="valor-detalhe">${dados.main.humidity}%</span>
    </div>
    <div class="card-detalhe">
        <span class="icone-detalhe">💨</span>
        <span class="label-detalhe">Vento</span>
        <span class="valor-detalhe">${dados.wind.speed} km/h</span>
    </div>
    <div class="card-detalhe">
        <span class="icone-detalhe">🕐</span>
        <span class="label-detalhe">Atualizado</span>
        <span class="valor-detalhe">${new Date().toLocaleTimeString()}</span>
    </div>

</div>
        `;

        botaoVoltar.style.display = "inline-block";
        logo.style.display = "none";
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
    logo.style.display = "";
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
