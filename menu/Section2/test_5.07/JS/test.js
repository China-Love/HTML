$(function(){
  $('.btn-on').on('click',function(){
    $('img').toggleClass('active') 
    console.log('jquery');   
  })
})



var myAuto = document.getElementById('myaudio');


document.querySelector('img').addEventListener('click',function(){
 
  if(document.querySelector('img').classList.contains('paused') ) {
    pausedVideo();
  }
  else{
    
    playVideo();
  }
})

var playVideo = function(){
  document.querySelector('img').classList.add('paused')  
 
  myAuto.pause(); 
}

var pausedVideo = function(){
  document.querySelector('img').classList.remove('paused')  
  myAuto.play(); 
}


 
  
setTimeout(function(){

console.log('222222222'); 

// document.querySelector("img").click();


}, 500);
