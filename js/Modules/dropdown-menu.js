import outsideClick from "./Outside.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  // dropdownMenus.forEach((menu) => {
  //   ["touchstart", "click"].forEach((userEvent) => {
  //     menu.addEventListener(userEvent, handleClick);
  //   });
  // });
  // function handleClick(event) {
  //   event.preventDefault();
  //   this.classList.add("active");
  //   outsideClick(this, ["touchstart", "click"], () => {
  //     this.classList.remove("active");
  //   });
  // }



dropdownMenus.forEach(drop =>{
  ['touchstart','click'].forEach(event => drop.addEventListener(event,HandleClick))
})

function HandleClick(event){
  event.preventDefault();
  this.classList.add('active');
  outsideClick(this,['touchstart','click'],()=> this.classList.remove('active'))
}
}
