const apiKey = 'VBjmr+d3$9=X,Qf'



function buscarClima() {
    const cidade = document.getElementById('cidade').value;


    if (cidade === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return
    }


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br';

    alert(url);
}