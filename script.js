const GAME_TIME = Date.parse("2023-10-18T20:00:00")
const timerElement = document.querySelector('.timer');

const start = setInterval(()=>{
    const now = Date.now();
    const restantTime = new Date(GAME_TIME - now);

    const hora = restantTime.getHours().toString().padStart(2, '0');
    const minuto = restantTime.getMinutes().toString().padStart(2, '0');
    const segundo = restantTime.getSeconds().toString().padStart(2, '0');

    timerElement.innerHTML = `${hora}:${minuto}:${segundo}`
},1000);