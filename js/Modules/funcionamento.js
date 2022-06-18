export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

    const newDate = new Date();
    const Days = newDate.getDay();
    const Hour = newDate.getHours();
  
    const DateCorrect = diasSemana.indexOf(Days) != -1;
    const HoursCorrect = Hour > 8 && Hour <= 18;

    if(DateCorrect && HoursCorrect)
    funcionamento.classList.add("aberto");
}