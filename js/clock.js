const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}`;
}

getClock();
//새로고침 했을 때에도 바로 보여지게 하기 위해서
setInterval(getClock, 1000);
