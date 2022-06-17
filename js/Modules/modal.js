export default class Modal {
  constructor(botaoAbrir,botaoFechar,containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    this.preventDefaulter = this.preventDefaulter.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  addEventListeners(){
    this.botaoAbrir.addEventListener("click", this.preventDefaulter);
    this.botaoFechar.addEventListener("click", this.preventDefaulter);
    this.containerModal.addEventListener("click", this.clickForaModal);
  }

    toggleClass(item,classe){
      item.classList.toggle(classe)
    }

     preventDefaulter(event) {
      event.preventDefault();
      this.toggleClass(this.containerModal,'ativo');
    }

     clickForaModal(event) {
      if (event.target === this.containerModal) this.preventDefaulter(event);
    }

    //Caso todos os items existam 
    //coloca EventListener nos mesmos
    init(){
      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
        this.addEventListeners();
      }
      return this;
    }
}
