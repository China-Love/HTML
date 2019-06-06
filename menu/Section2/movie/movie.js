$('footer>div').on('click',function(){
    app.index = $(this).index();
   $(this).addClass('active').siblings().removeClass('active');
   $('main>section').eq($(this).index()).addClass('active').siblings().removeClass('active');
})

var htmlobj =`  <li>
                    <img class="img" src="" alt="">
                    <div class="text">
                        <h3>绍圣克的救赎</h3>
                        <div><span class='grade'></span> \/ <span class='time'>1995</span> \/ <span class='style'>犯罪、剧情</span></div>
                        <div>导演；<span class='directors'>福克兰-柯兰多</span></div>
                        <div>主演：<span class='casts'>张国荣</span></div>
                    </div>
                </li>
            `

var app ={
    init: function(){
        this.index = 0;
        tabtop.init();
        tabus.init();
        tabsearch.init();
    }
}

var tabtop = {

    init : function(){
        
        this.pageindex = 0; 
        this.loading = false ;
        this.request();
        this.scroll();
        this.liclick();
        this.dataarr= [];
       
    },
    request: function(){
        var _this =this;
        if(_this.loading===true){
           
            return;
        } 
       
        _this.loading = true;
        _this.pageindex += 10;
        $('.loading').show();
        $.ajax({
            url: 'https://api.douban.com/v2/movie/top250',
                  data: {
                    start: _this.pageindex,
                    count: 10
                  },
            dataType: 'jsonp'
        }).done(function(result){
            _this.render(result);
           
            console.log(result);
        }).fail(function(){
        
        }).always(function(){
            _this.loading = false;
            $('.loading').hide();
        })
    },
    render : function(result){
        var _this = this;
        $(result.subjects).each(function(index,obj){
            _this.dataarr.push(obj); 

            var $node = $(htmlobj);
     
             var casts = [];
                 $(obj.casts).each(function(index,ele){
                     casts.push(ele.name);
                 });
             
             $node.find('.img').attr('src',obj.images.small);
             $node.find('h3').text(obj.title);
             $node.find('.grade').text(' '+obj.rating.average);
             $node.find('.time').text(obj.year);
             $node.find('.style').text(obj.genres.join('、'));
             $node.find('.directors').text(obj.directors[0].name);
             $node.find('.casts').text(casts.join('、'));
      
             $('.se-top>.container').append($node);
            
         })
         
         
     },
     scroll : function(){
        
        var _this =this;
        
        $('main').scroll(function(){
            if(app.index!==0){
                return;
            } 
          
            if($('main')[0].scrollHeight<($('main').height()+$('main')[0].scrollTop+10)){
                _this.request();
            }

        })
        
       
        
     },
     liclick : function(){
         var _this =this;
         $('.se-top>.container').on('click','li',function(){
           location.href= _this.dataarr[$(this).index()].alt;
         })
     }
}

var tabus = {
    init : function(){
       
        this.pageindex = 0; 
        this.loading = false ;
        this.dataarr=[];
        this.request();
        // this.scroll();
        this.liclick();
        
        
    },
    request: function(){
        var _this =this;
        if(_this.loading===true){
            return;
        } 
        _this.loading = true;
        _this.pageindex += 10; 
        $('.loading').show();
        $.ajax({
            url: 'https://api.douban.com/v2/movie/us_box',
                  data: {
                    start: _this.pageindex,
                    count: 10
                  },
            dataType: 'jsonp'
        }).done(function(result){
            console.log(result);
            _this.render(result);
           
        }).fail(function(){
        
        }).always(function(){
            _this.loading = false;
            $('.loading').hide();
        })
    },
    render : function(result){
        var _this =this;
        $(result.subjects).each(function(index,obj){
            
            var $node = $(htmlobj);
     
             var casts = [];
                 $(obj.casts).each(function(index,ele){
                     casts.push(ele.subject.name);
                 });
             obj =obj.subject;

             _this.dataarr.push(obj);

             $node.find('.img').attr('src',obj.images.small);
             $node.find('h3').text(obj.title);
             $node.find('.grade').text(' '+obj.rating.average);
             $node.find('.time').text(obj.year);
             $node.find('.style').text(obj.genres.join('、'));
             $node.find('.directors').text(obj.directors[0].name);
             $node.find('.casts').text(casts.join('、'));
            
             $('.se-us>.container').append($node);
            
         })
         
         
     },
     scroll : function(){
        
        var _this =this;

        $('main').scroll(function(){
        if(app.index!==1){
            console.log(clock,'4==============')
            return;
        } 
        if($('main')[0].scrollHeight<($('main').height()+$('main')[0].scrollTop+10)){
                
            console.log(_this.pageindex,'5==============')
            _this.request();
            
        }
       })
    
     },
     liclick : function(){
        var _this =this;
        $('.se-us>.container').on('click','li',function(){
          location.href= _this.dataarr[$(this).index()].alt;
        })
    }
}


var tabsearch = {
    init : function(){
       
        this.loading = false ;
        this.keyword = '';
        this.searchbtnclickmonitor();
    
    },
    request: function(){
        var _this =this;
  
       
        $('.loading').show();
        $.ajax({
            url: 'https://api.douban.com/v2/movie/search',
            data: {
              q: _this.keyword
            },
            dataType: 'jsonp'
        }).done(function(result){
            _this.render(result);
            console.log(result);
        }).fail(function(){
        
        }).always(function(){
            _this.loading = false;
            $('.loading').hide();
        })
    },
    render : function(result){
        $('.se-search>.container>li').remove();
        $(result.subjects).each(function(index,obj){
     
            var $node = $(htmlobj);
     
             var casts = [];
                 $(obj.casts).each(function(index,ele){
                     casts.push(ele.name);
                 });
              
             $node.find('.img').attr('src',obj.images.small);
             $node.find('h3').text(obj.title);
             $node.find('.grade').text(' '+obj.rating.average);
             $node.find('.time').text(obj.year);
             $node.find('.style').text(obj.genres.join('、'));
             $node.find('.directors').text(obj.directors[0].name);
             $node.find('.casts').text(casts.join('、'));
            
             $('.se-search>.container').append($node);
            
         })
         
         
     },
   

     searchbtnclickmonitor : function(){
       var _this = this;
       $('.searchbtn').on('click',function(){
           _this.keyword = $('input').val();
          
           _this.request();
       })
     }
    
}


app.init();
