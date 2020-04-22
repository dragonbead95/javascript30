const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

//창틀을 뺀 내용과 스크롤을 포함한 크기
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55"; //선 색 지정
ctx.lineJoin = "round"; //선이 꺽이는 부분을 둥글게
ctx.lineCap = "round"; //선 끝부분을 둥글게
ctx.lineWidth = 100; //선 두께
ctx.globalCompositeOperation = "multiply"; //색깔 혼합이 가능

let isDrawing = false; //선을 그릴수 있게 하는 플래그
let lastX = 0; //이전 X좌표
let lastY = 0; //이전 Y좌표
let hue = 0; //그레디언트 값
let direction = true; //선 두께 값 증감 플래그

function draw(e) {
  //isDrawing이 false이면 선이 안그려진다.
  if (!isDrawing) {
    //stop the an from running when the are not mouse down
    return;
  }

  ctx.strokeStyle = `hsl(${hue},100%,50%)`; //그레디언트로 선색 지정
  //ctx.lineWidth = hue;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY); //x,y좌표로 이동
  // go to
  ctx.lineTo(e.offsetX, e.offsetY); //현재의 드로잉 위치에서 x,y 좌표로 지정된 위치까지 선을 그림
  ctx.stroke(); //윤관석을 이용하여 도형을 그림
  [lastX, lastY] = [e.offsetX, e.offsetY]; //이전좌표에 선의 마지막 좌표를 저장
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  console.log(ctx.lineWidth);
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true; //선을 그릴수 있게 설정
  [lastX, lastY] = [e.offsetX, e.offsetY]; //클릭한 곳의 좌표 저장
});
//마우스를 올리면 선을 그리는 것을 멈춘다.
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
