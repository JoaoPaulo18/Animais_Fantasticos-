import outsideClick from "./Outside.js";
export default function Menumobile() {
  const Menubutton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if(Menubutton){
    
function HandleClick(event){
  Menubutton.classList.toggle('active');
  menuList.classList.toggle('active');
    outsideClick(menuList,eventos, ()=>{
      event.target.classList.remove('active');
      menuList.classList.remove('active');
})
}

    eventos.forEach(event => Menubutton.addEventListener(event, HandleClick));
  }
}
