$(document).ready(function () {
  // 안내창 기능
  // 추가기능 : 스크롤바 없애기
  $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $('html').css('overflow', 'auto');
  });

  let modalMain = $('.modal-main');
  // 내용 배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $('html').css('overflow', 'auto');
  });

});

$(document).ready(function () {
  // 팝업닫기
  let pop = $('.pop');
  let pop_close = $('.pop-close');
  pop_close.click(function (event) {
    // a 태그의 href 로 이동하는 기능 막기
    event.preventDefault();
    pop.hide();
  });
});

window.onload = function () {
  // swiper
  new Swiper('.event-left', {
    speed: 1000,
    loop: true,
    navigation: {
      prevEl: '.event-left-prev',
      nextEl: '.event-left-next'
    },

    pagination: {
      el: '.event-left-pg',
      type: 'fraction'
    }
  });

};