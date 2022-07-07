export default class AnimNum {
  constructor(elements,Target,Class){
    this.numeros = document.querySelectorAll(elements);
    this.observeTarget = document.querySelector(Target);
    this.observer;
    this.observerClass = Class;
    this.animaNumeros = this.animaNumeros.bind(this);
    this.handleMutation = this.handleMutation.bind(this);
  } 

  //Recebe um elemento do dom, com número em seu texto
  //incrementa a partir de 0 até o número final
 static incremetarNumber(numero){
    const total = +numero.innerHTML
    const incremento = Math.floor(total / 100);
    let soma  = 0;
    numero.innerHTML = 0;

    const Interval = setInterval(()=>{
        soma += incremento;
        numero.innerHTML = soma;
        if(soma >= total){
          numero.innerHTML = total;
          clearInterval(Interval);
        }
    },25 * Math.random())
  }

  //Ativa incrementar número para cada
  //número selecionado no DOM
   animaNumeros(){
    this.numeros.forEach(number => this.constructor.incremetarNumber(number))
}

 handleMutation(mutation){
  if(mutation[0].target.classList.contains(this.observerClass)){
  this.observer.disconnect();
  this.animaNumeros();
}
}

  init(){
    if(this.numeros.length && this.observeTarget && this.observerClass){
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observeTarget, { attributes: true });
    }
    return this;
  }
}
