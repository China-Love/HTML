var songstartfirst= true;
var nowsongindex = 0;

var songArr = [];

$.get(
    'https://easy-mock.com/mock/5bc540424902794864203461/example/music',
    function(relust){
        songArr = relust.data;
        $.each( songArr, function( index, value ) {
         
           var songname = value.songName;
           var singerName = value.singerName;
           var album_img = value.album_img;
           var timeLength = value.timeLength;
           timeLength= formatTime(timeLength);
           album_img=album_img.replace("\/{size}","");
           
           var htmlstr =  '<li class="clearfix">'+'<img src='+album_img+' alt="">'+'<p>'+timeLength+'</p>'+'<div>'+'<p>'+songname+'</p>'+'<p>'+singerName+'</p>'+'</div>'+'</li>'
           $('.musiclist').append(htmlstr);
        });
        $('.author').text(songArr[0].singerName);
        $('.songname').text(songArr[0].songName);
        $('.cover').css('background','url('+songArr[0].album_img.replace("\/{size}","")+')');
        console.log(songArr[0].album_img);

     
    }
);



// 播放按钮

$('.last').on('click',function(){
    
    if(nowsongindex===0){
        nowsongindex=songArr.length-1;
        changesong(nowsongindex);
    }else
    {
        nowsongindex=nowsongindex-1;
        changesong(nowsongindex);
    }
    
})
$('.next').on('click',function(){
    if(nowsongindex===songArr.length-1){
        nowsongindex=0;
        changesong(nowsongindex);
    }else
    {
        nowsongindex=nowsongindex+1;
        changesong(nowsongindex);
    }
})
var myAuto = document.getElementById('myaudio');
// var $myAuto = $('#myaudio');  jq 对象 没有dom方法
myAuto.autoPlay = false ; //设置为自动播放，下次更换 audioObject.src 后会自动播放音乐
console.log(myAuto.autoPlay);

$('.switch').on('click',function(){
    
  
    $('.switch').toggleClass('play');
    if(songstartfirst){
       songstartfirst=false;
       changesong(0)
    }else{
        if($('.switch').hasClass('play')){
            myAuto.play()
            $('.switch').html('&#xe76a;');
            console.log(1)
        }else{
            myAuto.pause()
            $('.switch').html('&#xe68a;');
            console.log(2)
        }
    }
   
    
});

$('ul').on('click','li',function(e){
  var index = $(this).index();

    if(nowsongindex!=index){
        changesong(index); 
       
      }else{
        if(songstartfirst && nowsongindex===0){ //第一次点击列表播放且是第一首
           songstartfirst=false;
           changesong(index); 
           
        }else{
            $('.switch').toggleClass('play');
            changeswitch();
            
        }
      }
      nowsongindex =index;
  

  
});

var changesong = function(index){
   
    var album_img = songArr[index].album_img;
    album_img=album_img.replace("\/{size}","");
   
    $(myAuto).attr('src',songArr[index].url)
    $('li').eq(index).siblings().removeClass('playing');
    $('li').eq(index).addClass('playing');
    $('.author').text(songArr[index].singerName);
    $('.songname').text(songArr[index].songName);
    $('.cover').css('background','url('+album_img+')');

    $('.switch').addClass('play');

    changeswitch();
  
}

var changeswitch = function(){

   

    if($('.switch').hasClass('play')){
        myAuto.play()
        $('.switch').html('&#xe76a;');
        console.log('播放');
    }else{
        myAuto.pause()
        $('.switch').html('&#xe68a;');
        console.log('暂停');
        
    }
}



myAuto.addEventListener('ended', function(){
    $('.next').trigger('click');
    console.log('完成');
})


myAuto.shouldUpdate = true
myAuto.ontimeupdate = function(){
  var _this = this
  if(_this.shouldUpdate) {
    
    console.log(myAuto.currentTime,myAuto.duration);
    var progress = myAuto.currentTime/myAuto.duration*280;
    $('.lineprogress').css('width',''+ progress);
    
    $('.time').text(formatTime(myAuto.currentTime));

     _this.shouldUpdate = false
    setTimeout(function(){
      _this.shouldUpdate = true
    }, 1000)
  }
}


function formatTime(seconds) {
    return [
        // parseInt(seconds / 60 / 60),
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1");
}
