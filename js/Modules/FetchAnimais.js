import Animais from './Anima-numeros.js';

export default function Fecth(){
    function createAnimal(Animal){
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${Animal.especie}</h3><span data-numero>${Animal.quantidade}</span>`;
      return div;
    }

    async function FecthAnimal(url){
      try{
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid');
        animaisJSON.forEach(animal => {
          const divAnimal = createAnimal(animal);
          numerosGrid.appendChild(divAnimal);
        })
        const animaNumeros = new Animais("[data-numero]",".numeros",'ativo');
        animaNumeros.init();
      }catch(erro){
        console.log(erro)
      }
    }
    FecthAnimal('.././Animais.json');
}