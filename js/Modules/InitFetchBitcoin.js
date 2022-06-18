export default function FetchBitcoin() {
  fetch("https://blockchain.info/ticker")
.then(Response => Response.json())
.then(Response => {
  const btcPreco = document.querySelector(".btcPreco");

btcPreco.innerHTML = (1000 / Response.BRL.sell).toFixed(4);
})
}
