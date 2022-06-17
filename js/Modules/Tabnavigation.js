export default class TabNav{
  constructor(tabLi, tabcontents){
    this.tabMenu = document.querySelectorAll(tabLi);
    this.tabContent = document.querySelectorAll(tabcontents);
  }

  //Mudando texto ao clique
    changeText(index) {
        this.tabContent.forEach((text) => {
        text.classList.remove("ativo");
      });
      const direction = this.tabContent[index].dataset.anim;
      this.tabContent[index].classList.add("ativo", direction);
    }

    //Iniciar TabNav
    init(){
      //Acionando o primeiro texto da lista
      this.tabContent[0].classList.add("ativo", this.tabContent[0].dataset.anim);
      this.tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
          this.changeText(index);
        });   
      });
      return this;
  }
  
}
