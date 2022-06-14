export default function AnimNum() {
  // function animaNumeros() {
  //   const numeros = document.querySelectorAll("[data-numero]");

  //   numeros.forEach((numero) => {
  //     const total = +numero.innerHTML;
  //     const incremento = Math.floor(total / 100);
  //     let start = 0;
  //     const timer = setInterval(() => {
  //       start = start + incremento;
  //       numero.innerHTML = start;
  //       if (start >= total) {
  //         numero.innerHTML = total;
  //         clearInterval(timer);
  //       }
  //     }, 25 * Math.random());
  //   });
  // }

  // function handleMutation(mutation) {
  //   if (mutation[0].target.classList.contains("ativo")) {
  //     observer.disconnect();
  //     animaNumeros();
  //   }
  // }
  // const observeTarget = document.querySelector(".numeros");
  // const observer = new MutationObserver(handleMutation);
  // observer.observe(observeTarget, { attributes: true });

  
  const numeros = document.querySelectorAll("[data-numero]");
  function animaNumeros(){
  if(numeros.length){
    numeros.forEach(number => {
      const total = +number.innerHTML
      const incremento = Math.floor(total / 100);
      let soma  = 0;
      number.innerHTML = 0;

      const Interval = setInterval(()=>{
          soma += incremento;
          number.innerHTML = soma;
          if(soma >= total){
            number.innerHTML = total;
            clearInterval(Interval);
          }
      },25 * Math.random())
    })
  } 
  }

function handleMutation(mutation){
  if(mutation[0].target.classList.contains('ativo'));
  observer.disconnect();
  animaNumeros();
}

  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, { attributes: true });
}



