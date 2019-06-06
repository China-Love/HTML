<template>
 
  <div class="navbar clearfix">
    <router-link :to="{name:'root'}"><img src="../assets/cnodejs_light.svg"></router-link>
    <div class="searchbar">
      <input type="text">
      <span>&#xe644;</span>
    </div>
    <ul>
      <li><router-link :to="{name:'root'}"><a>首页</a></router-link></li>
      <li><a>新手入门</a></li>
      <li><a>API</a></li>
      <li><a>关于</a></li>
      <li><a>注册</a></li>
      <li><a>登录</a></li>
    </ul>
  </div>
</template>

<script>



export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


input {
  caret-color: black;
}

.navbar{
  background: rgb(52, 52, 52);
  width: calc(100% - 20px);
  padding: 10px;
  /* height: 50px; */
}
img{
   width: 120px;
   float: left;
   margin-left: 80px;
   margin-top: 7px;
}

li{
  display: inline-block;
  padding: 6px 10px;
}
a{
  color: rgb(190, 190, 190);
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}
input{
  width: 206px;
  height: 26px;
  background: rgb(117, 117, 117);
  border-radius: 10px;
  border: 1px solid rgb(117, 117, 117);
  outline: none;
  padding-left: 22px;
  position: absolute;;

  border: none;
  -webkit-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.searchbar{
  width: 230px;
  height: 28px;
  margin-left: 50px;
  margin-top: 12px;
  position: relative;
  display: inline-block;
}

span{
  position: absolute;
  left: 5px;
  top:5px;
  font-size: 16px;
  color: rgb(74, 74, 74);
  font-family: iconfont;
}

.clearfix::after{
  display: block;
  content: '';
  clear: both;
}

ul{
  float: right;
   margin: 7px 100px;
}


@media  (min-width:538px) and (max-width:1038px){
    ul{
      float: left;
      margin: 7px 112px;
    }
    
}
@media (max-width:537px){
  
    img{
      float: none;
      width: 140px;
      margin:  0px auto;
      display: block;
    }
     ul{
      float: left;
      margin: 0px 30px;
    }
    .searchbar{
      width: 230px;
      height: 28px;
      margin: 7px auto;
      position: relative;
      display: block;
    }

    
}


@font-face {
  font-family: 'iconfont';  /* project id 809817 */
  src: url('https://at.alicdn.com/t/font_809817_qyy9bbaf0g.eot');
  src: url('https://at.alicdn.com/t/font_809817_qyy9bbaf0g.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_809817_qyy9bbaf0g.woff') format('woff'),
  url('https://at.alicdn.com/t/font_809817_qyy9bbaf0g.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_809817_qyy9bbaf0g.svg#iconfont') format('svg');
}

</style>