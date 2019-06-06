// $.getJSON(
//     'http://192.168.1.237:8084/function/getCarDetail?id=297e7743684b447a01684b4d4dd10011',
//     function(relust){
//         console.log(relust);
//         console.log(JSON.stringify(relust));
//         $('p').text(JSON.stringify(relust));
//     }
// );



// $('.img1').attr('src',jsondata.data.faceImg);
// $('.img2').attr('src',jsondata.data.bevelImg);
// $('.img3').attr('src',jsondata.data.sideImg);
// $('.img4').attr('src',jsondata.data.tailImg);
// $('.img5').attr('src',jsondata.data.interiorImg);
// $('.img6').attr('src',jsondata.data.chairImg);

window.onload=function() {
    // body... 
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var list=document.getElementById("list");
    var buttons=document.getElementById("buttons").getElementsByTagName("span");
    var container=document.getElementById("container");
    var index=1;
    var timer;
    var animated=false;
    
    setData();
    

    function setData(){
        var jsondata ={"status":"SUCCESS","error":"","data":{"id":"297e7743684b447a01684b4d4dd10011","brandId":"120","brandName":"宝骏","seriesId":"4077","seriesName":"宝骏310","typeId":"26546","typeName":"2016款 1.2L 手动舒适型","color":"白色","province":"山西","city":"太原市","county":"迎泽区","price":15000.00,"priceType":"1","guidePrice":39800.00,"urgent":"0","cardDate":"2015-02","distance":10.00,"engineDisplacement":"1.2T","yearDetectionDate":"2015-12-31","trafficDate":"2017-12-31","remark":"hhhhjjjjjjjjjjjjjj","faceImg":"http://192.168.1.237:8080/file/download/data/dealer/carImg/20190115/20190115170303_IMAGE_RECORD1547542905919.jpg","bevelImg":"http://192.168.1.237:8080/file/download/data/dealer/carImg/20190115/20190115170303_IMAGE_RECORD1547542926511.jpg","sideImg":"http://192.168.1.237:8080/file/download/data/dealer/carImg/20190115/20190115170303_IMAGE_RECORD1547542933137.jpg","tailImg":"http://192.168.1.237:8080/file/download/data/dealer/carImg/20190115/20190115170303_IMAGE_RECORD1547542939287.jpg","interiorImg":"http://192.168.1.237:8080/file/download/data/dealer/carImg/20190115/20190115170303_IMAGE_RECORD1547542945597.jpg","chairImg":"http://192.168.1.237:8080/file/download/data/dealer/carImg/20190115/20190115170303_IMAGE_RECORD1547542951780.jpg","dealerContact":"0551-22334567"}};
        $('.content-c1').html(jsondata.data.color);
        $('.content-c2').html(jsondata.data.distance);
        $('.content-c3').html(jsondata.data.engineDisplacement);
        $('.content-c4').html(jsondata.data.cardDate);
        $('.content-c5').html(jsondata.data.yearDetectionDate);
        $('.content-c6').html(jsondata.data.trafficDate);
        $('.content-c7').html(jsondata.data.province+jsondata.data.city+jsondata.data.county);
        $('.describe').html(jsondata.data.remark);
        $('.headtitle-text').html(jsondata.data.brandName+jsondata.data.seriesName+jsondata.data.typeName);
        $('.money').html(jsondata.data.price);
        $('.hsmoney').html(jsondata.data.priceType);
        if(jsondata.data.priceType==0){
            $('.type').html("一口价");
        }else{
            $('.type').html("可议价");
        }
        if(jsondata.data.urgent==0){
            $(".jishou").addClass("hidden");
        }else{
            $(".jishou").removeClass("hidden");
        }

       
 

    }

    $('#list').FlyZommImg({
        rollSpeed: 200,//切换速度
        miscellaneous: false,//是否显示底部辅助按钮
        closeBtn: true,//是否打开右上角关闭按钮
        hideClass: 'hide',//不需要显示预览的 class
        imgQuality: 'thumb',//图片质量类型  thumb 缩略图  original 默认原图
        slitherCallback: function (direction, DOM) {//左滑动回调 两个参数 第一个动向 'left,firstClick,close' 第二个 当前操作DOM
          //console.log(direction,DOM);
        }
      });





 
 
    

    // 开始按下手机的起点坐标
    var startPoint = null;
    $(".section-one")[0].addEventListener("touchstart",function(e){
    	var e = e||window.event;
    	startPoint = e.touches[0];
    })
    $(".section-one")[0].addEventListener("touchend",function(e){
    		var e=e||window.event;
    		//e.changedTouches能找到离开手机的手指，返回的是一个数组
    		var endPoint = e.changedTouches[0];
    		//计算终点与起点的差值
    		var x = endPoint.clientX - startPoint.clientX;
    		var y = endPoint.clientY - startPoint.clientY;
    		//设置滑动距离的参考值
    		var d = 10;
    		if(Math.abs(x)>d){
    			if(x>0){
                console.log("向右滑动");
                    if (!animated) {
                    if (index==1) {
                        index=6;
                    }else {
                       index -=1; 
                    }
                    
                    shownButton();
                         animate(600);
                    }
    			}else{
                console.log("向左滑动");
                    if (!animated) {
                        if (index==6) {
                    index=1;
                    }else {
                        index +=1; 
                    }    
                            shownButton();
                            animate(-600);
                    }
    			}
    		}
    		if(Math.abs(y)>d){
    			if(y>0){
    			console.log("向下滑动");
    			}else{
    			console.log("向上滑动");
    			}
    		}
    	
    })
    
    
    function shownButton(){
         for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
               /* prev和next每click一次，
                就会清除一次前一个class为on的span元素，
                所以没有必要再去循环下面的span*/
                break;
            }
            //  或者直接遍历清除  buttons[i].className=""；
        }
        buttons[index -1].className="on";
    }
    function animate(offset){ 
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
          animated=true;
         var newLeft=parseInt(list.style.left) +offset;
        function go(){
            if ( (speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else 
            {
                
               animated=false;
             // list.style.left=newLeft+"px";
                 if (newLeft >-600) {
             list.style.left=-3000+"px";
                 };
                if (newLeft <-3000) {
             list.style.left=-600+"px";
              };
            }
        }
        go();
    };
       
    prev.onclick=function(){
        /*添加一个if判断index为1时，如果继续往前滚的话就让index返回第五个span
        但是当快速点击arrow时会出现一种span点亮延迟的情况。可以尝试把判断index是否大于1或小于5的情况放进
        判断是否animated的if语句中，先判断能不能点击，再点亮。
        */
       
        if (!animated) {
        if (index==1) {
            index=6;
        }else {
           index -=1; 
        }
        
        shownButton();
             animate(600);
        }
      
       
    };
    next.onclick=function(){
         
        
        
        if (!animated) {
             if (index==6) {
            index=1;
        }else {
           index +=1; 
        }    
             shownButton();
             animate(-600);
        }
    };
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick=function(){
            //无关紧要
            if (this.className=="on") {
                return;
            }
            var myIndex=parseInt(this.getAttribute("index"));
            var offset=-600*(myIndex-index);
             if (!animated) {
             animate(offset);
        }
            index=myIndex;
             shownButton();
        
        }
    }
    
    function play(){
        timer=setInterval(function(){
            next.onclick();
        },2000);
    }
    function stop(){
        clearInterval(timer);
    }
//    play();
// container.onmouseover=stop;
// container.onmouseout=play;
  
}











