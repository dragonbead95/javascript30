function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout); //setTimeout을 중지시킨다.
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args); //true이면 함수호출
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    //half way throught the image
    //scrollY : 스크롤 내린 길이
    //window.innerHeight : 창 세로 길이
    //sliderImage.height : 사진 세로 길이
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;

    //btootm of the image
    //상단에서부터 사진의 밑변까지의 길이
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;

    //아직 사진을 스크롤해서 지나가지 않았으면 true
    //아래로 스크롤 하면 false가 나옴.
    const isNotScrolledPst = window.scrollY < imageBottom;

    //절반정도 지나가고 스크롤을 내리지 않았으면 사진을 활성화한다.
    if (isHalfShown && isNotScrolledPst) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
