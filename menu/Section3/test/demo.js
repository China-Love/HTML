
var addnode = document.querySelector('.add');
var removenode = document.querySelector('.remove');
var toggle1node = document.querySelector('.toggle1');
var toggle2node = document.querySelector('.toggle2');

var hellonode = document.querySelector('.hello');
var wordnode = document.querySelector('.word');
var divnode =document.querySelector('.div');


var addfunction = function (){

    divnode.classList.add('divblack');
    wordnode.classList.add('hellowhite');
    hellonode.classList.add('wordwhite'); 
}

var removefunction = function (){

    divnode.classList.remove('divblack');
    wordnode.classList.remove('hellowhite');
    hellonode.classList.remove('wordwhite');
}

var togglefunction = function (){
    
    divnode.classList.toggle('divblack');
    wordnode.classList.toggle('hellowhite');
    hellonode.classList.toggle('wordwhite');
}

addnode.onclick = function change(){
   addfunction();
}

removenode.onclick = function remove (){
   removefunction();
}

toggle1node.onclick = function toggle1 () {
    if(divnode.classList.contains('divblack')){
       removefunction();
    }
    else
    {
       addfunction();
    }
}



toggle2node.onclick = function toggle2 () {
    togglefunction();
}



var anythingnode = document.querySelector('.anything');
var buttondiv = document.querySelector('.buttondiv');

anythingnode.onclick = function anythingaction () {
   console.log(anythingnode.previousSibling);
   var newbutton = document.createElement('button');
   newbutton.innerText = "do some thing";
   buttondiv.appendChild(newbutton);
}

var linodes =  document.querySelectorAll('.ct>li');

var lielement = linodes[a];

var imgnode = document.createElement('img');
imgnode.setAttribute('style',style="width:200px; height:200px;");
var previewnode = document.querySelector('.img-preview');
previewnode.appendChild(imgnode);


for (var a=0;a<linodes.length;a++){

linodes[a].addEventListener('mouseover', function(){
    imgnode.setAttribute('src','img\\'+this.getAttribute('data-img'));
})
}


var $ = function(querySelector){
    return  document.querySelector(querySelector);
}

var createlement = function(elemnet,test){
    var newelement = document.createElement(elemnet);
    newelement.innerText = test ;
    return newelement;
}

var addclickfunction = function(element){
    element.addEventListener('click',function(){
        console.log(this.innerText);
    })
}

$('.ct-two').onclick = function(e){
    console.log(e.target.innerText);
 }

$('#btn-add-start').addEventListener('click',function(){
    var inputtest = $('.ipt-add-content').value;
    var newobj = createlement('li',inputtest);
    if(inputtest.replace(/(\s*)/g, "").length !=0 ){
        $('.ct-two').insertBefore(newobj,$('.ct-two').firstChild);
    }
    // addclickfunction(newobj);
})

$('#btn-add-end').addEventListener('click',function(){
    var inputtest = $('.ipt-add-content').value;
    var newobj = createlement('li',inputtest);
    if(inputtest.replace(/(\s*)/g, "").length !=0 ){
        $('.ct-two').appendChild(newobj);
    }
    // addclickfunction(newobj);
})


// var obj_lis = document.querySelectorAll(".ct-two>li");
// for(i=0;i<obj_lis.length;i++){
//     addclickfunction(obj_lis[i]);
// }

$('.ct-two>li').onclick = function(e){
    console.log(e.target.innerText);
 }




// var xhr = new XMLHttpRequest;
// xhr.open('GET','/demo.json',true);
// xhr.send();
// xhr.onload = function(){
//     var response = JSON.parse(xhr.response) ;
//     console.log(response.list,'22333');
//     for(var i=0;i<response.list.length;i++){
//         var newobj = createlement("li",response.list[i]);
//         $('.ct-two').appendChild(newobj);
//     }
// }


var xhr = new XMLHttpRequest;
xhr.open('GET','/mock/5bc540424902794864203461/example',ture);
xhr.send();
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<=300 || xhr.status == 304){
        console.log(JSON.parse(xhr.responseText));
    }
}


function css(node, styleObj){
    for(key in styleObj){
        node.style[key] = styleObj[key]
    }
}


css(document.body, {
      'color': 'red',
      'background-color': '#ccc'
})


var xhr = new XMLHttpRequest;
xhr.open('GET','/demo.json',ture);
xhr.send();
xhr.onload = function() {
    if (xhr.status>=200 && xhr.status<=300 || xhr.status==304){

    }
}






















