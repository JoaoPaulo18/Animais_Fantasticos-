// export default function ToolTip() {
//   const tooltips = document.querySelectorAll("[data-tooltip]");

//   function onMouseOver(event) {
//     const tooltipBox = criarTooltipBox(this);

//     onMouseMove.tooltipBox = tooltipBox;
//     this.addEventListener("mousemove", onMouseMove);

//     onMouseLeave.tooltipBox = tooltipBox;
//     onMouseLeave.elemento = this;
//     this.addEventListener("mouseleave", onMouseLeave);
//   }

//   const onMouseLeave = {
//     handleEvent() {
//       this.tooltipBox.remove();
//       this.elemento.removeEventListener("mouseleave", onMouseLeave);
//       this.elemento.removeEventListener("mousemove", onMouseMove);
//     },
//   };

//   const onMouseMove = {
//     handleEvent(event) {
//       this.tooltipBox.style.top = event.pageY + 20 + "px";
//       this.tooltipBox.style.left = event.pageX + 20 + "px";
//     },
//   };

//   function criarTooltipBox(element) {
//     const tooltipBox = document.createElement("div");
//     const text = element.getAttribute("aria-label");
//     tooltipBox.classList.add("tooltip");
//     tooltipBox.innerText = text;
//     document.body.appendChild(tooltipBox);
//     return tooltipBox;
//   }

//   tooltips.forEach((item) => {
//     item.addEventListener("mouseover", onMouseOver);
//   });
// }
export default function Tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function MouseOver(e){
    const Box = CreateBox(this);

    MouseMove.element = Box;
    this.addEventListener('mousemove',MouseMove);

    MouseLeave.element = Box;
    MouseLeave.mainEle = this;
    this.addEventListener('mouseleave',MouseLeave);
    
  }

  const MouseLeave = {
  handleEvent(){
    this.element.remove();
    this.mainEle.removeEventListener('mousemove',MouseMove)
    this.mainEle.removeEventListener('mouseleave',MouseLeave)
  }
  }

  const MouseMove = {
    handleEvent(e){
      this.element.style.top = e.pageY + 20 + 'px';
      this.element.style.left = e.pageX + 20 + 'px';
    }
  }

  function CreateBox(element){
    const box = document.createElement('div');
    box.classList.add('tooltip');
    box.innerHTML = element.getAttribute('aria-label');
    document.body.appendChild(box);
    return box
  }

  tooltips.forEach((tool) => tool.addEventListener("mouseover", MouseOver));
}
/* - ------------------------------------- */
