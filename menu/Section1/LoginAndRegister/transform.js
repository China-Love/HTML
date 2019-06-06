var $ = function(ele){
    return document.querySelector(ele);
}
var $$ = function(ele){
    return document.querySelectorAll(ele);
}

// 登录切换
var logintransform = function(){
    $('.flipper').classList.remove('transform-front')
    $('.flipper').classList.add('transform-back')
    console.log("front");

}
// 注册切换
var registertransform = function(){
    $('.flipper').classList.remove('transform-back')
    $('.flipper').classList.add('transform-front')
    console.log("back");
}

$('.back .logintop').addEventListener('click',function(){
    registertransform()
})

$('.front .registertop').addEventListener('click',function(){
    logintransform()
})

// 点击删除

$('.front .deleteiconfont').addEventListener('click',function(){
    $('.flipper').style.display = 'none';
})

$('.back .deleteiconfont').addEventListener('click',function(){
    $('.flipper').style.display = 'none';
})

// 点击loginiconfont
$('.loginiconfont').addEventListener('click',function(){
    $('.flipper').style.display = 'block';
})


// 点击背景空白处
$('.flip-container').addEventListener('click',function(ele){
    if(ele.target.classList.value==='flip-container'){
        $('.flipper').style.display = 'none';
    }
})

// 点击登录按钮
$('.loginbtn').addEventListener('click',function(ele){
  
    ele.preventDefault();
    var namestr = document.getElementsByName('name')[0].value;
    var passwordstr = document.getElementsByName('password')[0].value;
    console.log(namestr);
   
    var reg = /(^\w{3,8}$)/g
    if(namestr.match(reg)){
        console.log('1满足')
        var reg = /(^\w{6,10}$)/g
        if(passwordstr.match(reg)){
            console.log('2满足')
           
            if(localStorage['value']){
                var obj =JSON.parse(localStorage['value']);
                if(obj.name===namestr && obj.password===passwordstr){
                    // alert('登录成功')
                    document.location.href = "../Company/website.html";
                }else{
                    $('.erroralert').innerText = "用户名或密码错误";
                    $('.erroralert').style.height = '12px';
                    console.log('不满足') 
                }
            }else{
                $('.erroralert').innerText = "用户名不存在";
                $('.erroralert').style.height = '12px';
                console.log('不满足') 
            }
            
            
           
        }else{
            console.log('2不满足') 
            $('.erroralert').innerText = "密码需输入6-10个字符，包括字母数字下划线";
            $('.erroralert').style.height = '12px';
           
        }
       
    }else{
        console.log('1不满足')
        $('.erroralert').innerText = "用户名需输入3-8个字符，包括字母数字下划线";
        $('.erroralert').style.height = '12px';
       
    }
 
 
    
})


// 点击注册按钮
$('.registerbtn').addEventListener('click',function(ele){

    ele.preventDefault();
    var namestr = document.getElementsByName('name')[1].value;
    var passwordstr = document.getElementsByName('password')[1].value;
    var surepasswordstr = document.getElementsByName('surepassword')[0].value;

    var reg = /(^\w{3,8}$)/g
    if(namestr.match(reg)){
        console.log('1满足')
        var reg = /(^\w{6,10}$)/g
        if(passwordstr.match(reg)){
            if(passwordstr === surepasswordstr){
                
                console.log('2满足')
                alert('注册成功,请登录')
                var obj = {'name':`${namestr}`,'password':`${passwordstr}`};
                localStorage['value'] = JSON.stringify(obj);
                registertransform();
            
            }else{
                $$('.erroralert')[1].innerText = "两次输入的密码不一致";
                $$('.erroralert')[1].style.height = '12px';
                
                
            }
            
        }else{
            console.log('2不满足') 
            $$('.erroralert')[1].innerText = "密码需输入6-10个字符，包括字母数字下划线";
            $$('.erroralert')[1].style.height = '12px';
          
        }
      
    }else{
        console.log('1不满足')
        $$('.erroralert')[1].innerText = "用户名需输入3-8个字符，包括字母数字下划线";
        $$('.erroralert')[1].style.height = '12px';
       
    }
 



    
})
 

