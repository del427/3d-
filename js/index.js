(function ($) {
  var $wrapper = $('.wrapper'),
      $img = $wrapper.children(),
      len = $img.length,
      curIndex = 0,
      value = Math.floor(len / 2);
      var rNum ,lNum;
      var timer = null;
  
  function renderImg () {
    $img.each(function (index,ele) {
      $(ele)
        .removeClass('active')
      if(index < value){
        lNum = curIndex - index - 1;
        $img.eq(lNum).css({transform:'translateX(' + (-150 *(index + 1)) + 'px) translateZ('+(200 - index *100)+'px) rotateY(30deg)' })
        rNum = curIndex + index + 1;
        if(rNum > len - 1){
          rNum -= len;
        }
        $img.eq(rNum).css({transform:'translateX(' + (150 *(index + 1)) + 'px) translateZ('+(200 - index *100)+'px) rotateY(-30deg)' })
      }

    })
    $img.eq(curIndex).css({transform:'translateZ(300px)'}).addClass('active')
  }
  

  function start() {
    
    timer = setInterval(function () {
      if(curIndex === len -1){
        curIndex = 0
      }else{
        curIndex++
      }
      renderImg()
    },1500)
  }

  function bindEvent() {
    $img.on('click',function (e) {
      curIndex = $(e.target).index();
      renderImg()
    }).hover(function (){
      clearInterval(timer)
    },function () {
      start()
    })
  }

  function init() {
    renderImg()
    start()
    bindEvent();
  }
 
  init()
})(jQuery)