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