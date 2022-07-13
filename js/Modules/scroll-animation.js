import debounce from './Debounce.js'

export default class animationScroll {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    //Pegando a metade da tela do usuário 
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50)
  }

  getDistance(){
    // Transforma nossa NodeList em Array
    // Retona uma array com a seção e seu offSetTop
    // E ja desconta no seu OffSet o WindowMetade
  this.distances = Array.from(this.sections).map(section =>{
     const sectionTop = section.offsetTop;
     return{section,sectionTop:Math.floor(sectionTop - this.windowMetade)}})
      }

      // Verifica se a posição do scrollY
      // É maior que a posição da seção
      checkDistance(){
        console.log('oi')
        this.distances.forEach(item => {
          if(window.scrollY > item.sectionTop)
          item.section.classList.add('ativo')
          else if(item.section.classList.contains("ativo"))
          item.section.classList.remove('ativo')
        })
      }

  
init(){
  if(this.sections.length){
    // Pega a distancia do topo
    // De cada Section
    this.getDistance();

    // Faz com que pelo menos a primeira section
    // Apareça sem haver scroll
    this.checkDistance();

    window.addEventListener('scroll', this.checkDistance);
    }
    return this
  }

  // Um método para que possamos
  // Parar a animação a qualquer momento
  stop(){
    window.removeEventListener('scroll',this.checkDistance)
  }
}