export default class Tooltip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);
    this.MouseOver = this.MouseOver.bind(this);
    this.MouseMove = this.MouseMove.bind(this);
    this.MouseLeave = this.MouseLeave.bind(this);
  }

  //Inicia os eventos de mover o mouse e de retirar o cursor
  MouseOver( {currentTarget} ){
    this.CreateBox(currentTarget);
    currentTarget.addEventListener('mousemove',this.MouseMove);
    currentTarget.addEventListener('mouseleave',this.MouseLeave); 
  }

  //É verificado toda vez que movermos o mouse
  //a posição do cursor e é jogado para o top e left da Box
  MouseMove(event){
        this.box.style.top = event.pageY + 20 + 'px';
  if(event.pageX + 200 > window.innerWidth){
    this.box.style.left = event.pageX - 150 + 'px';
      }else{
          this.box.style.left = event.pageX + 20 + 'px';
        }
  }

  MouseLeave(event){
    this.box.remove();
    event.currentTarget.removeEventListener('mousemove',this.MouseMove)
    event.currentTarget.removeEventListener('mouseleave',this.MouseLeave)
}

//Cria uma nova Box com
//O texto colocado dentro do elemento
  CreateBox(element){
    const box = document.createElement('div');
    box.classList.add('tooltip');
    box.innerHTML = element.getAttribute('aria-label');
    document.body.appendChild(box);
    this.box = box;
  }

  init(){
    if(this.tooltips.length)
    this.tooltips.forEach((tool) => tool.addEventListener("mouseover",this.MouseOver));
    return this;
  }
}
/* - ------------------------------------- */
