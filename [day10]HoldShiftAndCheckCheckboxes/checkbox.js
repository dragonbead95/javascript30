const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  //쉬프트키를 눌렀는지 검사함
  //그리고 체크박스가 체크되었는지 검사함
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //두조건이 만족하면 체크박스들을 순회한다.

    //go ahead and do what we please
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      //반복문으로 참조한 checkbox가 현재 클릭한 체크박스 이거나
      //이전에 선택한 체크박스이면 inBetween 변수를 토글시킨다.
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them inbetween");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
