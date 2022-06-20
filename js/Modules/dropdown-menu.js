import outsideClick from "./Outside.js";   
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach(drop =>{
  ['touchstart','click'].forEach(event => drop.addEventListener(event,HandleClick))
})

function HandleClick(event){
  event.preventDefault();
  this.classList.toggle('active');
  outsideClick(this,['touchstart','click'], ()=> this.classList.remove('active'))
}
}
