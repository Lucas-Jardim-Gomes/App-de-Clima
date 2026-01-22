const apiKey = '025eff398ad103ce342660214288e386'



function buscarClima() {
    const cidade = document.getElementById('cidade').value;


    if (cidade === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return
    }


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br';

    fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
        })

        .catch(erro => {
            console.error("Erro:", erro)
        })

    alert(url);
}