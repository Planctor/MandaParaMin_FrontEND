function dolar() {
  var moeda = document.querySelector('#valor');
  var nome = document.querySelector('#nome');
  var a = fetch('https://economia.awesomeapi.com.br/json/all/USDT-BRL');
  a.then(function (r) {
    return r.json();
  }).then(function (jason) {
    nome.innerText = jason.USDT.code + 'T atual:';
    moeda.innerText = jason.USDT.bid.slice(0, 4);
  });
}

dolar()