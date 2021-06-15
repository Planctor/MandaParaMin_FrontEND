export default function dolar() {
    const moeda = document.querySelector('#valor')
    const nome = document.querySelector('#nome')
   
    const a = fetch('https://economia.awesomeapi.com.br/json/all/USDT-BRL')

    a.then((r) => {
        return r.json()
    }).then((jason) => {
        nome.innerText = jason.USDT.code + 'T atual:'
        moeda.innerText = jason.USDT.bid.slice(0, 4)
    })
}