import Animais from './Anima-numeros.js';

export default function Fecth(url,target){
  const numerosGrid = document.querySelector(target);

  //Cria a div contendo informações
  // com o total de animais e seu tipo
    function createAnimal(Animal){
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${Animal.especie}</h3><span data-numero>${Animal.quantidade}</span>`;
      return div;
    }

    //Para cada animal
    //Cria uma div com os valores
    function preencherAnimais(animal){
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    }

    //Com o DOM todo criado 
    //Chamamos a classe para iniciar
    //A animação dos números+
    function animaAnimasNumeros(){
      const animaNumeros = new Animais("[data-numero]",".numeros",'ativo');
      animaNumeros.init();
    }

    //Puxa os animais através de um arquivo json
    // e cria cada animal utilizando createAnimal
    async function FecthAnimal(url){
      try{
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        animaisJSON.forEach(animal => preencherAnimais(animal));
        animaAnimasNumeros();
      }catch(erro){
        console.log(erro)
      }
    }
    return FecthAnimal(url);
}