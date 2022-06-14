export default function FetchBitcoin() {
  // fetch("https://blockchain.info/ticker")
  //   .then((response) => response.json())
  //   .then((bitcoin) => {
  //     const btcPreco = document.querySelector(".btcPreco");
  //     btcPreco.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4);
  //   })
  //   .catch((erro) => console.log(Error(erro)));

  fetch("https://blockchain.info/ticker")
.then(Response => Response.json())
.then(Response => {
  const btcPreco = document.querySelector(".btcPreco");

btcPreco.innerHTML = (1000 / Response.BRL.sell).toFixed(4);
})
}
