export default class Accordion{
  constructor(list){
    this.quests = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

   handleClick(item){
   item.classList.toggle(this.activeClass);
   item.nextElementSibling.classList.toggle(this.activeClass)
  }

  // Add event listener at the quests
  addAccordionEvent(){
    this.quests.forEach(quest =>{
      quest.addEventListener('click',() => this.handleClick(quest))
    })
  }
  //Start function
  init(){
    if(this.quests.length){
      //Init first item
      this.handleClick(this.quests[0])
      this.addAccordionEvent();
    }
    return this;
  }

}
