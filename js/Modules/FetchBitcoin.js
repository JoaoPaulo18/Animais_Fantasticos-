export default function FetchBitcoin(fetch,target) {
  fetch(fetch)
.then(Response => Response.json())
.then(Response => {
  const btcPreco = document.querySelector(target);

btcPreco.innerHTML = (1000 / Response.BRL.sell).toFixed(4);
})
}
