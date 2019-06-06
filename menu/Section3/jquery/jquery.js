
$('.jquery-demo>.tab div').on('click',function(){
  $(this).addClass('active')
         .siblings()
         .removeClass('active');

  var index = $(this).index();   
  $('.jquery-demo .content').children().eq(index)
         .addClass('active')
         .siblings()
         .removeClass('active');

 
})


document.querySelector('.dom-demo>.tab').addEventListener('click',function(ele){
    var arr = document.querySelectorAll('.dom-demo>.tab div');
    var index;
   
    arr.forEach(function(e,i,array){
       if(e.classList.contains('active')){
           e.classList.remove('active');
       }
       if(e === ele.target){
           index = i;
           
       }
      
    });
    ele.target.classList.add('active');

    console.log(index);

    var Arr = document.querySelectorAll('.dom-demo>.content div');
    
    Arr.forEach(function(e,i,array){
       if(e.classList.contains('active')){
           e.classList.remove('active');
       }
       if(i === index){
        e.classList.add('active');
       }
    });



})



$('.on-off-btn').on('click',function(){
    console.log('22222');
    $('.on-off-btn').toggleClass('on');
   
});