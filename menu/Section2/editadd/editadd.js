
var imgUrl = function(){
  var random =Math.floor(Math.random()*98)+1; 
  console.log(random);
  return `https://picsum.photos/200/200/?image=${random}`;
}


var html = function(stateClass){

    var htmlStr = `
    <li>
        <img src="${imgUrl()}" alt="">
        <p>哔哔哔</p>
        <span>$21213</span>

        <div class="delete ${stateClass}">
        <a href="javascript:void(0)">删除</a>
        </div>
    </li>
   
    <li>
        <img src="${imgUrl()}" alt="">
        <p>哔哔哔</p>
        <span>$21213</span>
        <div class="delete ${stateClass}">
            <a href="javascript:void(0)">删除</a>
        </div>
    </li>
    
    <li>
        <img src="${imgUrl()}" alt="">
        <p>哔哔哔</p>
        <span>$21213</span>

        <div class="delete ${stateClass}">
            <a href="javascript:void(0)">删除</a>
        </div>
    </li>
    
    `
   return htmlStr;
}

$('.add').on('click',function(){
    var stateClass='';
    if($('.delete').hasClass('editstate')){
        stateClass='editstate'
    }
   $('ul').append(html(stateClass));
})

$('.edit').on('click',function(){
 $('.delete').toggleClass('editstate')
})

$('ul').on('click','a',function(){
    console.log($(this).parents('li')[0]);
    $(this).parents('li').remove();
})

