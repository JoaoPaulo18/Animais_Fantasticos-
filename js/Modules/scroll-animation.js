export default class animationScroll {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.animaScroll = this.animaScroll.bind(this)
  }

animaScroll(){
  //Pegando a metade da tela do usuário 
  const windowMetade = window.innerHeight * 0.6;
    this.sections.forEach(section => {
      //Pegando o quão longe 
      //está a section do topo
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
    if(isSectionVisible) section.classList.add('ativo');
    })
  }
  
init(){
  if(this.sections.length){
  //Faz com que pelo menos a primeira section
  //apareça sem haver scroll
  this.animaScroll();
  window.addEventListener('scroll', this.animaScroll);
    }
  }
}