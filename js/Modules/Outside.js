export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

if(!element.hasAttribute(outside)){
  events.forEach(()=>{
    setTimeout(()=>{
      html.addEventListener('click',HandleClickOutside);
    },0)
  })
  element.setAttribute(outside,'');
}
  function HandleClickOutside(event){
    if(!element.contains(event.target)){
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, HandleClickOutside);
      });
      callback();
    }
  }
}
