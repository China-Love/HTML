var $box = $('.box');

$('ul').on('click','li',function(){
  
 var index = $(this).index();
 console.log(index);

 switch (index) {
         case 0:
         $box.show();
         break;
         case 1:
         $box.hide();
         break;
         case 2:
         $box.slideUp('slow',function(){
                console.log('slideUp complete')
         })
         break;
         case 3:
         $box.slideDown('slow',function(){
            console.log('slideDown complete')
         })
         break;
         case 4:
         $box.slideToggle('slow', function() {
            console.log('slideToggle complete')
         });
         
         break;
         case 5:
         $box.fadeIn('fast',function(){
            console.log('fadeIn complete')
         })
         break;
         case 6:
         $box.fadeOut('fast',function(){
            console.log('fadeOut complete')
         })
         break;
         case 7:
         $box.animate({
             height:'+=50',
             opacity: '0.5',
             width:'+=50' 
         },1000,function(){
   
         })
         break;
 
     default:
         break;
 }

  
})
