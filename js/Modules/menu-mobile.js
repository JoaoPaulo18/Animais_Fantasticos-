import outsideClick from "./Outside.js";
export default class Menumobile {
  constructor(Menubutton,menuList,events){    
    this.Menubutton = document.querySelector(Menubutton);
    this.menuList = document.querySelector(menuList);
    this.eventos = events;
    this.HandleClick = this.HandleClick.bind(this);
  }
 
  HandleClick(){
  this.Menubutton.classList.add('active');
  this.menuList.classList.add('active');
    outsideClick(this.menuList,this.eventos, ()=>{
     this.Menubutton.classList.remove('active');
     this.menuList.classList.remove('active');
})
}

init(){
  if(this.Menubutton){ 
    this.eventos.forEach(event => this.Menubutton.addEventListener(event, this.HandleClick));
  }
  return this;
}
}
