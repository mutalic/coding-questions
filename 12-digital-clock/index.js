// HTML Elements
function startClock() {
  let clock = document.querySelector("#clock");
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock.textContent = `
        ${hours < 10 ? "0" + hours : hours}
        :
        ${minutes < 10 ? "0" + minutes : minutes}
        :
        ${seconds < 10 ? "0" + seconds : seconds}
        `;
  }, 1000);
}

startClock();
