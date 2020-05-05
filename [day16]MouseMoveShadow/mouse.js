const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; //100px;

/**
 * clientX, clientY
 * 클라이언트 영역 내의 가로 세로 좌표
 * 클라이언트 영역은 현재 보이는 브라우저 화면이 기준이됨
 *
 * offsetX, offsetY
 * 위 메서드는 이벤트 대상이 기준이 된다.
 * 화면 중간에 있는 박스 내부에서 클릭한 위치를 찾을때 해당박스의
 * 왼쪽 모서리 좌표가 0이 됩니다. 화면의 기준이 아니다.
 *
 * pageX, pageY
 * 위 메서드는 전체 문서를 기준으로 x,y좌표를 반환, 스크롤을 포함한다.
 *
 * screenX, screenY
 * 위 메서드는 모니터 화면을 기준으로 좌표를 제공
 * 여기서 중요한 점은 브라우저 화면이 아니라 자신의 모니터 화면
 * 전체를 기준으로 좌표를 측정
 *
 * offsetLeft
 * 현재 엘리먼트의 마진과 leftPosition을 더하고
 * 부모 엘리먼트의 leftPosition+padding+scrollbar+border를 더한다.
 * offsetLeft = (the element's leftposition + margin)
 *  + (the parent Element's leftposition+padding+scrollbar+border)
 *
 * offsetWidth
 * 엘리먼트의 width + padding + border + scrollbar
 * 마진은 제외한다.
 *
 * offsetHeight
 * 엘리먼트의 height + padding + border + scrollbar
 * 마진은 제외한다.
 */

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  //마우스가 WOAH 영역(h1)에 들어오면 실행된다.
  //그외의 영역은 빈공간이므로 this와 e.target이 같아진다.
  if (this !== e.target) {
    //offsetX는 h1영역에 오면 0이 되어 버리므로
    //마우스가 H1영역에 들어오면 h1영역의 왼쪽 오프셋을 더하여
    //x값을 조정한다.
    //이 문장을 통하여 offsetX,Y가 h1영역에서 값이 초기화되지 않고 연속적으로 표현이 가능하다.
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  /**
   * xWalk
   * width : 가로 전체(hero)에서 x(offsetX)부분을 *100하면 %로 나옴
   * 거기서 50을 뺀다.
   * xWlak -50~50을 표현함
   *
   * 정리
   * (-50,-50) ~ (xWalk,yWalk) ~ (50,50)을 표현함
   */
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
