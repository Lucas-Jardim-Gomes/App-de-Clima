
function buscarClima() {
    const cidade = document.getElementById('cidade').value;

// Controle de erro para campo vazio

    if (cidade.trim() === '') {
        alert('⚠️ Por favor, digite o nome de uma cidade.');
        return
    }

    


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br';

    alert(url);
}
   