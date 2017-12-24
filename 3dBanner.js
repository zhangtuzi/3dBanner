
    var warpDiv = $('#warpDiv');//获取轮播外容器dom
    var lbLg = warpDiv.children().length;//获取需要轮播的初始长度
    var startHtml = warpDiv.html();//获取需要轮播的内容
    warpDiv.prepend(startHtml);
    warpDiv.append(startHtml);
    var lbDiv = warpDiv.children();//获取真正轮播的dom
    var lbImgH = warpDiv.children().find('img').height();
    // alert(lbImgH);
    $('#warpDiv').height(lbImgH);

    var showCenter = {
      'width':'50%',
      'height':'auto',
      'left':'25%',
      'top':'0',
      'margin-top':''+(lbImgH*(0)/2)+'',
      'z-index':'4',
      'visibility': 'visible'
    };
    var showLeft1 ={
      'width':'40%',
      'height':'auto',
      'left':'0',
      'top':'0',
      'margin-top':lbImgH*(0.1)/2,
      'z-index':'3',
      'visibility': 'visible'
    };
    var showLeft2 = {
      'width':'30%',
      'height':'auto',
      'left':'-10%',
      'top':'0',
      'margin-top':lbImgH*(0.2)/2,
      'z-index':'2',
      'visibility': 'visible'
    };
    var showLeft3 = {
      'width':'20%',
      'height':'auto',
      'left':'-20%',
      'top':'0',
      'margin-top':lbImgH*(0.3)/2,
      'z-index':'1',
      'visibility': 'visible'
    };
    var showRight1 = {
      'width':'40%',
      'height':'auto',
      'left':'60%',
      'top':'0',
      'margin-top':lbImgH*(0.1)/2,
      'z-index':'3',
      'visibility': 'visible'
    };
    var showRight2 = {
      'width':'30%',
      'height':'auto',
      'left':'70%',
      'top':'0',
      'margin-top':lbImgH*(0.2)/2,
      'z-index':'2',
      'visibility': 'visible'
    };
    var showRight3 = {
      'width':'20%',
      'height':'auto',
      'left':'80%',
      'top':'0',
      'margin-top':lbImgH*(0.3)/2,
      'z-index':'1',
      'visibility': 'visible'
    };
    lbReset();
    function moveF(clickIndex,clickDom){
      if(lbLg-2<clickIndex &&clickIndex<2*lbLg-1){
        console.log(1)
        clickDom.css({'z-index':'4'}).animate(showCenter,300);
        clickDom.prev().css({'z-index':'3'}).animate(showLeft1,300);
        clickDom.prev().prev().css({'z-index':'2'}).animate(showLeft2,300);
        clickDom.prev().prev().prev().css({'z-index':'1'}).animate(showLeft3,300);
        clickDom.next().css({'z-index':'3'}).animate(showRight1,300);
        clickDom.next().next().css({'z-index':'2'}).animate(showRight2,300);
        clickDom.next().next().next().css({'z-index':'1'}).animate(showRight3,300);
      }else if(clickIndex == 2*lbLg-1){
        console.log(2)
        clickDom.css({'z-index':'4'}).animate(showCenter,300);
        clickDom.prev().css({'z-index':'3'}).animate(showLeft1,300);
        clickDom.prev().prev().css({'z-index':'2'}).animate(showLeft2,300);
        clickDom.prev().prev().prev().css({'z-index':'1'}).animate(showLeft3,300);
        clickDom.next().css({'z-index':'3'}).animate(showRight1,300);
        clickDom.next().next().css({'z-index':'2'}).animate(showRight2,300);
        clickDom.next().next().next().css({'z-index':'1'}).animate(showRight3,300,lbResetStart);
      }else if(clickIndex == lbLg-2 ){
        console.log(3)
        clickDom.css({'z-index':'4'}).animate(showCenter,300);
        clickDom.prev().css({'z-index':'3'}).animate(showLeft1,300);
        clickDom.prev().prev().css({'z-index':'2'}).animate(showLeft2,300);
        clickDom.prev().prev().prev().css({'z-index':'1'}).animate(showLeft3,300);
        clickDom.next().css({'z-index':'3'}).animate(showRight1,300);
        clickDom.next().next().css({'z-index':'2'}).animate(showRight2,300);
        clickDom.next().next().next().css({'z-index':'1'}).animate(showRight3,300,lbResetEnd);
      }
    }
    lbDiv.click(function(){
      lbDiv.css({'z-index':'1'});
      // clearInterval(lbSet);
      thisIndex = $(this).index();//获取当前下标
      console.log(thisIndex)
      var _this = $(this);
      moveF(thisIndex,_this);
      // lbSet = setInterval(setFun,2000)
    })
    var thisIndex = lbLg;
    // var lbSet = setInterval(setFun,2000)
    function setFun(){
        thisIndex++;//获取当前下标
        if(1<thisIndex &&thisIndex<2*lbLg){
          thisIndex = thisIndex;
        }else{
          thisIndex = lbLg;
        }
        var _this = lbDiv.eq(thisIndex);
        moveF(thisIndex,_this);
    }
    function lbReset(){
      lbDiv.css({'z-index':'1'});
      lbDiv.eq(lbLg).css(showCenter);
      lbDiv.eq(lbLg-1).css(showLeft1);
      lbDiv.eq(lbLg-2).css(showLeft2);
      lbDiv.eq(lbLg-3).css(showLeft3);
      lbDiv.eq(lbLg+1).css(showRight1);
      lbDiv.eq(lbLg+2).css(showRight2);
      lbDiv.eq(lbLg+3).css(showRight3);
    }
    function lbResetStart(){
      lbDiv.css({'z-index':'1'});
      lbDiv.eq(lbLg-1).css(showCenter);
      lbDiv.eq(lbLg-2).css(showLeft1);
      lbDiv.eq(lbLg-3).css(showLeft2);
      lbDiv.eq(lbLg).css(showRight1);
      lbDiv.eq(lbLg+1).css(showRight2);
      lbDiv.eq(lbLg+2).css(showRight3);
    }
    function lbResetEnd(){
      lbDiv.css({'z-index':'1'});
      lbDiv.eq(2*lbLg-2).css(showCenter);
      lbDiv.eq(2*lbLg-3).css(showLeft1);
      lbDiv.eq(2*lbLg-4).css(showLeft2);
      lbDiv.eq(2*lbLg-1).css(showRight1);
      lbDiv.eq(2*lbLg).css(showRight2);
      lbDiv.eq(2*lbLg+1).css(showRight3);
    }
