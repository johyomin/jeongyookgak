$(document).ready(function(){
  // 팝업닫기
  let pop = $('.pop');
  let pop_close = $('.pop-close');
  pop_close.click(function(event){
    // a 태그의 href 로 이동하는 기능 막기
    event.preventDefault();
    
    pop.hide();
  });
});

window.onload = function(){
};

// swiper
new Swiper('.event-left', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '.sw-visual-prev',
    nextEl: '.sw-visual-next'
  },

  pagination: {
    el: '.sw-visual-pg',
    type: 'fraction'
  }
});

