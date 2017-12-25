    var bannerObj = {
      warpDiv:'',//播外容器dom
      indexUl:'',//轮播图下方控制点外部容器
      indexLi:'',//轮播图下方控制点集合
      lbLg:0,//轮播图长度
      startHtml:'',//轮播图初始长度
      lbDiv:'',//轮播图的集合
      lbImgH:0,//轮播图的高度
    };
    bannerObj.warpDiv = $('#warpDiv');//获取轮播外容器dom
    bannerObj.indexUl = $('#imgIndexUl');//获取轮播图下方控制点的外部容器
    bannerObj.lbLg = bannerObj.warpDiv.children().length;//获取需要轮播的初始长度
    var indexHtml='';
    for(var i=0;i<bannerObj.lbLg;i++){
      indexHtml+='<li>'+(i+1)+'</li>';
    }
    bannerObj.indexUl.append(indexHtml);
    bannerObj.indexUl.width(bannerObj.lbLg*52);
    bannerObj.indexLi = bannerObj.indexUl.children();//获取轮播图下方控制点集合
    bannerObj.indexLi.eq(0).addClass('imgInddexCurrent');

    bannerObj.startHtml = bannerObj.warpDiv.html();//获取需要轮播的内容
    bannerObj.warpDiv.prepend(bannerObj.startHtml);
    bannerObj.warpDiv.append(bannerObj.startHtml);
    bannerObj.lbDiv = bannerObj.warpDiv.children();//获取真正轮播的dom
    bannerObj.lbImgH = bannerObj.warpDiv.children().find('img').height();
    bannerObj.warpDiv.height(bannerObj.lbImgH);

    var showCenter = {
      'width':'50%',
      'height':'auto',
      'left':'25%',
      'top':'0',
      'margin-top':''+(bannerObj.lbImgH*(0)/2)+'',
      'z-index':'4',
      'visibility': 'visible'
    };
    var showLeft1 ={
      'width':'40%',
      'height':'auto',
      'left':'0',
      'top':'0',
      'margin-top':bannerObj.lbImgH*(0.1)/2,
      'z-index':'3',
      'visibility': 'visible'
    };
    var showLeft2 = {
      'width':'30%',
      'height':'auto',
      'left':'-10%',
      'top':'0',
      'margin-top':bannerObj.lbImgH*(0.2)/2,
      'z-index':'2',
      'visibility': 'visible'
    };
    var showLeft3 = {
      'width':'20%',
      'height':'auto',
      'left':'-20%',
      'top':'0',
      'margin-top':bannerObj.lbImgH*(0.3)/2,
      'z-index':'1',
      'visibility': 'visible'
    };
    var showRight1 = {
      'width':'40%',
      'height':'auto',
      'left':'60%',
      'top':'0',
      'margin-top':bannerObj.lbImgH*(0.1)/2,
      'z-index':'3',
      'visibility': 'visible'
    };
    var showRight2 = {
      'width':'30%',
      'height':'auto',
      'left':'70%',
      'top':'0',
      'margin-top':bannerObj.lbImgH*(0.2)/2,
      'z-index':'2',
      'visibility': 'visible'
    };
    var showRight3 = {
      'width':'20%',
      'height':'auto',
      'left':'80%',
      'top':'0',
      'margin-top':bannerObj.lbImgH*(0.3)/2,
      'visibility': 'visible',
      'z-index':'1'

    };
    lbReset();

    //轮播图片点击切换
    bannerObj.lbDiv.click(function(){
      bannerObj.lbDiv.css({'z-index':'1'});
      clearInterval(lbSet);
      thisIndex = $(this).index();//获取当前下标
      imgIndexUlChange(thisIndex);
      var _this = $(this);
      moveF(thisIndex,_this);
      lbSet = setInterval(setFun,4000);
    })

    var thisIndex = bannerObj.lbLg;
    var lbSet = setInterval(setFun,4000);

    //点击下方圆点切换轮播
    bannerObj.indexUl.delegate('li','click',function(){
      clearInterval(lbSet);
      bannerObj.lbDiv.css({'z-index':'1'});
      thisIndex = $(this).index();//获取当前下标
      bannerObj.indexLi.removeClass('imgInddexCurrent');
      $(this).addClass('imgInddexCurrent');
      var _this = bannerObj.lbDiv.eq(thisIndex+bannerObj.lbLg);
      moveF(thisIndex+bannerObj.lbLg,_this);
      thisIndex = thisIndex+bannerObj.lbLg;
      lbSet = setInterval(setFun,4000);
    })
    function moveF(clickIndex,clickDom){
      if(bannerObj.lbLg-2<clickIndex &&clickIndex<2*bannerObj.lbLg-1){
        console.log(1)
        clickDom.css({'z-index':'4'}).animate(showCenter,300);
        clickDom.prev().css({'z-index':'3'}).animate(showLeft1,300);
        clickDom.prev().prev().css({'z-index':'2'}).animate(showLeft2,300);
        clickDom.prev().prev().prev().css({'z-index':'1'}).animate(showLeft3,300);
        clickDom.next().css({'z-index':'3'}).animate(showRight1,300);
        clickDom.next().next().css({'z-index':'2'}).animate(showRight2,300);
        clickDom.next().next().next().css(showRight3);
      }else if(clickIndex == 2*bannerObj.lbLg-1){
        console.log(2)
        clickDom.css({'z-index':'4'}).animate(showCenter,300);
        clickDom.prev().css({'z-index':'3'}).animate(showLeft1,300);
        clickDom.prev().prev().css({'z-index':'2'}).animate(showLeft2,300);
        clickDom.prev().prev().prev().css({'z-index':'1'}).animate(showLeft3,300);
        clickDom.next().css({'z-index':'3'}).animate(showRight1,300);
        clickDom.next().next().css({'z-index':'2'}).animate(showRight2,300);
        clickDom.next().next().next().css({'z-index':'1'}).animate(showRight3,300,lbResetStart);
      }else if(clickIndex == bannerObj.lbLg-2 ){
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
    //下方圆点自动切换
    function imgIndexUlChange(activeIndex){
      if(activeIndex>=bannerObj.lbLg){
        bannerObj.indexLi.removeClass('imgInddexCurrent');
        bannerObj.indexLi.eq(activeIndex-bannerObj.lbLg).addClass('imgInddexCurrent');
      }else{
        bannerObj.indexLi.removeClass('imgInddexCurrent');
        bannerObj.indexLi.eq(activeIndex).addClass('imgInddexCurrent');
      }
    }
    function setFun(){
        thisIndex++;//获取当前下标
        if(1<thisIndex &&thisIndex<2*bannerObj.lbLg){
          thisIndex = thisIndex;
        }else{
          thisIndex = bannerObj.lbLg;
        }
        imgIndexUlChange(thisIndex);
        var _this = bannerObj.lbDiv.eq(thisIndex);
        moveF(thisIndex,_this);
    }
    function lbReset(){
      bannerObj.lbDiv.css({'z-index':'1'});
      bannerObj.lbDiv.eq(bannerObj.lbLg).css(showCenter);
      bannerObj.lbDiv.eq(bannerObj.lbLg-1).css(showLeft1);
      bannerObj.lbDiv.eq(bannerObj.lbLg-2).css(showLeft2);
      bannerObj.lbDiv.eq(bannerObj.lbLg-3).css(showLeft3);
      bannerObj.lbDiv.eq(bannerObj.lbLg+1).css(showRight1);
      bannerObj.lbDiv.eq(bannerObj.lbLg+2).css(showRight2);
      bannerObj.lbDiv.eq(bannerObj.lbLg+3).css(showRight3);
    }
    function lbResetStart(){
      bannerObj.lbDiv.css({'z-index':'1'});
      bannerObj.lbDiv.eq(bannerObj.lbLg-1).css(showCenter);
      bannerObj.lbDiv.eq(bannerObj.lbLg-2).css(showLeft1);
      bannerObj.lbDiv.eq(bannerObj.lbLg-3).css(showLeft2);
      bannerObj.lbDiv.eq(bannerObj.lbLg).css(showRight1);
      bannerObj.lbDiv.eq(bannerObj.lbLg+1).css(showRight2);
      bannerObj.lbDiv.eq(bannerObj.lbLg+2).css(showRight3);
    }
    function lbResetEnd(){
      bannerObj.lbDiv.css({'z-index':'1'});
      bannerObj.lbDiv.eq(2*bannerObj.lbLg-2).css(showCenter);
      bannerObj.lbDiv.eq(2*bannerObj.lbLg-3).css(showLeft1);
      bannerObj.lbDiv.eq(2*bannerObj.lbLg-4).css(showLeft2);
      bannerObj.lbDiv.eq(2*bannerObj.lbLg-1).css(showRight1);
      bannerObj.lbDiv.eq(2*bannerObj.lbLg).css(showRight2);
      bannerObj.lbDiv.eq(2*bannerObj.lbLg+1).css(showRight3);
    }
