export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo", tabContent[0].dataset.anim);

    function changeText(index) {
      tabContent.forEach((text) => {
        text.classList.remove("ativo");
      });
      const direction = tabContent[index].dataset.anim;
      tabContent[index].classList.add("ativo", direction);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        changeText(index);
      });
    });
  }
}
