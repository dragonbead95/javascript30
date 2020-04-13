const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegress = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegress}deg)`;

  //60초중 seconds초 만큼 지나왔을때 360을 곱하여 움직일 각도를 정함
  //초심은 1초에 6도씩 움직임
  //ex) 20초를 움직이고 싶을때는 360/60*20을 하면 된다.
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
