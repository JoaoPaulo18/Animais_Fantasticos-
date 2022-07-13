export default function FetchBitcoin(url,target) {
fetch(url)
.then(Response => Response.json())
.then(Response => {
  const btcPreco = document.querySelector(target);

btcPreco.innerHTML = (1000 / Response.BRL.sell).toFixed(4);
})
}
