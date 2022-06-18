export default class Tooltip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);
    this.MouseOver = this.MouseOver.bind(this);
  }

  MouseOver(e,element){
    const Box = this.CreateBox(element);
    element.addEventListener('mousemove',(evento)=> this.MouseMove(evento,Box));

    element.addEventListener('mouseleave',()=> this.MouseLeave(Box,element));
    
  }
  MouseMove(event,Box){
        Box.style.top = event.pageY + 20 + 'px';
        Box.style.left = event.pageX + 20 + 'px';
  }

  MouseLeave(Box,Element){
    Box.remove();
    Element.removeEventListener('mousemove',this.MouseMove)
    Element.removeEventListener('mouseleave',this.MouseLeave)
}


  CreateBox(element){
    const box = document.createElement('div');
    box.classList.add('tooltip');
    box.innerHTML = element.getAttribute('aria-label');
    document.body.appendChild(box);
    return box;
  }

  init(){
    if(this.tooltips.length)
    this.tooltips.forEach((tool) => tool.addEventListener("mouseover",(e)=> this.MouseOver(e,tool)));
    return this;
  }
}
/* - ------------------------------------- */
