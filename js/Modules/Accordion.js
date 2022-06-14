export default function initAccordion() {
  const quests = document.querySelectorAll('[data-accordion="on"] dt');
  const activeClass = "ativo";

  function handleClick(e){
    e.target.classList.toggle(activeClass);
    e.target.nextElementSibling.classList.toggle(activeClass)
  }

  if (quests.length) {
  quests[0].classList.add(activeClass);
  quests[0].nextElementSibling.classList.add(activeClass)

    quests.forEach(quest =>{
      quest.addEventListener('click',handleClick)
    })
  }
}
